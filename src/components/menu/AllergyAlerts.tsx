"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";

export function AllergyAlerts() {
  return (
    <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-6 relative overflow-hidden mt-6">
      <div className="absolute right-0 top-0 p-6 opacity-5 pointer-events-none">
        <AlertTriangle className="w-64 h-64 text-red-900" />
      </div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <span className="p-2 bg-red-100 dark:bg-red-900/40 rounded-full">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 font-bold" />
        </span>
        <h3 className="font-bold text-red-700 dark:text-red-400 uppercase text-xs tracking-wider">ALERGI & KEBUTUHAN KHUSUS (HARI INI)</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-red-100 dark:border-red-900/30 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">ALERGI KACANG</p>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100 dark:bg-red-900/40 dark:border-red-800 dark:text-red-300">MANDATORY</span>
          </div>
          <p className="text-2xl font-bold text-red-600 mt-auto">142</p>
        </div>
        
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-red-100 dark:border-red-900/30 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">LACTOSE INTOLERANT</p>
            <span className="text-[8px] font-bold px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100 dark:bg-red-900/40 dark:border-red-800 dark:text-red-300">MANDATORY</span>
          </div>
          <p className="text-2xl font-bold text-red-600 mt-auto">89</p>
        </div>
        
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col shadow-sm">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mb-3">GLUTEN FREE</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-auto">24</p>
        </div>
        
        <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col shadow-sm">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mb-3">VEGETARIAN</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white mt-auto">12</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end relative z-10">
        <button className="text-xs font-bold text-red-700 dark:text-red-400 border-b-2 border-red-700/30 hover:border-red-700 dark:hover:border-red-400 transition-all pb-1 flex items-center gap-1 group">
            Buat Label Spesifik 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
