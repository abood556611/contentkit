"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Copy,
  Trash2,
  Instagram,
  Twitter,
  Play,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface PlatformItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  color?: string;
}

const platforms: PlatformItem[] = [
  { id: "all", label: "الكل" },
  { id: "instagram", label: "انستقرام", icon: Instagram, color: "bg-pink-500" },
  { id: "tiktok", label: "تيكتوك", icon: Play, color: "bg-black" },
  { id: "twitter", label: "تويتر", icon: Twitter, color: "bg-blue-400" },
];

const samplePosts = [
  {
    id: 1,
    platform: "instagram",
    content: "🎉 تخفيضات نهاية الموسم! احصل على 30% خصم على جميع عطورنا العربية الفاخرة. فترة محدودة فقط! #عطور #تخفيضات #عطور_عربية",
    hashtags: ["عطور", "تخفيضات", "عطور_عربية", "عروض"],
    date: "2026-02-20",
  },
  {
    id: 2,
    platform: "twitter",
    content: "عطرنا الجديد برائحة الياسمين والزعفران 🇸🇦体感ArabicLuxury",
    hashtags: ["عطر_جديد", "عطور"],
    date: "2026-02-18",
  },
  {
    id: 3,
    platform: "tiktok",
    content: "شوفوا كيف العطر يدوم يوم كامل! 🔥 #عطور #arabic_perfume #perfume_tiktok",
    hashtags: ["عطور", "arabic_perfume"],
    date: "2026-02-15",
  },
];

export default function LibraryPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = samplePosts.filter((post) => {
    const matchesPlatform =
      selectedPlatform === "all" || post.platform === selectedPlatform;
    const matchesSearch =
      searchQuery === "" ||
      post.content.includes(searchQuery) ||
      post.hashtags.some((tag) => tag.includes(searchQuery));
    return matchesPlatform && matchesSearch;
  });

  const getPlatformBadge = (platform: string) => {
    const platformData = platforms.find((p) => p.id === platform);
    if (!platformData || platformData.id === "all" || !platformData.icon) return null;
    const IconComponent = platformData.icon;
    return (
      <Badge
        className={`${platformData.color} text-white text-[10px] px-2 py-0.5`}
      >
        <IconComponent className="size-3 ml-1" />
        {platformData.label}
      </Badge>
    );
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleDelete = (id: number) => {
    console.log("Delete post", id);
  };

  return (
    <div dir="rtl" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">مكتبة المحتوى</h1>
          <p className="text-gray-500 mt-1">إدارة وتعديل جميع المحتويات المنشأة</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {platforms.map((platform) => (
            <Badge
              key={platform.id}
              variant={selectedPlatform === platform.id ? "default" : "outline"}
              className={`cursor-pointer transition-all px-3 py-1.5 ${
                selectedPlatform === platform.id
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
              }`}
              onClick={() => setSelectedPlatform(platform.id)}
            >
              {platform.icon && (() => { const Icon = platform.icon; return <Icon className="size-3 ml-1" />; })()}
              {platform.label}
            </Badge>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            placeholder="ابحث في المحتوى..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Search className="size-8 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              لم تولّد محتوى بعد
            </h3>
            <p className="text-gray-500 text-center mb-6 max-w-sm">
              ابدأ بإنشاء محتوى جديد واحفظه في مكتبتك للوصول إليه لاحقاً
            </p>
            <Link href="/dashboard/generate">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="size-4 ml-2" />
                أنشئ محتوى جديد
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  {getPlatformBadge(post.platform)}
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                  {post.content}
                </p>

                <div className="flex gap-1 flex-wrap mb-4">
                  {post.hashtags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 bg-gray-100 text-gray-600"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-3 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs h-8"
                    onClick={() => handleCopy(post.content)}
                  >
                    <Copy className="size-3 ml-1" />
                    نسخ
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs h-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => handleDelete(post.id)}
                  >
                    <Trash2 className="size-3 ml-1" />
                    حذف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
