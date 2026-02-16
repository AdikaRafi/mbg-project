"use client";

import { AlertTriangle, ArrowRight, User, Phone } from "lucide-react";

export function ExceptionList() {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden h-full flex flex-col">
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200">
            Penanganan Masalah
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
            3 Masalah Aktif
          </span>
          <a
            href="#"
            className="text-xs font-semibold text-primary hover:underline"
          >
            Riwayat
          </a>
        </div>
      </div>
      <div className="p-6 space-y-4 flex-1 overflow-y-auto">
        {/* Main Alert */}
        <div className="border border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-900/10 rounded-xl p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-0.5 rounded uppercase">
                Delayed
              </span>
              <a
                href="#"
                className="font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors"
              >
                Batch #MBG-2023-892
              </a>
            </div>
            <span className="text-[11px] text-slate-400">Updated 10m ago</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Kendaraan terjebak dalam lalu lintas yang padat di Jl. Jend. Sudirman. Estimasi
            sampai 45 menit.
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-red-100 dark:border-red-900/30">
            <div className="flex items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> Driver: Asep S.
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> +62 812-3456-7890
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="px-4 py-1.5 bg-white border border-red-200 dark:bg-slate-800 dark:border-red-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
              >
                Laporkan Masalah
              </a>
              <button className="px-4 py-1.5 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                Hubungi Driver
              </button>
            </div>
          </div>
        </div>

        {/* Quality Check Alert */}
        <a
          href="#"
          className="block border border-border-light dark:border-border-dark rounded-xl p-4 flex justify-between items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded uppercase">
                Periksa Kualitas
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                Batch #MBG-2023-895
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sensor suhu membaca sedikit di atas ambang batas (6.5°C).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400 group-hover:text-primary transition-colors">
              Selesaikan di Laporan Masuk
            </span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary" />
          </div>
        </a>
      </div>
    </div>
  );  
}
