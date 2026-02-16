"use client";

import { CheckCircle } from "lucide-react";

export function RegionalMap() {
  return (
    <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          Overview Distribusi Regional
        </h2>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button className="text-[11px] font-bold text-slate-600 px-3 py-1.5 rounded-md bg-white shadow-sm">
            Jawa
          </button>
          <button className="text-[11px] font-bold text-slate-500 px-3 py-1.5 hover:text-slate-800 transition-colors">
            Sumatera
          </button>
          <button className="text-[11px] font-bold text-slate-500 px-3 py-1.5 hover:text-slate-800 transition-colors">
            Lainnya
          </button>
        </div>
      </div>

      <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden aspect-[2/1] border border-slate-100">
        <img
          alt="Map of Indonesia"
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZr6k6NDjlOvTi5tz19ceNrlrGCg8KotQxK0m91jnSXZeIcMzcFFPTW9MdU2rhXiFeXTN-2AmM6lTS8I4frTX1iCwFQM0OqiW9cUspocCEWLcSXU9TarGMm-WTeQgzPpeoVkiaznuMvVi37HNK5rZVjpsC5-ZNcGdtKEZQ_IvDbNdVyRfWn53ZAs3QjRN5AKAMEXdLf3dgRGlzcgtjMUmA6UHfNLYtX4aU4_uWRT0VFNA8vlyWMrWKltldbuQcdJG1TJ0qseRkQ2w"
        />
        <div className="absolute bottom-6 left-6 right-6 flex gap-4">
          <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex-1 flex flex-col justify-between min-h-[80px]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              JAKARTA
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                98% Terdistribusi
              </span>
              <span className="inline-flex relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </span>
            </div>
          </div>
          <div className="bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 flex-1 flex flex-col justify-between min-h-[80px]">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              JAWA TIMUR
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                92% Terdistribusi
              </span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
