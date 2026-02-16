"use client";

import { CheckCircle, Info, ExternalLink } from "lucide-react";

export function MenuComposition() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
        <a 
          href="#" 
          className="font-bold flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 hover:text-primary transition-colors group"
        >
          <span className="text-primary text-xl group-hover:scale-110 transition-transform">🍽️</span>
          Komposisi Menu
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <span className="text-[10px] px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded font-bold uppercase tracking-wide border border-green-100 dark:border-green-800 flex items-center gap-1">
          <CheckCircle className="w-3 h-3" /> Terverifikasi
        </span>
      </div>
      <div className="p-6 flex-1">
        <div className="flex gap-4 mb-8">
          <img 
            alt="Meal" 
            className="w-20 h-20 rounded-lg object-cover bg-slate-100 dark:bg-slate-700 shadow-sm" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZr6k6NDjlOvTi5tz19ceNrlrGCg8KotQxK0m91jnSXZeIcMzcFFPTW9MdU2rhXiFeXTN-2AmM6lTS8I4frTX1iCwFQM0OqiW9cUspocCEWLcSXU9TarGMm-WTeQgzPpeoVkiaznuMvVi37HNK5rZVjpsC5-ZNcGdtKEZQ_IvDbNdVyRfWn53ZAs3QjRN5AKAMEXdLf3dgRGlzcgtjMUmA6UHfNLYtX4aU4_uWRT0VFNA8vlyWMrWKltldbuQcdJG1TJ0qseRkQ2w"
          />
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white leading-tight">Menu Paket A (Senin)</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
              Nasi Kuning, Ayam Goreng, Sayur Labu Siam, Tempe Orek
            </p>
            <div className="mt-3 flex gap-1.5 flex-wrap">
              <span className="text-[9px] bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded text-blue-700 dark:text-blue-300 font-medium">Karbohidrat</span>
              <span className="text-[9px] bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded text-orange-700 dark:text-orange-300 font-medium">Protein Hewani</span>
              <span className="text-[9px] bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded text-green-700 dark:text-green-300 font-medium">Serat</span>
            </div>
          </div>
        </div>

        <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          Analisis Nutrisi per Porsi
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-700"></div>
        </h5>
        
        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-bold text-slate-700 dark:text-slate-300">Kalori (540 kcal)</span>
              <span className="text-slate-500">22% RDA</span>
            </div>
            <div className="overflow-hidden h-1.5 mb-6 text-xs flex rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{width: "22%"}}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Protein", val: "24g", rda: "15%" },
              { label: "Zat Besi", val: "4.2mg", rda: "30%" },
              { label: "Karbohidrat", val: "30g", rda: "30%" },
              { label: "Kalsium", val: "10g", rda: "10%" },
              { label: "Lemak", val: "35g", rda: "25%" },
              { label: "Vit A", val: "8g", rda: "8%" }
            ].map((item) => (
              <div key={item.label} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                <p className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">{item.label}</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {item.val} <span className="text-[10px] font-normal text-slate-500 ml-1">({item.rda} RDA)</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6 pb-6 px-6 border-t border-border-light dark:border-border-dark space-y-3">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500 flex items-center gap-1">👨‍🍳 Dibuat Oleh:</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">Unit SPPG Jawa Barat 01</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-500 flex items-center gap-1">🛡️ Verifikator:</span>
          <a className="font-bold text-primary hover:underline hover:text-primary-dark transition-colors" href="#">Admin Nasional (Ahli Gizi)</a>
        </div>
      </div>
    </div>
  );
}
