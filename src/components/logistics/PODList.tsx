"use client";

import { CheckCircle, MapPin } from "lucide-react";

export function PODList() {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full">
      <div className="p-6 border-b border-border-light dark:border-border-dark">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">
          Bukti Pengiriman
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Pengiriman yang terverifikasi
        </p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        {/* POD Item 1 */}
        <div className="relative pl-8 pb-6 border-b border-slate-50 dark:border-slate-800">
          <span className="absolute left-0 top-1 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 rounded-full p-0.5">
            <CheckCircle className="w-4 h-4" />
          </span>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                SDN 01 Menteng
              </h4>
              <p className="text-[10px] text-slate-400">Batch #MBG-2023-888</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                11:45
              </p>
              <p className="text-[10px] text-slate-400">Hari ini</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 space-y-2">
            <div className="flex items-start gap-3">
              <img
                alt="Map Location"
                className="w-16 h-16 rounded-md object-cover border border-slate-200 dark:border-slate-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTMt-OZL8naq8wyYh0zrD-XI37hD6DUXfhBVBfgodUdWIsk55egk0HsYrooWqvEa2mvlpYWoyAZVDE1I8-2PrrruKEKeWZKI6AUI0VoXsaccdsoquQY-N6LMYWfSIWFFtwE3cuu3mOpnYXJjn3u8YRA4BEbY_ufT3IyitR0yYi8XE_I_m2vczhTnS2YYzvKSQiOV6jUSbBhSfP2PaXRBvv7pvyScQJBAinM4Z3vc3k08aSjNy0gnxGvwC9kfEErunRRkLBgfGrdNg"
              />
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">Penerima:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Bu Siti (Kepala Sekolah)
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">Jumlah:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    450 Box
                  </span>
                </div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">Kondisi:</span>
                  <span className="font-bold text-emerald-500">Baik</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-slate-400 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
              <MapPin className="w-3 h-3" />
              Lat: -6.2088, Long: 106.8456
            </div>
          </div>
        </div>

        {/* POD Item 2 */}
        <div className="relative pl-8 pb-6 border-b border-slate-50 dark:border-slate-800">
            <span className="absolute left-0 top-1 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 rounded-full p-0.5">
            <CheckCircle className="w-4 h-4" />
          </span>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                SMPN 12 Jakarta
              </h4>
              <p className="text-[10px] text-slate-400">Batch #MBG-2023-885</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                11:15
              </p>
              <p className="text-[10px] text-slate-400">Hari ini</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-slate-500 italic">
              Diterima oleh Pak Joko (Keamanan)
            </p>
            <button className="text-primary text-[11px] font-bold hover:underline">
              Lihat Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
