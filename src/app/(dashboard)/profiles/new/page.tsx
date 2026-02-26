'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Save, Loader2 } from 'lucide-react'
import Link from 'next/link'

const tones = [
  { value: 'FORMAL', label: 'رسمي', emoji: '👔' },
  { value: 'FRIENDLY', label: 'ودي', emoji: '😊' },
  { value: 'HUMOROUS', label: 'فكاهي', emoji: '😄' },
  { value: 'INSPIRATIONAL', label: 'ملهم', emoji: '✨' },
]

const industries = ['مطاعم', 'عطور', 'ملابس', 'تقنية', 'صحة وجمال', 'تعليم', 'استشارات', 'عقارات', 'أخرى']

export default function NewProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTone, setSelectedTone] = useState('FRIENDLY')
  const [formData, setFormData] = useState({
    name: '', industry: '', description: '', targetAudience: '', dialect: 'GULF', keywords: '', brandColor1: '#8B5CF6', brandColor2: '#3B82F6', brandColor3: '#10B981',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Save to DB
    setTimeout(() => {
      setIsLoading(false)
      router.push('/dashboard/profiles')
    }, 1000)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto" dir="rtl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/dashboard/profiles">
          <Button variant="ghost" size="sm"><ArrowRight className="w-4 h-4" /></Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إنشاء ملف بزنس جديد</h1>
          <p className="text-gray-500 mt-1">أضف معلومات بزنسك لتوليد محتوى مخصص</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1 */}
        <Card>
          <CardHeader><h2 className="text-lg font-bold">المعلومات الأساسية</h2></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>اسم البزنس *</Label>
              <Input placeholder="مثال: متجر الأناقة" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="space-y-2">
              <Label>المجال</Label>
              <Select value={formData.industry} onValueChange={(v) => setFormData({...formData, industry: v})}>
                <SelectTrigger><SelectValue placeholder="اختر المجال" /></SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (<SelectItem key={ind} value={ind}>{ind}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>وصف البزنس</Label>
              <Textarea placeholder="صف بزنسك بإيجاز..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} />
            </div>
          </CardContent>
        </Card>

        {/* Section 2 */}
        <Card>
          <CardHeader><h2 className="text-lg font-bold">الجمهور والأسلوب</h2></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>الجمهور المستهدف</Label>
              <Textarea placeholder="مثال: نساء 25-40 سنة مهتمات بالعناية بالبشرة" value={formData.targetAudience} onChange={(e) => setFormData({...formData, targetAudience: e.target.value})} rows={2} />
            </div>
            <div className="space-y-2">
              <Label>نبرة الكتابة</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {tones.map((tone) => (
                  <button key={tone.value} type="button" onClick={() => setSelectedTone(tone.value)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${selectedTone === tone.value ? 'border-purple-500 bg-purple-50' : 'border-gray-100 hover:border-gray-200'}`}>
                    <div className="text-2xl mb-1">{tone.emoji}</div>
                    <div className="text-sm font-medium">{tone.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>اللهجة</Label>
              <Select value={formData.dialect} onValueChange={(v) => setFormData({...formData, dialect: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="MSA">فصحى</SelectItem>
                  <SelectItem value="GULF">خليجية</SelectItem>
                  <SelectItem value="EGYPTIAN">مصرية</SelectItem>
                  <SelectItem value="LEVANTINE">شامية</SelectItem>
                  <SelectItem value="MOROCCAN">مغربية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 */}
        <Card>
          <CardHeader><h2 className="text-lg font-bold">الهوية البصرية</h2></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>الكلمات المفتاحية</Label>
              <Input placeholder="فصل بفواصل: جودة، فخامة، عربي" value={formData.keywords} onChange={(e) => setFormData({...formData, keywords: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label>ألوان البراند</Label>
              <div className="flex gap-4">
                <input type="color" value={formData.brandColor1} onChange={(e) => setFormData({...formData, brandColor1: e.target.value})} className="w-12 h-12 rounded-lg cursor-pointer border-0" />
                <input type="color" value={formData.brandColor2} onChange={(e) => setFormData({...formData, brandColor2: e.target.value})} className="w-12 h-12 rounded-lg cursor-pointer border-0" />
                <input type="color" value={formData.brandColor3} onChange={(e) => setFormData({...formData, brandColor3: e.target.value})} className="w-12 h-12 rounded-lg cursor-pointer border-0" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" className="w-full bg-gradient-purple-blue text-white border-0 h-12 text-lg gap-2" disabled={isLoading || !formData.name}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> حفظ الملف</>}
        </Button>
      </form>
    </div>
  )
}
