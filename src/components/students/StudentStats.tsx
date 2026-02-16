"use client";

import { Users, AlertCircle, Utensils, ClipboardCheck } from "lucide-react";

export function StudentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
            Total Siswa
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            1,245
          </h3>
          <p className="text-[10px] text-emerald-500 font-bold mt-1">
            +32 Siswa Baru
          </p>
        </div>
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <Users className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
            Alergi
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            42
          </h3>
          <p className="text-[10px] text-red-500 font-bold mt-1">
            3 Kasus Baru Teridentifikasi
          </p>
        </div>
        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-500" />
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
            Diet Khusus
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            156
          </h3>
          <p className="text-[10px] text-slate-400 mt-1">
            12.5% dari total
          </p>
        </div>
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
          <Utensils className="w-5 h-5 text-emerald-500" />
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
            Kehadiran Harian
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            98.2%
          </h3>
          <p className="text-[10px] text-emerald-500 font-bold mt-1">
            Di atas target (95%)
          </p>
        </div>
        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <ClipboardCheck className="w-5 h-5 text-purple-600" />
        </div>
      </div>
    </div>
  );
}
