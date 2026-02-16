"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Truck,
  Wallet,
  GraduationCap,
  BarChart3,
  Inbox,
  LogOut,
  Utensils,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Menu MBG", href: "/menu-mbg", icon: Calendar },
  { name: "Lacak MBG", href: "/logistics", icon: Truck },
  { name: "Transparansi Anggaran", href: "/budget", icon: Wallet },
  { name: "Data Siswa", href: "/students", icon: GraduationCap },
];

const reportItems = [
  { name: "Analisis", href: "/analysis", icon: BarChart3 },
  { name: "Laporan Masuk", href: "/reports", icon: Inbox, badge: 12 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex-shrink-0 transition-colors duration-200">
      <div className="p-6 flex items-center mb-4">
        <div className="flex items-center gap-2 text-primary font-bold text-lg tracking-tight">
          <Utensils className="w-6 h-6" />
          <span>MBG MONITORING</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-medium group transition-colors",
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary",
              )}
            >
              <item.icon
                className={clsx(
                  "w-5 h-5",
                  isActive
                    ? "text-primary"
                    : "text-slate-400 group-hover:text-primary",
                )}
              />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}

        <div className="pt-6 pb-2 px-4">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            REPORTS
          </p>
        </div>

        {reportItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-medium group transition-colors",
                isActive
                  ? "bg-primary-light text-primary"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary",
              )}
            >
              <item.icon
                className={clsx(
                  "w-5 h-5",
                  isActive
                    ? "text-primary"
                    : "text-slate-400 group-hover:text-primary",
                )}
              />
              <span className="text-sm">{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 py-0.5 px-2 rounded text-[10px] font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-light dark:border-border-dark">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
