"use client";

import { Activity, ChevronDown, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data dummy awal
const INITIAL_DATA = [
  { day: 'SEN', calories: 2100, protein: 95 },
  { day: 'SEL', calories: 2300, protein: 110 },
  { day: 'RAB', calories: 1900, protein: 85 },
  { day: 'KAM', calories: 2400, protein: 120 },
  { day: 'JUM', calories: 2000, protein: 90 },
  { day: 'SAB', calories: 2600, protein: 130 },
  { day: 'MIN', calories: 2250, protein: 105 },
];

export function WeeklyTrend() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fungsi untuk menghasilkan data acak yang realistis
  const refreshData = () => {
    setIsAnimating(true);
    
    // Simulasi loading sebentar agar terasa responsif
    setTimeout(() => {
      const days = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'];
      const newData = days.map(day => ({
        day,
        // Random calories between 1800 - 2800
        calories: Math.floor(Math.random() * (2800 - 1800 + 1)) + 1800,
        // Random protein between 80 - 150
        protein: Math.floor(Math.random() * (150 - 80 + 1)) + 80,
      }));
      
      setData(newData);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 font-sans">
      {/* --- HEADER --- */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-sm text-slate-800 dark:text-white flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-500" />
          Trend Nutrisi Mingguan
        </h3>
        
        <div className="flex items-center gap-3">
          <button
            onClick={refreshData}
            disabled={isAnimating}
            className={`flex items-center gap-1 text-[11px] font-bold text-blue-500 hover:text-blue-600 transition-colors ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <RefreshCw className={`w-3 h-3 ${isAnimating ? 'animate-spin' : ''}`} />
            {isAnimating ? 'Refreshing...' : 'Refresh Data'}
          </button>
          
          <div className="relative group">
            <select className="text-[11px] font-bold border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent py-1.5 pl-3 pr-8 appearance-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer text-slate-600 dark:text-slate-300 outline-none transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* --- CHART AREA --- */}
      <div className="h-[300px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              {/* Gradient untuk Calories (Biru Muda/Light) */}
              <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              {/* Gradient untuk Protein (Biru Tua/Dark) */}
              <linearGradient id="colorProtein" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
              </linearGradient>
            </defs>

            {/* Grid Garis Tipis */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

            {/* Sumbu X */}
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />

            {/* Sumbu Y (Hidden but scaling) - Kita pakai dual axis biar grafiknya numpuk cantik */}
            {/* Axis untuk Calories */}
            <YAxis yAxisId="cal" hide domain={['dataMin - 500', 'dataMax + 500']} />
            {/* Axis untuk Protein */}
            <YAxis yAxisId="prot" hide domain={['dataMin - 50', 'dataMax + 50']} />

            {/* Tooltip Custom */}
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
              }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              labelStyle={{ color: '#64748b', fontSize: '11px', marginBottom: '4px' }}
            />

            {/* DATA 1: Total Calories (Light Blue) */}
            <Area
              yAxisId="cal"
              type="monotone" // Membuat garis melengkung halus
              dataKey="calories"
              stroke="#3b82f6" // Blue-500
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCalories)"
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Calories"
            />

            {/* DATA 2: Protein (Dark Blue) */}
            <Area
              yAxisId="prot"
              type="monotone"
              dataKey="protein"
              stroke="#1e3a8a" // Blue-900
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorProtein)"
              activeDot={{ r: 6, strokeWidth: 0 }}
              name="Protein"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* --- LEGEND / FOOTER --- */}
      <div className="mt-6 flex gap-6 px-2 border-t border-transparent pt-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#1e3a8a] ring-2 ring-[#1e3a8a]/20"></span>
          <span className="text-[11px] font-bold text-slate-500">Protein (dark)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#3b82f6] ring-2 ring-[#3b82f6]/20"></span>
          <span className="text-[11px] font-bold text-slate-500">Total Calories (light)</span>
        </div>
      </div>
    </div>
  );
}