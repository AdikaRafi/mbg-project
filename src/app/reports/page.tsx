import ReportMetrics from '@/components/reports/ReportMetrics';
import ReportTable from '@/components/reports/ReportTable';
import SLAMonitoring from '@/components/reports/SLAMonitoring';
import ComplaintHeatmap from '@/components/reports/ComplaintHeatmap';
import AIInsight from '@/components/reports/AIInsight';
import { Calendar } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* Page Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Laporan Masuk
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Pemantauan real-time keluhan gizi sekolah dan status penyelesaian.
          </p>
        </div>
        <div className="flex items-center bg-white px-3 py-1.5 border border-slate-200 rounded-lg text-slate-600 text-sm shadow-sm font-medium">
          <Calendar className="w-[18px] h-[18px] mr-2 text-slate-400" />
          Hari Ini, 16 Feb
        </div>
      </div>

      {/* Report Metrics */}
      <ReportMetrics />

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Report Table - 2/3 width */}
        <div className="col-span-2 flex flex-col">
          <ReportTable />
        </div>

        {/* Side Column - 1/3 width */}
        <div className="space-y-6">
          <SLAMonitoring />
          <ComplaintHeatmap />
        </div>
      </div>

      {/* AI Insight Banner */}
      <AIInsight />

      {/* Footer */}
      <footer className="mt-auto pt-8 pb-4 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 font-medium">
          <p>© 2023 Program Nasional MBG. Pemerintah Indonesia.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-800 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Ketentuan Layanan</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Pusat Bantuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
