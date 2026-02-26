'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { User, Shield, SlidersHorizontal, Save, Loader2 } from 'lucide-react'

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">الإعدادات</h1>
      <p className="text-gray-500 mb-8">أدر حسابك وتفضيلاتك</p>

      <Tabs defaultValue="account" dir="rtl">
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="account" className="gap-2"><User className="w-4 h-4" /> الحساب</TabsTrigger>
          <TabsTrigger value="security" className="gap-2"><Shield className="w-4 h-4" /> الأمان</TabsTrigger>
          <TabsTrigger value="preferences" className="gap-2"><SlidersHorizontal className="w-4 h-4" /> التفضيلات</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader><h2 className="text-lg font-bold">معلومات الحساب</h2></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl">👤</div>
                <Button variant="outline" size="sm">تغيير الصورة</Button>
              </div>
              <div className="space-y-2">
                <Label>الاسم</Label>
                <Input placeholder="اسمك الكامل" defaultValue="عبدالله" />
              </div>
              <div className="space-y-2">
                <Label>البريد الإلكتروني</Label>
                <Input type="email" disabled defaultValue="user@example.com" className="bg-gray-50" />
                <p className="text-xs text-gray-400">لتغيير البريد، تواصل مع الدعم</p>
              </div>
              <Separator />
              <Button onClick={handleSave} className="bg-gradient-purple-blue text-white border-0 gap-2" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                حفظ التغييرات
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader><h2 className="text-lg font-bold">تغيير كلمة المرور</h2></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>كلمة المرور الحالية</Label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label>كلمة المرور الجديدة</Label>
                <Input type="password" placeholder="6 أحرف على الأقل" />
              </div>
              <div className="space-y-2">
                <Label>تأكيد كلمة المرور الجديدة</Label>
                <Input type="password" placeholder="أعد كتابة كلمة المرور" />
              </div>
              <Separator />
              <Button className="bg-gradient-purple-blue text-white border-0 gap-2">
                <Shield className="w-4 h-4" /> تحديث كلمة المرور
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6 border-red-200">
            <CardHeader><h2 className="text-lg font-bold text-red-600">منطقة الخطر</h2></CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">حذف الحساب نهائي ولا يمكن التراجع عنه.</p>
              <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">حذف الحساب</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader><h2 className="text-lg font-bold">التفضيلات</h2></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>اللغة</Label>
                <Select defaultValue="ar">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>اللهجة الافتراضية</Label>
                <Select defaultValue="GULF">
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
              <div className="space-y-2">
                <Label>المنصة الافتراضية</Label>
                <Select defaultValue="INSTAGRAM">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INSTAGRAM">انستقرام</SelectItem>
                    <SelectItem value="TIKTOK">تيكتوك</SelectItem>
                    <SelectItem value="TWITTER">تويتر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <Button onClick={handleSave} className="bg-gradient-purple-blue text-white border-0 gap-2" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                حفظ التفضيلات
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
