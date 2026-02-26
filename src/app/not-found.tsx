import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gradient-purple-blue mb-4">٤٠٤</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">الصفحة غير موجودة</h2>
        <p className="text-gray-500 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
        <Link href="/">
          <Button className="bg-gradient-purple-blue text-white border-0">العودة للرئيسية</Button>
        </Link>
      </div>
    </div>
  )
}
