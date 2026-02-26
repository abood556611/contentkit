"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Instagram,
  Twitter,
  Play,
  ArrowRight,
  ArrowLeft,
  Plus,
  Check,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const steps = [
  { id: 1, label: "اختر ملف البزنس" },
  { id: 2, label: "صف ما تريد" },
  { id: 3, label: "اختر المنصة" },
  { id: 4, label: "نوع المحتوى" },
];

const platforms = [
  { id: "instagram", label: "انستقرام", icon: Instagram },
  { id: "tiktok", label: "تيكتوك", icon: Play },
  { id: "twitter", label: "تويتر", icon: Twitter },
  { id: "all", label: "الكل", icon: Sparkles },
];

const contentTypes = [
  { id: "promotional", label: "ترويجي" },
  { id: "educational", label: "تثقيفي" },
  { id: "interactive", label: "تفاعلي" },
  { id: "story", label: "قصصي" },
];

const postCounts = [1, 3, 5, 7];

const quickSuggestions = [
  "ترويج منتج جديد",
  "عرض خاص",
  "محتوى تثقيفي",
  "تفاعل مع الجمهور",
];

interface FormData {
  businessProfile: string;
  description: string;
  platform: string;
  contentType: string;
  postCount: number;
}

export default function GeneratePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessProfile: "biz_1",
    description: "",
    platform: "",
    contentType: "",
    postCount: 1,
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.businessProfile;
      case 2:
        return formData.description.length > 0;
      case 3:
        return !!formData.platform;
      case 4:
        return !!formData.contentType;
      default:
        return false;
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${
                    currentStep > step.id
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }
                `}
              >
                {currentStep > step.id ? (
                  <Check className="size-5" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`text-xs mt-2 ${
                  currentStep >= step.id ? "text-purple-600 font-medium" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`
                  flex-1 h-0.5 mx-2 transition-all
                  ${currentStep > step.id ? "bg-purple-600" : "bg-gray-200"}
                `}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">اختر ملف البزنس</h2>
        <p className="text-gray-500">اختر الملف الذي تريد إنشاء محتوى له</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          className={`cursor-pointer transition-all hover:shadow-md ${
            formData.businessProfile === "biz_1"
              ? "border-purple-500 ring-2 ring-purple-100"
              : ""
          }`}
          onClick={() => setFormData({ ...formData, businessProfile: "biz_1" })}
        >
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                ب
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">بزنسي الأول</h3>
                <p className="text-sm text-gray-500">عطور عربية</p>
              </div>
            </div>
            {formData.businessProfile === "biz_1" && (
              <Badge className="mt-4 bg-purple-100 text-purple-700">
                <Check className="size-3 ml-1" />
                محدد
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all hover:shadow-md border-dashed bg-gray-50">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Plus className="size-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-700">أنشئ ملف جديد</h3>
              <p className="text-sm text-gray-400 text-center mt-1">
                أضف بزنس جديد
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">صف ما تريد</h2>
        <p className="text-gray-500">اشرح بالتفصيل نوع المحتوى الذي تريد إنشاءه</p>
      </div>

      <Textarea
        placeholder="مثال: أبيع عطور عربية فاخرة، أريد بوستات ترويجية لعطر جديد..."
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value.slice(0, 500) })
        }
        className="min-h-[180px] text-base resize-none"
      />

      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2 flex-wrap">
          {quickSuggestions.map((suggestion) => (
            <Badge
              key={suggestion}
              variant="outline"
              className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-colors"
              onClick={() =>
                setFormData({ ...formData, description: suggestion })
              }
            >
              {suggestion}
            </Badge>
          ))}
        </div>
        <span
          className={`${
            formData.description.length >= 450
              ? "text-red-500"
              : "text-gray-400"
          }`}
        >
          {formData.description.length}/500
        </span>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">اختر المنصة</h2>
        <p className="text-gray-500">المنصة التي تريد نشر المحتوى عليها</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          const isSelected = formData.platform === platform.id;
          return (
            <Card
              key={platform.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                isSelected
                  ? "border-purple-500 ring-2 ring-purple-100"
                  : ""
              }`}
              onClick={() => setFormData({ ...formData, platform: platform.id })}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Icon className="size-7" />
                  </div>
                  <span
                    className={`font-medium ${
                      isSelected ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    {platform.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">نوع المحتوى</h2>
        <p className="text-gray-500">حدد نوع المحتوى وعدد البوستات</p>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">نوع المحتوى</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contentTypes.map((type) => (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                formData.contentType === type.id
                  ? "border-purple-500 ring-2 ring-purple-100"
                  : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, contentType: type.id })
              }
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-center gap-2">
                  {formData.contentType === type.id && (
                    <Check className="size-4 text-purple-600" />
                  )}
                  <span
                    className={
                      formData.contentType === type.id
                        ? "text-purple-600 font-medium"
                        : "text-gray-700"
                    }
                  >
                    {type.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">عدد البوستات</h3>
        <div className="flex gap-3">
          {postCounts.map((count) => (
            <Card
              key={count}
              className={`cursor-pointer transition-all hover:shadow-md flex-1 ${
                formData.postCount === count
                  ? "border-purple-500 ring-2 ring-purple-100"
                  : ""
              }`}
              onClick={() => setFormData({ ...formData, postCount: count })}
            >
              <CardContent className="pt-4 pb-4">
                <div className="text-center">
                  <span
                    className={`text-2xl font-bold ${
                      formData.postCount === count
                        ? "text-purple-600"
                        : "text-gray-700"
                    }`}
                  >
                    {count}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">تكلفة التوليد</span>
            <Badge className="bg-purple-600 text-white text-sm px-3 py-1">
              <Sparkles className="size-4 ml-1" />
              سيُستهلك {formData.postCount} كريدت
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto" dir="rtl">
      <div className="mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 -mr-2">
            <ArrowRight className="size-4 ml-1" />
            العودة للوحة التحكم
          </Button>
        </Link>
      </div>

      <Card className="bg-white">
        <CardContent className="p-6 md:p-8">
          {renderStepIndicator()}

          {renderCurrentStep()}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="size-4" />
              السابق
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="gap-2 bg-purple-600 hover:bg-purple-700"
              >
                التالي
                <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button
                className="gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                disabled={!isStepValid()}
              >
                <Sparkles className="size-4" />
                ولّد الآن
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
