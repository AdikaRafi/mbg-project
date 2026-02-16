import { Clock, ThumbsUp, ArrowRight } from 'lucide-react';

export default function SLAMonitoring() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-slate-900">Pemantauan SLA</h3>
        <a href="#" className="text-[10px] font-bold text-blue-600 hover:underline flex items-center">
          Lihat Analisis
          <ArrowRight className="w-3 h-3 ml-0.5" />
        </a>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-slate-500 font-medium">Rata-rata Waktu Penyelesaian</span>
          <span className="text-2xl font-bold text-slate-900">22 Jam</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
        </div>
        <div className="flex justify-between text-[10px] mt-1.5 font-bold">
          <span className="text-slate-400">0 Jam</span>
          <span className="text-slate-600">Target: 24 Jam</span>
          <span className="text-slate-400">48 Jam</span>
        </div>
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Statistik Cepat</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-center text-slate-700">
            <Clock className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-xs font-medium">SLA Terlambat</span>
          </div>
          <span className="text-sm font-bold">3</span>
        </div>
        <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100">
          <div className="flex items-center text-slate-700">
            <ThumbsUp className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-xs font-medium">Skor Kepuasan</span>
          </div>
          <span className="text-sm font-bold">4.2/5</span>
        </div>
      </div>
    </div>
  );
}
