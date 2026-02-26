"use client";

import Link from "next/link";
import { Sparkles, TrendingUp, FileText, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مرحباً! جاهز تبدأ؟ 👋</h1>
          <p className="text-gray-500 mt-1">أنشئ محتوى احترافي لعلامتك التجارية بالذكاء الاصطناعي</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-100">
                  <Sparkles className="size-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">كريدت متبقي</span>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                10credit
              </Badge>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-3">10</div>
            <Progress value={100} className="h-2 [&>[data-slot=progress-indicator]]:bg-purple-600" />
            <p className="text-xs text-gray-400 mt-2">.max 10</p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-100">
                  <FileText className="size-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">بوستات مولّدة</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <p className="text-xs text-gray-400 mt-2">.مجموع البوستات</p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-green-100">
                  <TrendingUp className="size-5 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">توليدات هذا الشهر</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">0</div>
            <p className="text-xs text-gray-400 mt-2">.شهر {new Date().toLocaleDateString("ar-SA", { month: "long" })}</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/dashboard/generate">
        <Card className="bg-gradient-to-l from-purple-600 to-blue-500 border-0 cursor-pointer hover:opacity-95 transition-opacity">
          <CardContent className="py-8 px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">ولّد محتوى جديد الآن ✨</h2>
                <p className="text-purple-100 text-sm">أنشئ بوستات احترافية بالذكاء الاصطناعي</p>
              </div>
              <ArrowLeft className="size-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </Link>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">أحدث التوليدات</h2>
        <Card className="bg-gray-50 border-dashed">
          <CardContent className="py-16 px-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Sparkles className="size-10 text-gray-300" />
              </div>
              <h3 className="text-gray-900 font-medium mb-2">لم تولّد محتوى بعد</h3>
              <p className="text-gray-500 text-sm mb-6">ابدأ رحلتك الآن وأنشئ أول بوست لك</p>
              <Link href="/dashboard/generate">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  ابدأ الآن
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
