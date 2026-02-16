import AnalysisMetrics from '@/components/analysis/AnalysisMetrics';
import PerformanceTrend from '@/components/analysis/PerformanceTrend';
import NutritionCompliance from '@/components/analysis/NutritionCompliance';
import ComplaintAnalysis from '@/components/analysis/ComplaintAnalysis';
import RegionalPerformance from '@/components/analysis/RegionalPerformance';
import PredictiveInsights from '@/components/analysis/PredictiveInsights';
import { FilterIcon, Download } from 'lucide-react';

export default function AnalysisPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analisis Kinerja & Kebijakan</h1>
          <p className="text-sm text-slate-500 mt-1">
            Evaluasi tingkat tinggi efektivitas dan kepatuhan program gizi • Q4 2023
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium bg-white hover:bg-gray-50">
            <FilterIcon className="w-[18px] h-[18px] mr-2" />
            Filter Kriteria
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            <Download className="w-[18px] h-[18px] mr-2" />
            Buat Laporan
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <AnalysisMetrics />

      {/* Performance Trend Chart */}
      <PerformanceTrend />

      {/* Two Column Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Nutrition Compliance */}
        <div className="col-span-4">
          <NutritionCompliance />
        </div>

        {/* Right Column - Complaint Analysis & Regional Performance */}
        <div className="col-span-8 space-y-6">
          <ComplaintAnalysis />
          <RegionalPerformance />
        </div>
      </div>

      {/* Predictive Insights */}
      <PredictiveInsights />

      {/* Footer */}
      <footer className="pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-slate-500">
        <p>© 2023 Program Nasional MBG. Pemerintah Indonesia.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-slate-800">Kebijakan Privasi</a>
          <a href="#" className="hover:text-slate-800">Ketentuan Layanan</a>
          <a href="#" className="hover:text-slate-800">Pusat Bantuan</a>
        </div>
      </footer>
    </div>
  );
}
