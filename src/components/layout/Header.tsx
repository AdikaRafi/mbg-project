"use client";

import { Search, Bell, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark h-16 flex items-center justify-between px-6 transition-colors duration-200">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-slate-500">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative w-full max-w-lg hidden sm:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" />
          </span>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-background-light dark:bg-slate-800 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="Cari sekolah, wilayah, atau menu..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-1 text-slate-500 hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-border-light dark:border-slate-700 pl-6 h-8">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Budi Santoso
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Administrator Sekolah            </p>
          </div>
          <img
            alt="Profile"
            className="h-9 w-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBtHj1QH4hkugCcRDVkDdDN3NU0oE6rHSPZeIFn-G3dWg3nQ7n2bWBUmPVY6I8qT-6-AB_BDBA-XO9xfszczSsVQxbWhgGCmJq6rw1yfTA2i9-mZ21eWQCq6dhUZwP3mlEHgNRt6fqCY5pNLR7730cYsbvWbEISjHQ2taz2PPh9Vrgb9JUEBuRlIIreNqeCnoYipnLjGqgsM4ItUOb_wZowz1qi_wDlsAn33Tqw2VPMEkMgY74D90z811hV5_Q4Wphy_v4lh1z9C4"
          />
        </div>
      </div>
    </header>
  );
}
