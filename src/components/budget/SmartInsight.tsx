"use client";

import { 
  Lightbulb, 
  ArrowRight, 
  AlertTriangle, 
  MapPin, 
  Zap, 
  LineChart 
} from "lucide-react";

export function SmartInsight() {
  return (
    <div className="block lg:col-span-1 bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl group cursor-pointer h-full">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <LineChart className="w-16 h-16" />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold">Smart Financial Insight</h3>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
      </div>
      <p className="text-xs text-slate-400 mb-6 group-hover:text-slate-200">
        Analisis cerdas berdasarkan pola pengeluaran. Klik untuk melihat tren performa yang mendalam.
      </p>
      <div className="space-y-4 flex-1">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 group-hover:bg-white/10 transition-colors">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Biaya Mencurigakan Terdeteksi</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Pengeluaran logistik di Wilayah 4 naik 15% lebih tinggi dari rata-rata bulanan.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 group-hover:bg-white/10 transition-colors">
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Wilayah dengan Biaya Tinggi</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Jawa Timur menyumbang 42% dari total pengeluaran mingguan karena pengadaan massal.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 group-hover:bg-white/10 transition-colors">
          <div className="flex gap-3">
            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold">Peluang Efisiensi</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Menggabungkan pembayaran vendor dapat menghemat sekitar 12,5 juta IDR dalam biaya transaksi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
