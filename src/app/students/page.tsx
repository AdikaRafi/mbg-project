import { Download, Plus } from "lucide-react";
import { StudentStats } from "@/components/students/StudentStats";
import { DietaryChart } from "@/components/students/DietaryChart";
import { StudentTable } from "@/components/students/StudentTable";

export default function StudentHealthPage() {
  return (
    <div className="pb-20 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Kesehatan Siswa & Tinjauan Data
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Pemantauan kesehatan siswa, alergi, dan kebutuhan diet khusus.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 shadow-sm">
            <Download className="w-4 h-4" />
            Export Data
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4" />
            Tambah Siswa
          </button>
        </div>
      </div>

      <StudentStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
        <div className="lg:col-span-1">
          <DietaryChart />
        </div>
        <div className="lg:col-span-2 h-full">
          <StudentTable />
        </div>
      </div>
    </div>
  );
}
