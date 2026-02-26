export type Dialect = 'gulf' | 'egyptian' | 'levantine' | 'moroccan' | 'msa'
export type Platform = 'instagram' | 'tiktok' | 'twitter' | 'all'
export type ContentType = 'promotional' | 'educational' | 'engagement' | 'story'

interface GenerateContentParams {
  businessName: string
  businessDescription: string
  targetAudience: string
  tone: string
  dialect: Dialect
  keywords: string[]
  platform: Platform
  contentType: ContentType
  quantity: number
  userPrompt?: string
}

const dialectInstructions: Record<Dialect, string> = {
  gulf: 'استخدم اللهجة الخليجية (السعودية، الإمارات، الكويت، قطر، البحرين) بأسلوبها الأصيل',
  egyptian: 'استخدم اللهجة المصرية بأسلوبها الشعبي الجذاب',
  levantine: 'استخدم اللهجة الشامية (لبنان، سوريا، الأردن، فلسطين)',
  moroccan: 'استخدم اللهجة المغربية بأسلوبها المميز',
  msa: 'استخدم الفصحى المعاصرة بأسلوب راقٍ'
}

const platformInstructions: Record<Platform, string> = {
  instagram: 'منصة إنستغرام - محتوى بصري جذاب مع نص طويل مناسب',
  tiktok: 'منصة تيك توك - محتوى قصير وحصري مع تحديات ورموز',
  twitter: 'منصة إكس (تويتر) - محتوى موجز ومباشر',
  all: 'محتوى متعدد المنصات'
}

export function generateContentPrompt(params: GenerateContentParams): string {
  const {
    businessName,
    businessDescription,
    targetAudience,
    tone,
    dialect,
    keywords,
    platform,
    contentType,
    quantity,
    userPrompt
  } = params

  const dialectInstr = dialectInstructions[dialect]
  const platformInstr = platformInstructions[platform]

  return `
أنت خبير تسويق رقمي متخصص في السوق العربي.
${dialectInstr}

معلومات النشاط التجاري:
- اسم النشاط: ${businessName}
- وصف النشاط: ${businessDescription}
- الجمهور المستهدف: ${targetAudience}$
- النبرة: ${tone}
${userPrompt ? `- طلب إضافي: ${userPrompt}` : ''}

المنصة: ${platformInstr}
نوع المحتوى: ${contentType}
الكلمات المفتاحية: ${keywords.join(', ')}

المطلوب:
生成 ${quantity} منشور/منشورات

كل منشور يجب أن يحتوي على:
{
  "platform": "instagram" | "tiktok" | "twitter",
  "content": "النص الكامل للمنشور",
  "caption": "النص المختصر للإنستغرام",
  "hashtags": ["5_hashtags_عربية", "5_english_hashtags"],
  "cta": "دعوة_للإجراء",
  "imagePrompt": "English description for AI image generation"
}

التعليمات:
- اجعل المحتوى احترافياً وجذاباً وأصيلاً
- تجنب الكلمات clichés والعبارات المبتذلة
- استخدم مزيجاً من 5 هاشتاقات عربية و 5 هاشتاقات إنجليزية
- اجعل CTA فعالاً ومشجعاً للتفاعل
- اكتب imagePrompt بالإنجليزية لوصف الصورة المطلوبة
- أرجع مصفوفة JSON فقط بدون أي نص إضافي
`.trim()
}
