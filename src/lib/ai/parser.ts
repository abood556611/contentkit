export interface GeneratedPost {
  platform: string
  content: string
  caption?: string
  hashtags: string[]
  cta?: string
  imagePrompt: string
}

export function parseAIResponse(text: string): GeneratedPost[] {
  try {
    let jsonStr = text.trim()

    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.slice(7)
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.slice(3)
    }

    if (jsonStr.endsWith('```')) {
      jsonStr = jsonStr.slice(0, -3)
    }

    jsonStr = jsonStr.trim()

    const parsed = JSON.parse(jsonStr)

    if (!Array.isArray(parsed)) {
      throw new Error('Response is not an array')
    }

    const posts: GeneratedPost[] = parsed.map((item, index) => {
      if (!item.platform || !item.content) {
        throw new Error(`Missing required fields at index ${index}`)
      }

      return {
        platform: item.platform,
        content: item.content,
        caption: item.caption ?? undefined,
        hashtags: Array.isArray(item.hashtags) ? item.hashtags : [],
        cta: item.cta ?? undefined,
        imagePrompt: item.imagePrompt ?? ''
      }
    })

    return posts
  } catch (error) {
    console.error('Failed to parse AI response:', error)
    return [
      {
        platform: 'instagram',
        content: 'عذراً، حدث خطأ في معالجة الاستجابة. يرجى المحاولة مرة أخرى.',
        caption: 'عذراً، حدث خطأ في معالجة الاستجابة',
        hashtags: [],
        cta: undefined,
        imagePrompt: ''
      }
    ]
  }
}
