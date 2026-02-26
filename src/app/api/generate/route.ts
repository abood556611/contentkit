import { createClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/db'
import { checkCredits, deductCredits } from '@/lib/credits'
import { generateContentPrompt } from '@/lib/ai/prompts'
import { parseAIResponse, GeneratedPost } from '@/lib/ai/parser'
import OpenAI from 'openai'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const generateSchema = z.object({
  profileId: z.string().uuid(),
  prompt: z.string().optional(),
  platform: z.enum(['INSTAGRAM', 'TIKTOK', 'TWITTER', 'ALL']),
  contentType: z.enum(['PROMOTIONAL', 'EDUCATIONAL', 'ENGAGEMENT', 'STORY']),
  quantity: z.number().int().min(1).max(10).default(3)
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'غير مصرح لك بالوصول' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validation = generateSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'بيانات غير صالحة', details: validation.error.issues },
        { status: 400 }
      )
    }

    const { profileId, prompt: userPrompt, platform, contentType, quantity } = validation.data

    const hasCredits = await checkCredits(user.id, quantity)

    if (!hasCredits) {
      return NextResponse.json(
        { error: 'رصيدك غير كافٍ. يرجى شراء رصيد إضافي' },
        { status: 402 }
      )
    }

    const profile = await prisma.businessProfile.findFirst({
      where: {
        id: profileId,
        userId: user.id
      }
    })

    if (!profile) {
      return NextResponse.json(
        { error: 'الملف الشخصي غير موجود' },
        { status: 404 }
      )
    }

    const prompt = generateContentPrompt({
      businessName: profile.name,
      businessDescription: profile.description ?? '',
      targetAudience: profile.targetAudience ?? '',
      tone: profile.tone.toLowerCase(),
      dialect: profile.dialect.toLowerCase() as 'gulf' | 'egyptian' | 'levantine' | 'moroccan' | 'msa',
      keywords: profile.keywords,
      platform: platform.toLowerCase() as 'instagram' | 'tiktok' | 'twitter' | 'all',
      contentType: contentType.toLowerCase() as 'promotional' | 'educational' | 'engagement' | 'story',
      quantity,
      userPrompt
    })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: prompt }
      ],
      temperature: 0.8,
      response_format: { type: 'json_object' }
    })

    const responseText = completion.choices[0]?.message?.content ?? ''

    if (!responseText) {
      return NextResponse.json(
        { error: 'فشل في توليد المحتوى. يرجى المحاولة مرة أخرى' },
        { status: 500 }
      )
    }

    const posts = parseAIResponse(responseText)

    const generation = await prisma.generation.create({
      data: {
        userId: user.id,
        profileId,
        prompt: userPrompt ?? '',
        platform,
        contentType,
        status: 'COMPLETED',
        creditsUsed: quantity,
        tokensUsed: completion.usage?.total_tokens ?? null
      }
    })

    await prisma.generatedPost.createMany({
      data: posts.map((post: GeneratedPost) => ({
        generationId: generation.id,
        userId: user.id,
        platform: post.platform.toUpperCase() as 'INSTAGRAM' | 'TIKTOK' | 'TWITTER',
        content: post.content,
        caption: post.caption,
        hashtags: post.hashtags,
        cta: post.cta,
        imagePrompt: post.imagePrompt
      }))
    })

    await deductCredits(user.id, quantity)

    return NextResponse.json({
      generationId: generation.id,
      posts
    })
  } catch (error) {
    console.error('Generate error:', error)
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم. يرجى المحاولة مرة أخرى' },
      { status: 500 }
    )
  }
}
