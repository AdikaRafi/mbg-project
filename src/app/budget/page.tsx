"use client";

import { Calendar, Download } from "lucide-react";
import { ExpenseChart } from "@/components/budget/ExpenseChart";
import { SmartInsight } from "@/components/budget/SmartInsight";
import { BudgetStats } from "@/components/budget/BudgetStats";
import { ExpenditureTable } from "@/components/budget/ExpenditureTable";

export default function BudgetPage() {
  return (
    /* 1. Menambahkan background warna netral agar kartu lebih menonjol */
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-300">
      
      {/* 2. Container Pusat: max-w-7xl menjaga konten tidak terlalu lebar, mx-auto membuatnya di tengah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="space-y-8">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Analisis & Laporan Keuangan
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 flex items-center gap-2">
                Rincian pengeluaran dan deteksi biaya mencurigakan
                <span className="inline-block w-1 h-1 bg-slate-300 rounded-full" />
                <span className="font-semibold text-primary dark:text-blue-400">
                  Januari 2026
                </span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 shadow-sm">
                <Calendar className="w-4 h-4 text-slate-400" />
                This Month
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </div>
          </div>

          {/* Top Row: Chart & Insight (2:1 Ratio) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ExpenseChart harus memiliki class lg:col-span-2 di dalamnya atau dibungkus div ini */}
            <div className="lg:col-span-2">
              <ExpenseChart />
            </div>
            <div className="lg:col-span-1">
              <SmartInsight />
            </div>
          </div>

          {/* Bottom Row: Table & Stats (2:1 Ratio) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ExpenditureTable />
            </div>
            <div className="lg:col-span-1">
              <BudgetStats />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}