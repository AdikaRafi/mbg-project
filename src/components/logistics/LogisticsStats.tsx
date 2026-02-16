"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

export function LogisticsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* On-Time Distribution */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-6">
          Distribusi On-Time
        </h3>
        <div className="flex items-end gap-6">
          <div className="text-5xl font-bold text-slate-900 dark:text-white">
            96%
          </div>
          <div className="mb-1 space-y-1">
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Target: 95%
            </p>
            <p className="text-[11px] flex items-center gap-1 text-emerald-500 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +1.2% vs minggu lalu
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              1,240 Pengiriman berhasil
            </p>
          </div>
        </div>
      </div>

      {/* Avg Delivery Time */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-6">
          Waktu Pengiriman Rata-rata
        </h3>
        <div className="flex items-end gap-6">
          <div className="text-5xl font-bold text-slate-900 dark:text-white">
            38m
          </div>
          <div className="mb-1 space-y-1">
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Target: &lt; 45m
            </p>
            <p className="text-[11px] flex items-center gap-1 text-emerald-500 font-medium">
              <TrendingDown className="w-3.5 h-3.5" /> -2m vs minggu lalu
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Rute yang efisien diterapkan
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Delays Trend */}
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Trending Keterlambatan Mingguan
          </h3>
          <span className="text-[9px] font-bold bg-red-50 dark:bg-red-900/30 text-red-500 px-2 py-1 rounded">
            -12% kejadian
          </span>
        </div>
        <div className="h-24 flex items-end justify-between gap-2">
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-[40%] hover:bg-primary/20 transition-colors"></div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-[65%] hover:bg-primary/20 transition-colors"></div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-[80%] hover:bg-primary/20 transition-colors"></div>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-[35%] hover:bg-primary/20 transition-colors"></div>
          <div className="flex-1 bg-primary rounded-t h-[20%]"></div>
        </div>
        <div className="flex justify-between mt-3 text-[10px] text-slate-400 font-medium uppercase gap-2">
          <span className="flex-1 text-center">Senin</span>
          <span className="flex-1 text-center">Selasa</span>
          <span className="flex-1 text-center">Rabu</span>
          <span className="flex-1 text-center">Kamis</span>
          <span className="flex-1 text-center">Jumat</span>
        </div>
      </div>
    </div>
  );
}
