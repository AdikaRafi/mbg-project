"use client";

import { 
  FilePlus, 
  CheckSquare, 
  History, 
  Settings 
} from "lucide-react";

export function BudgetStats() {
  return (
    <div className="space-y-6">
      {/* Budget Utilization */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        <h3 className="font-bold mb-6 text-slate-800 dark:text-slate-200">Realisasi Anggaran</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Bahan Baku</span>
              <span className="font-bold text-slate-900 dark:text-white">82%</span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 w-[82%] rounded-full"
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right">
              4.2B / 5.1B Rupiah
            </p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Logistik</span>
              <span className="font-bold text-slate-900 dark:text-white">65%</span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary w-[65%] rounded-full"
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right">
              1.3B / 2.0B Rupiah
            </p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Operasional</span>
              <span className="font-bold text-slate-900 dark:text-white">45%</span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 w-[45%] rounded-full"
              ></div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right">
              0.9B / 2.0B Rupiah
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        <h3 className="font-bold mb-4 text-slate-800 dark:text-slate-200">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center justify-center p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <FilePlus className="text-primary mb-2 w-6 h-6" />
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary">
              Permintaan Baru
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <CheckSquare className="text-primary mb-2 w-6 h-6" />
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary">
              Verifikasi SPPG
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <History className="text-primary mb-2 w-6 h-6" />
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary">
              Riwayat Audit
            </span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
            <Settings className="text-primary mb-2 w-6 h-6" />
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary">
              Pengaturan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
