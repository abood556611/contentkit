"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  Library,
  Building2,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { href: "/dashboard", label: "الرئيسية", icon: LayoutDashboard },
  { href: "/dashboard/generate", label: "توليد محتوى", icon: Sparkles },
  { href: "/dashboard/library", label: "المكتبة", icon: Library },
  { href: "/dashboard/profiles", label: "ملفات البزنس", icon: Building2 },
  { href: "/dashboard/billing", label: "الاشتراك", icon: CreditCard },
  { href: "/dashboard/settings", label: "الإعدادات", icon: Settings },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-l border-gray-200 z-50
          transition-all duration-300 ease-in-out
          ${isCollapsed ? "w-20" : "w-[280px]"}
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Logo size="sm" href="/dashboard" />
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={toggleCollapse}
                className="hidden lg:flex"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <Menu className="size-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${isCollapsed ? "justify-center" : ""}
                    ${
                      isActive
                        ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className="size-5 shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className={`p-3 border-t border-gray-100 ${isCollapsed ? "flex justify-center" : ""}`}>
            <div
              className={`
                flex items-center gap-3 p-2 rounded-lg bg-gray-50
                ${isCollapsed ? "justify-center w-full" : ""}
              `}
            >
              <Avatar className="size-9">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-purple-100 text-purple-700 text-sm">
                  ع
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      المستخدم
                    </p>
                    <Badge
                      variant="secondary"
                      className="mt-0.5 bg-purple-100 text-purple-700 hover:bg-purple-100"
                    >
                      10 رصيد
                    </Badge>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`
          transition-all duration-300
          ${isCollapsed ? "lg:mr-20" : "lg:mr-[280px]"}
        `}
      >
        <div className="p-4 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
