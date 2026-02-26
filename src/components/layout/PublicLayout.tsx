'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './Logo'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/pricing', label: 'الأسعار' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Logo size="md" />
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost">تسجيل الدخول</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-purple-blue hover:opacity-90 transition-opacity text-white border-0 shadow-soft">
                ابدأ مجاناً
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 font-medium py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <hr className="border-gray-50" />
            <Link href="/auth/login" className="w-full">
              <Button variant="outline" className="w-full">تسجيل الدخول</Button>
            </Link>
            <Link href="/auth/register" className="w-full">
              <Button className="w-full bg-gradient-purple-blue text-white border-0">ابدأ مجاناً</Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <Logo size="md" />
              <p className="mt-4 text-gray-500 text-sm">
                محتوى سوشال ميديا احترافي في ثوانٍ.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">المنصة</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/#features">الميزات</Link></li>
                <li><Link href="/pricing">الأسعار</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/contact">اتصل بنا</Link></li>
                <li><Link href="/docs">التوثيق</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">قانوني</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/terms">الشروط</Link></li>
                <li><Link href="/privacy">الخصوصية</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
            © 2025 كونتنت كيت. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  )
}
