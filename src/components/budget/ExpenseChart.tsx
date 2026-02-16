"use client";

import React from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp, ChevronDown } from "lucide-react";

// 1. Data Mockup yang lebih terstruktur
const data = [
  { date: "1 Januari", amount: 25 },
  { date: "5 Januari", amount: 30 },
  { date: "10 Januari", amount: 28 },
  { date: "15 Januari", amount: 42 },
  { date: "20 Januari", amount: 50 },
  { date: "25 Januari", amount: 32 },
  { date: "30 Januari", amount: 60 },
];

export function ExpenseChart() {
  return (
    <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            Pengeluaran
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-full">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                4%
              </span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 text-xs">
              Pengeluaran meningkat dari minggu lalu
            </span>
          </div>
        </div>

        <div className="relative">
          <select className="appearance-none text-xs font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-3 pr-8 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-slate-600 dark:text-slate-300 cursor-pointer">
            <option>30 Hari Terakhir</option>
            <option>Kuartal Terakhir</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-2.5 w-3 h-3 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#e2e8f0" 
              className="dark:stroke-slate-800"
            />
            
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => `${value}M`}
              domain={[0, 100]}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorAmount)"
              activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Komponen Tooltip Kustom agar lebih cantik
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl border border-slate-700 text-xs">
        <p className="font-medium">{payload[0].payload.date}</p>
        <p className="text-blue-400 font-bold mt-1">
          Jumlah: {payload[0].value}M
        </p>
      </div>
    );
  }
  return null;
};