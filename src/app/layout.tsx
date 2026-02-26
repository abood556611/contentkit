import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "./globals.css";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ContentKit - كونتنت كيت | محتوى سوشال ميديا بالذكاء الاصطناعي",
  description:
    "منصتك الشاملة لإنشاء محتوى سوشال ميديا بالذكاء الاصطناعي. أنشئ منشورات احترافية، تصاميم جذابة، وإدارة ملفات بزنسك بسهولة. جرب الآن وحسّن تواجدك الرقمي.",
  keywords: [
    "إنشاء محتوى",
    "ذكاء اصطناعي",
    "سوشال ميديا",
    "تسويق رقمي",
    "منشورات",
    "تصاميم",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufiArabic.variable} antialiased font-arabic`}
      >
        {children}
        <Sonner position="top-left" dir="rtl" />
      </body>
    </html>
  );
}
