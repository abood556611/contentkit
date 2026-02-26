'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Pen, 
  Sparkles, 
  Rocket, 
  Zap, 
  Instagram, 
  Palette, 
  Hash, 
  Save, 
  Globe, 
  Check,
  ChevronDown,
  Star,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const steps = [
  {
    icon: Pen,
    title: 'صف بزنسك',
    desc: 'اكتب اسم بزنسك ونوعه في ثوانٍ'
  },
  {
    icon: Sparkles,
    title: 'الذكاء الاصطناعي يعمل',
    desc: 'نولّد لك محتوى احترافي ومتنوع'
  },
  {
    icon: Rocket,
    title: 'انشر مباشرة',
    desc: 'عدّل وانشر على كل المنصات'
  }
]

const features = [
  { icon: Zap, title: 'توليد فوري بالعربي', desc: 'احصل على محتوى في ثوانٍ' },
  { icon: Instagram, title: 'انستقرام + تيكتوك + تويتر', desc: 'منصات متعددة بجودة عالية' },
  { icon: Palette, title: 'قوالب تصاميم جاهزة', desc: 'تصاميم احترافية تناسب كل مجال' },
  { icon: Hash, title: 'هاشتاقات ذكية', desc: 'هاشتاقات تناسب المحتوى والجمهور' },
  { icon: Save, title: 'حفظ وتنظيم المحتوى', desc: 'منصة مركزية لكل منشوراتك' },
  { icon: Globe, title: 'لهجات عربية متعددة', desc: 'فصحى، مصرى، خليجي، شامي' }
]

const pricingPlans = [
  {
    name: 'مجاني',
    price: '0',
    period: 'للابد',
    features: ['10 توليدات مجانية', '5 منشورات أسبوعياً', 'قالب تصميم واحد', 'هاشتاقات أساسية'],
    popular: false,
    cta: 'ابدأ مجاناً'
  },
  {
    name: 'ستارتر',
    price: '19',
    period: 'شهرياً',
    features: ['توليد غير محدود', 'كل القوالب', 'كل المنصات', 'هاشتاقات ذكية', 'تصدير PDF'],
    popular: false,
    cta: 'اشترك الآن'
  },
  {
    name: 'برو',
    price: '49',
    period: 'شهرياً',
    features: ['كل شيء في ستارتر', 'أولوية المعالجة', 'تحليلات متقدمة', 'فريق عمل (5members)', 'دعم م优先'],
    popular: true,
    cta: 'اشترك الآن'
  }
]

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'مالك متجر إلكتروني',
    text: 'وفرت عليا وقت كبير في إنشاء محتوى التسويق. أنصح به بشدة لكل صاحب بزنس عربي.',
    rating: 5
  },
  {
    name: 'سارة عبدالله',
    role: 'مديرة تسويق',
    text: 'أفضل أداة للمحتوى العربي. الهاشتاقات الذكية ساعدتني أوصل لجمهور أكبر بكثير.',
    rating: 5
  },
  {
    name: 'خالد يوسف',
    role: 'صاحب مطعم',
    desc: 'الوصف والمحتوى بالعربي ساعدني أكسب عملاء جدد. النتائج كانت مذهلة في أول شهر.',
    rating: 5
  }
]

const faqs = [
  {
    q: 'هل هو مجاني للاستخدام؟',
    a: 'نعم،我们有免费套餐让你开始使用。你可以获得10个免费生成内容。'
  },
  {
    q: 'كم دقيقة所需的 времени?',
    a: '只需要几秒钟！你只需要描述你的业务，人工智能会立即生成专业内容。'
  },
  {
    q: 'هل يدعم لهجات عربية أخرى؟',
    a: 'نعم، ن 支持多种阿拉伯语方言，包括埃及语、沙特语、叙利亚语、摩洛哥语等。'
  },
  {
    q: 'هل يمكنني النشر مباشرة على المنصات؟',
    a: '目前，我们生成内容，你可以复制并发布到任何平台。'
  },
  {
    q: 'ما هي المنصات المدعومة؟',
    a: 'ن 支持所有主要社交媒体平台，包括 Instagram、Twitter、TikTok、Facebook 和 LinkedIn。'
  },
  {
    q: 'هل يمكنني إلغاء الاشتراك في أي وقت؟',
    a: '是的，你可以随时取消订阅，没有长期承诺。'
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="border-b border-purple-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-right text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-purple-500" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [annual, setAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans RTL">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ddd6fe%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        <div className="relative container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              محتوى سوشال ميديا{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                احترافي في ثوانٍ
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              صف بزنسك بجملة واحدة، واحصل على أسبوع محتوى جاهز للنشر
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link 
                href="/auth/register"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                ابدأ مجاناً
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              
              <a 
                href="#how-it-works"
                className="px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold rounded-full text-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                شاهد كيف يعمل
              </a>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>10 توليدات مجانية</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>لا بطاقة مطلوبة</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>إلغاء في أي وقت</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              كيف يعمل؟
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-xl mx-auto">
              في ثلاث خطوات بسيطة، احصل على محتوى احترافي لمنصات التواصل الاجتماعي
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.2}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-purple-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              مميزاتنا
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-xl mx-auto">
              أدوات متكاملة لإنشاء محتوى عربي احترافي
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-lg hover:border-purple-200 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-xl mx-auto">
              اختر الخطة المناسبة لك
            </p>
            
            <div className="flex justify-center items-center gap-3 mb-16">
              <span className={`text-sm font-medium ${!annual ? 'text-gray-900' : 'text-gray-400'}`}>شهري</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-purple-600' : 'bg-gray-200'}`}
              >
                <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${annual ? 'left-8' : 'left-1'}`}></span>
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-gray-900' : 'text-gray-400'}`}>سنوي <span className="text-green-500 text-xs">وفر 20%</span></span>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FadeIn key={plan.name} delay={index * 0.15}>
                <div className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${plan.popular ? 'border-purple-500 shadow-xl shadow-purple-200 scale-105' : 'border-purple-100 shadow-lg hover:shadow-xl'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      الأكثر شعبية
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-gray-900">${annual ? Math.floor(Number(plan.price) * 0.8) : plan.price}</span>
                    <span className="text-gray-500">$/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'}`}>
                    {plan.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-xl mx-auto">
              ماذا يقولون عنا؟
            </p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.15}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-50">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              كل ما تحتاج معرفته
            </p>
          </FadeIn>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ابدأ الآن مجاناً
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              احصل على 10 توليدات مجانية وجرب كل المميزات قبل الاشتراك
            </p>
            <Link 
              href="/auth/register"
              className="inline-block px-10 py-5 bg-white text-purple-600 font-bold text-xl rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              أنشئ حسابك الآن
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">ContentKit</span>
            </div>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <p className="text-gray-500 text-sm">© 2026 ContentKit. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
