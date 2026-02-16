import { Filter, Download } from "lucide-react";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { RegionalMap } from "@/components/dashboard/RegionalMap";
import { LiveUpdates } from "@/components/dashboard/LiveUpdates";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            Monitoring MBG Nasional •{" "}
            <span className="text-primary font-medium">
              Senin, 26 Februari 2026
            </span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-surface-dark hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary-dark shadow-sm transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RegionalMap />
        <LiveUpdates />
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-border-light dark:border-border-dark flex flex-col md:flex-row justify-between items-center text-[11px] font-medium text-slate-500 dark:text-slate-400">
        <p>© 2026 Program MBG Nasional. Pemerintah Indonesia.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Ketentuan Layanan
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Pusat Bantuan
          </a>
        </div>
      </div>
    </div>
  );
}
