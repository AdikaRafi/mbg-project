"use client";

import { Info } from "lucide-react";

export function DietaryChart() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">
          Ringkasan Pola Makan
        </h3>
        <button className="text-slate-400 hover:text-primary transition-colors">
          <Info className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="w-48 h-48 rounded-full border-[12px] border-slate-100 dark:border-slate-800 relative flex items-center justify-center">
            {/* Simple CSS Conic Gradient approximation for visual fidelity */}
            <div 
                className="absolute inset-0 rounded-full"
                style={{
                    background: "conic-gradient(#1a73e8 0% 85%, #10b981 85% 97%, #f59e0b 97% 100%)",
                    maskImage: "radial-gradient(circle, transparent 60%, black 61%)",
                    WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61%)"
                }}
            ></div>
          <div className="text-center z-10">
            <p className="text-xs text-slate-400 font-medium">Total Terpantau</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              100%
            </p>
          </div>
        </div>

        <div className="w-full mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Halal
            </p>
            <p className="text-lg font-bold text-primary">85%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Vegetarian
            </p>
            <p className="text-lg font-bold text-emerald-500">12%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Lainnya
            </p>
            <p className="text-lg font-bold text-amber-500">3%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
