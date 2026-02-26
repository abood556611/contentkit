'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Check, Crown, Zap, CreditCard } from 'lucide-react'

const plans = [
  {
    name: 'مجاني', nameEn: 'Free', price: { monthly: 0, yearly: 0 },
    credits: 10, profiles: 1, popular: false,
    features: ['10 توليدات/شهر', 'ملف بزنس واحد', 'قوالب أساسية', 'تصدير نصي'],
  },
  {
    name: 'ستارتر', nameEn: 'Starter', price: { monthly: 19, yearly: 15 },
    credits: 100, profiles: 3, popular: false,
    features: ['100 توليد/شهر', '3 ملفات بزنس', 'كل القوالب', 'تصدير PNG', 'كل اللهجات'],
  },
  {
    name: 'برو', nameEn: 'Pro', price: { monthly: 49, yearly: 39 },
    credits: 400, profiles: 10, popular: true,
    features: ['400 توليد/شهر', '10 ملفات بزنس', 'أولوية AI', 'كل القوالب', 'كل اللهجات', 'دعم أولوية'],
  },
]

export default function BillingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const currentPlan = 'مجاني'
  const creditsUsed = 0
  const creditsTotal = 10

  return (
    <div className="p-6 max-w-5xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">الاشتراك والفواتير</h1>
      <p className="text-gray-500 mb-8">أدر اشتراكك وتابع استهلاكك</p>

      {/* Current Plan */}
      <Card className="mb-8 border-purple-200 bg-purple-50/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">الخطة الحالية: {currentPlan}</h3>
                <p className="text-sm text-gray-500">رصيدك: {creditsTotal - creditsUsed} كريدت متبقي</p>
              </div>
            </div>
          </div>
          <Progress value={(creditsUsed / creditsTotal) * 100} className="h-2 [&>[data-slot=progress-indicator]]:bg-purple-600" />
          <p className="text-xs text-gray-400 mt-2">{creditsUsed} من {creditsTotal} كريدت مستخدم</p>
        </CardContent>
      </Card>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>شهري</span>
        <button onClick={() => setIsAnnual(!isAnnual)}
          className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-purple-600' : 'bg-gray-300'}`}>
          <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${isAnnual ? 'right-0.5' : 'right-7'}`} />
        </button>
        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-400'}`}>سنوي</span>
        {isAnnual && <Badge className="bg-green-100 text-green-700 border-0">وفّر 20%</Badge>}
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <Card key={plan.nameEn} className={`relative ${plan.popular ? 'border-purple-500 shadow-soft border-2' : 'border-gray-100'}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-purple-blue text-white border-0 gap-1"><Crown className="w-3 h-3" /> الأكثر شيوعاً</Badge>
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">${isAnnual ? plan.price.yearly : plan.price.monthly}</span>
                <span className="text-gray-400 text-sm">/شهر</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{plan.credits} توليد/شهر</p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.name === currentPlan ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : plan.popular ? 'bg-gradient-purple-blue text-white border-0' : ''}`}
                variant={plan.name === currentPlan ? 'secondary' : plan.popular ? 'default' : 'outline'}
                disabled={plan.name === currentPlan}>
                {plan.name === currentPlan ? 'خطتك الحالية' : <><Zap className="w-4 h-4 ml-1" /> ترقية الآن</>}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
