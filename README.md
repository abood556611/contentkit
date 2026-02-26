# ContentKit — كونتنت كيت 🚀

> محتوى سوشال ميديا احترافي بالذكاء الاصطناعي

## ما هو ContentKit؟

ContentKit هو منصة SaaS عربية تولّد محتوى سوشال ميديا بالذكاء الاصطناعي. صف بزنسك بجملة واحدة واحصل على أسبوع محتوى جاهز للنشر.

## المنصات المدعومة
- 📸 انستقرام
- 🎵 تيكتوك
- 🐦 تويتر (X)

## التقنيات
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth
- **AI:** OpenAI GPT-4o-mini
- **Payments:** Stripe
- **Hosting:** Vercel

## التثبيت

```bash
# Clone
git clone https://github.com/abood556611/contentkit.git
cd contentkit

# Install
npm install

# Environment
cp .env.example .env.local
# Fill in your keys

# Database
npx prisma generate
npx prisma db push

# Run
npm run dev
```

## متغيرات البيئة

| المتغير | الوصف |
|---------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | رابط مشروع Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | مفتاح Supabase العام |
| `DATABASE_URL` | رابط PostgreSQL |
| `OPENAI_API_KEY` | مفتاح OpenAI |
| `STRIPE_SECRET_KEY` | مفتاح Stripe السري |
| `NEXT_PUBLIC_APP_URL` | رابط التطبيق |

## الخطط

| الخطة | السعر | التوليدات |
|-------|-------|----------|
| مجاني | $0 | 10/شهر |
| ستارتر | $19/شهر | 100/شهر |
| برو | $49/شهر | 400/شهر |
| وكالة | $99/شهر | 1500/شهر |

## الرخصة
MIT

---
Built with 🦞 by Clawdo for Abdullah
