// components/layout/Sidebar.tsx
"use client";

import { useState } from "react";
import { Home, Users, UserCheck, Building2, BookOpen, Bus, Library, Calendar, DollarSign, FileText, Settings, MessageSquare, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { title: "Dashboard", icon: Home, href: "/dashboard" },
  { title: "Students", icon: Users, href: "/dashboard/students" },
  { title: "Teachers", icon: UserCheck, href: "/dashboard/teachers" },
  { title: "Classes", icon: Building2, href: "/dashboard/classes" },
  { title: "Subjects", icon: BookOpen, href: "/dashboard/subjects" },
  { title: "Attendance", icon: Calendar, href: "/dashboard/attendance/students" },
  { title: "Fees", icon: DollarSign, href: "/dashboard/fees" },
  { title: "Exams", icon: FileText, href: "/dashboard/exams" },
  { title: "Timetable", icon: Clock, href: "/dashboard/timetable/class" },
  { title: "Library", icon: Library, href: "/dashboard/library/books" },
  { title: "Transport", icon: Bus, href: "/dashboard/transport/routes" },
  { title: "Communication", icon: MessageSquare, href: "/dashboard/communication/notices" },
  { title: "Reports", icon: BarChart3, href: "/dashboard/reports" },
  { title: "Settings", icon: Settings, href: "/dashboard/settings/general" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className={cn("border-r bg-white dark:bg-gray-800 transition-all", collapsed ? "w-20" : "w-64")}>
      <div className="flex flex-col h-full">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white rounded-lg w-10 h-10 flex items-center justify-center text-xl font-bold">
              S
            </div>
            {!collapsed && <span className="text-xl font-bold">School ERP</span>}
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                )}
              >
                <Icon className="w-5 h-5" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}