"use client";

import { Utensils, Truck, Users, AlertCircle, Wallet } from "lucide-react";

export function MenuStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">MENU HARI INI</p>
        </div>
        <p className="text-sm font-bold mt-1 text-slate-900 dark:text-white truncate">Nasi Kuning & Ayam</p>
      </div>
      
      <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <Truck className="w-4 h-4 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">DISTRIBUSI</p>
        </div>
        <p className="text-2xl font-bold mt-1 text-primary">85%</p>
      </div>
      
      <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SISWA</p>
        </div>
        <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">1.2M</p>
      </div>
      
      <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">KOMPLAIN</p>
        </div>
        <p className="text-2xl font-bold mt-1 text-red-500">12</p>
      </div>
      
      <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <Wallet className="w-4 h-4 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BUDGET DIGUNAKAN</p>
        </div>
        <p className="text-2xl font-bold mt-1 text-teal-600">65%</p>
      </div>
    </div>
  );
}
