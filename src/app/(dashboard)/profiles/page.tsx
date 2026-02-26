'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Plus, Star, Pencil, Trash2 } from 'lucide-react'

const sampleProfiles = [
  {
    id: '1',
    name: 'بزنسي الأول',
    industry: 'تقنية',
    tone: 'ودي',
    dialect: 'خليجية',
    isDefault: true,
  },
]

export default function ProfilesPage() {
  const [profiles] = useState(sampleProfiles)

  return (
    <div className="p-6 max-w-6xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ملفات البزنس</h1>
          <p className="text-gray-500 mt-1">أنشئ ملفات بزنسك لتوليد محتوى مخصص</p>
        </div>
        <Link href="/dashboard/profiles/new">
          <Button className="bg-gradient-purple-blue text-white border-0 gap-2">
            <Plus className="w-4 h-4" />
            ملف جديد
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <Card key={profile.id} className="hover:shadow-soft transition-shadow border border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                {profile.isDefault && (
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{profile.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">{profile.industry}</Badge>
                <Badge variant="outline">{profile.tone}</Badge>
                <Badge variant="outline">{profile.dialect}</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1 flex-1">
                  <Pencil className="w-3 h-3" />
                  تعديل
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Card */}
        <Link href="/dashboard/profiles/new">
          <Card className="border-2 border-dashed border-gray-200 hover:border-purple-300 transition-colors cursor-pointer h-full min-h-[220px]">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-gray-400 hover:text-purple-500 transition-colors">
              <Plus className="w-10 h-10 mb-3" />
              <p className="font-medium">أنشئ ملف جديد</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
