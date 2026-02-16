import { Sparkles } from 'lucide-react';

export default function PredictiveInsights() {
  return (
    <div className="grid grid-cols-2 gap-6 pb-8">
      <div className="bg-[#1E3A8A] rounded-xl p-8 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="text-blue-300 w-5 h-5" />
            <h3 className="text-lg font-bold">Prediktif Wawasan Risiko</h3>
          </div>
          <p className="text-sm text-blue-100 leading-relaxed max-w-md">
            Analisis berbasis AI menunjukkan potensi hambatan rantai pasokan di Jawa Barat Zona B karena datangnya musim hujan. Direkomendasikan: Tingkatkan stok penyangga sebesar 15%.
          </p>
        </div>
        <button className="bg-white text-[#1E3A8A] px-6 py-2 rounded-lg text-sm font-bold w-fit mt-8 hover:bg-gray-100">
          Lihat Rencana Lanjutan
        </button>
      </div>
      <div className="bg-white rounded-xl p-8 border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-6">Estimasi Dampak</h3>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-slate-500 mb-1">Estimasi penurunan risiko kurang gizi</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-black text-blue-600">12.4%</span>
                <span className="text-xs text-slate-500">pada akhir Q4</span>
              </div>
            </div>
            <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-blue-100">
              Keyakinan Model: Tinggi
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-[65%]"></div>
          </div>
          <p className="text-[10px] text-right mt-2 font-medium text-slate-500">65% dari target tahunan tercapai</p>
        </div>
      </div>
    </div>
  );
}
