"use client";

import { CheckCircle, Edit, AlertTriangle, Banknote } from "lucide-react";

export function LiveUpdates() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          Live Update
        </h2>
        <a
          href="#"
          className="text-[13px] text-primary hover:text-primary-dark font-bold transition-colors"
        >
          Lihat Semua
        </a>
      </div>

      <div className="space-y-6 overflow-y-auto flex-1 custom-scrollbar">
        {/* Update 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center border border-green-100">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 dark:text-white leading-tight">
              Pengantaran Selesai
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              SMA Negeri 1 Jakarta menerima 450 MBG.
            </p>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              2 menit yang lalu
            </p>
          </div>
        </div>

        {/* Update 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100">
              <Edit className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 dark:text-white leading-tight">
              Menu Update
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Menu untuk besok diubah menjadi &quot;Gado-gado&quot; untuk Jakarta.
            </p>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              15 menit yang lalu
            </p>
          </div>
        </div>

        {/* Update 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center border border-red-100">
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 dark:text-white leading-tight">
              Complaint Baru
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              SD Inpres 03 melaporkan pengiriman terlambat.
            </p>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              45 menit yang lalu
            </p>
          </div>
        </div>

        {/* Update 4 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100">
              <Banknote className="w-4 h-4 text-slate-500" />
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800 dark:text-white leading-tight">
              Pengeluaran Anggaran
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Weekly funds disampaikan ke vendor.
            </p>
            <p className="text-[10px] text-slate-400 mt-2 font-medium">
              2 jam yang lalu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
