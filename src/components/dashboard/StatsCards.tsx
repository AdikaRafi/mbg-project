"use client";

import { 
  Utensils, 
  Flame, 
  Truck, 
  GraduationCap, 
  TrendingUp, 
  AlertCircle, 
  Wallet 
} from "lucide-react";
import Link from "next/link";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      {/* Menu Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark flex flex-col justify-between min-h-[140px] hover:border-primary/50 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <Utensils className="w-5 h-5 text-yellow-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 uppercase">
            Menu hari ini
          </span>
        </div>
        <Link href="/menu-mbg" key={"menu-mbg"}> 
        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
            MENU HARI INI
          </h3>
          <p className="text-lg font-bold text-slate-900 mt-0.5 truncate">
            Nasi Kuning & Ayam...
          </p>
          <div className="flex items-center text-[11px] text-slate-500 mt-2">
            <Flame className="w-3.5 h-3.5 mr-1 text-orange-500" />
            540 kcal / porsi
          </div>
        </div>
        </Link>
      </div>

      {/* Distribution Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark flex flex-col justify-between min-h-[140px] hover:border-primary/50 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Truck className="w-5 h-5 text-primary" />
          </div>
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 uppercase">
            Dalam Proses
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
            DISTRIBUSI
          </h3>
          <div className="flex items-baseline justify-between mt-0.5">
            <p className="text-2xl font-bold text-slate-900">85%</p>
            <span className="text-[10px] text-slate-400 font-medium">10:45 AM</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>

      {/* Student Data Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark flex flex-col justify-between min-h-[140px] hover:border-primary/50 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
          </div>
          <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 flex items-center">
            <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> 2%
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
            SISWA
          </h3>
          <p className="text-2xl font-bold text-slate-900 mt-0.5">1.2M</p>
          <p className="text-[11px] text-slate-400 mt-1">Total siswa aktif</p>
        </div>
      </div>

      {/* Complaints Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark border-r-[4px] border-r-red-500 flex flex-col justify-between min-h-[140px] hover:border-red-300 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-red-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 uppercase">
            Aksi Diperlukan
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-red-500 transition-colors">
            KOMPLAIN
          </h3>
          <p className="text-2xl font-bold text-slate-900 mt-0.5">12</p>
          <p className="text-[11px] text-slate-400 mt-1">Perlu diperhatikan</p>
        </div>
      </div>

      {/* Budget Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark flex flex-col justify-between min-h-[140px] hover:border-primary/50 transition-colors group cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-teal-50 rounded-lg">
            <Wallet className="w-5 h-5 text-teal-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 uppercase">
            Februari '26
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-primary transition-colors">
            BUDGET TERPAKAI
          </h3>
          <div className="flex items-baseline justify-between mt-0.5">
            <p className="text-2xl font-bold text-slate-900">65%</p>
            <span className="text-[10px] text-slate-400 font-medium">4.5B / 6.9B IDR</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
            <div className="bg-teal-500 h-full rounded-full" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
