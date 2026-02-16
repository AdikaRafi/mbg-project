import { Calendar, Download } from "lucide-react";
import { LogisticsStats } from "@/components/logistics/LogisticsStats";
import { ExceptionList } from "@/components/logistics/ExceptionList";
import { PODList } from "@/components/logistics/PODList";

export default function LogisticsPage() {
  return (
    <div className="pb-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Kinerja Logistik & POD
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Pemantauan real-time metrik distribusi dan verifikasi pengiriman.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm">
            <Calendar className="w-4 h-4" />
            Minggu Ini
          </button>
          <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-lg shadow-blue-500/20 transition-all">
            <Download className="w-4 h-4" />
            Export Laporan
          </button>
        </div>
      </div>

      <LogisticsStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ExceptionList />
        </div>
        <div className="h-full">
          <PODList />
        </div>
      </div>
    </div>
  );
}
