"use client";

import { PieChart } from "lucide-react";

export function MenuVariation() {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 relative overflow-hidden flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <PieChart className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-sm text-slate-800 dark:text-white">Variasi Menu</h3>
      </div>
      
      <div className="flex items-center justify-between gap-4 py-2 relative z-10 flex-1">
        <div className="relative h-28 w-28 flex-shrink-0">
          <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
            <path className="stroke-slate-100 dark:stroke-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
            <path className="stroke-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" strokeDasharray="75, 100" strokeLinecap="round" strokeWidth="4"></path>
            <path className="stroke-teal-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" strokeDasharray="25, 100" strokeDashoffset="-75" strokeLinecap="round" strokeWidth="4"></path>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase">TOTAL</span>
            <p className="text-xl font-bold text-slate-800 dark:text-white">12</p>
          </div>
        </div>
        
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0"></span>
            <span className="text-slate-600 dark:text-slate-300 font-bold">Protein Hewani <span className="text-slate-400 font-normal ml-1">(75%)</span></span>
          </div>
          <div className="flex items-center gap-2 text-[10px]">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 flex-shrink-0"></span>
            <span className="text-slate-600 dark:text-slate-300 font-bold">Nabati <span className="text-slate-400 font-normal ml-1">(25%)</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
