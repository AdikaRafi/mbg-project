"use client";

import { Banknote, Info } from "lucide-react";

export function UnitCost() {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 flex flex-col justify-center relative overflow-hidden h-full">
      <div className="absolute right-0 top-0 p-4 opacity-5 pointer-events-none">
        <Banknote className="w-24 h-24 text-slate-900 dark:text-white" />
      </div>
      
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest relative z-10">RATA-RATA BIAYA PER PORSI</p>
      <p className="text-2xl font-bold mt-2 text-slate-800 dark:text-white relative z-10">Rp 14.850</p>
      
      <div className="mt-5 p-3.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-start gap-3 border border-blue-100 dark:border-blue-800/30 relative z-10">
        <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <p className="text-[10px] text-blue-700 dark:text-blue-300 font-bold leading-normal">
          Biaya per porsi berada di bawah plafon anggaran Rp 15.000 (Sesuai Target).
        </p>
      </div>
    </div>
  );
}
