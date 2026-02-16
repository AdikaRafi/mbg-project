"use client";

import { Search, Share, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react";

export function ExpenditureTable() {
  return (
    <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col">
      <div className="p-6 flex items-center justify-between border-b border-border-light dark:border-border-dark">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">
          Rincian Pengeluaran
        </h3>
        <div className="flex gap-3">
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </span>
            <input
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-1 focus:ring-primary w-48 outline-none text-slate-600 dark:text-slate-300 placeholder-slate-400"
              placeholder="Cari Transaksi..."
              type="text"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
            <Share className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4">SPPG REF</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Deskripsi</th>
              <th className="px-6 py-4 text-right">Jumlah</th>
              <th className="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-800">
            {/* Row 1 */}
            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">5 Januari 2026</td>
              <td className="px-6 py-4">
                <a
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  href="#"
                >
                  SPPG-2023-089
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded">
                  Logistik
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500 truncate max-w-[200px]">
                Pemeliharaan transportasi pengiriman mbg ke sekolah...
              </td>
              <td className="px-6 py-4 text-right font-bold text-slate-700 dark:text-slate-300">
                12,450,000
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">15 Januari 2026</td>
              <td className="px-6 py-4">
                <a
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  href="#"
                >
                  SPPG-2023-088
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded">
                  Bahan Baku
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500 truncate max-w-[200px]">
                Pembelian bahan baku...
              </td>
              <td className="px-6 py-4 text-right font-bold text-slate-700 dark:text-slate-300">
                84,120,000
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">20 Januari 2026</td>
              <td className="px-6 py-4">
                <a
                  className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                  href="#"
                >
                  SPPG-2023-087
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-[10px] font-bold rounded">
                  Peralatan
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500 truncate max-w-[200px]">
                Penggantian peralatan dapur...
              </td>
              <td className="px-6 py-4 text-right font-bold text-slate-700 dark:text-slate-300">
                5,600,000
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <p className="text-[11px] text-slate-400 font-medium">
          Menampilkan 5 dari 128 transaksi
        </p>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
