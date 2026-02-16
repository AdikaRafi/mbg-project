interface HeatmapBarProps {
  region: string;
  count: number;
  level: 'high' | 'medium' | 'low';
  percentage: number;
}

function HeatmapBar({ region, count, level, percentage }: HeatmapBarProps) {
  const colors = {
    high: { text: 'text-red-600', bg: 'bg-red-500' },
    medium: { text: 'text-amber-500', bg: 'bg-amber-400' },
    low: { text: 'text-green-600', bg: 'bg-green-500' }
  };
  
  const labels = {
    high: 'High',
    medium: 'Med',
    low: 'Low'
  };
  
  return (
    <div>
      <div className="flex justify-between text-[11px] mb-1.5 font-bold">
        <span className="text-slate-700">{region}</span>
        <span className={colors[level].text}>{labels[level]} ({count})</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${colors[level].bg} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default function ComplaintHeatmap() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-slate-900">Peta Panas Keluhan</h3>
        <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">7 hari terakhir</span>
      </div>
      <div className="space-y-4">
        <HeatmapBar region="Jawa Barat Zona A" count={32} level="high" percentage={85} />
        <HeatmapBar region="Jakarta Pusat" count={18} level="medium" percentage={45} />
        <HeatmapBar region="Banten District 2" count={5} level="low" percentage={15} />
      </div>
      <button className="w-full mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-blue-600 uppercase tracking-widest hover:underline text-center block">
        Lihat Analisis Peta Lengkap
      </button>
    </div>
  );
}
