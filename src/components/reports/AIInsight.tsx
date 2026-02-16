import { Brain, FileText } from 'lucide-react';

export default function AIInsight() {
  return (
    <div className="bg-[#1E293B] rounded-xl p-6 text-white shadow-lg border border-slate-800 relative overflow-hidden mb-8">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start">
          <div className="bg-white/10 p-2 rounded-lg mr-4">
            <Brain className="text-amber-400 w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold mb-1">AI Smart Insight</h4>
            <p className="text-[13px] text-slate-300 leading-relaxed max-w-3xl">
              Terdeteksi pola keluhan <span className="font-bold text-white">Kebersihan</span> berulang di <span className="font-bold text-white">area SPPG B</span> (3 laporan dalam 48 jam). Hal ini menunjukkan kemungkinan adanya masalah pemasok daripada insiden terisolasi.
            </p>
          </div>
        </div>
        <button className="bg-white text-[#1E293B] text-xs font-bold px-4 py-2.5 rounded-lg flex items-center shadow hover:bg-slate-100 transition-colors flex-shrink-0">
          <FileText className="w-[18px] h-[18px] mr-2" />
          Buat Tiket Massal
        </button>
      </div>
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
