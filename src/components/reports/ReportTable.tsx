import { Filter, RefreshCw } from 'lucide-react';

interface ReportRowProps {
  id: string;
  date: string;
  school: string;
  category: string;
  riskLevel: 'high' | 'medium' | 'low';
  status: 'tertunda' | 'proses' | 'selesai';
}

function ReportRow({ id, date, school, category, riskLevel, status }: ReportRowProps) {
  const riskColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-amber-100 text-amber-700',
    low: 'bg-blue-100 text-blue-700'
  };
  
  const riskText = {
    high: 'High Risk',
    medium: 'Medium Risk',
    low: 'Low Risk'
  };
  
  const statusColors = {
    tertunda: 'bg-amber-100 text-amber-700',
    proses: 'bg-indigo-100 text-indigo-700',
    selesai: 'bg-green-100 text-green-700'
  };
  
  const statusText = {
    tertunda: 'Tertunda',
    proses: 'Proses',
    selesai: 'Selesai'
  };
  
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-6 py-4 font-bold text-slate-900">
        <a href="#" className="text-blue-600 hover:underline hover:text-blue-700 cursor-pointer">{id}</a>
      </td>
      <td className="px-6 py-4 text-slate-500">{date}</td>
      <td className="px-6 py-4 font-medium text-slate-900">{school}</td>
      <td className="px-6 py-4 text-slate-500">{category}</td>
      <td className="px-6 py-4">
        <span className={`px-2 py-0.5 rounded-md ${riskColors[riskLevel]} text-[10px] font-bold`}>
          {riskText[riskLevel]}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-0.5 rounded-md ${statusColors[status]} text-[10px] font-bold`}>
          {statusText[status]}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <a href="#" className="text-blue-600 font-semibold hover:underline">View</a>
      </td>
    </tr>
  );
}

export default function ReportTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
      <div className="p-4 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <select className="text-xs font-medium border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-8 bg-slate-50">
            <option>Semua Tingkat Risiko</option>
          </select>
          <select className="text-xs font-medium border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-8 bg-slate-50">
            <option>Semua Kategori</option>
          </select>
          <select className="text-xs font-medium border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2 px-3 pr-8 bg-slate-50">
            <option>Semua Wilayah</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center shadow-sm hover:bg-blue-700 transition-colors">
            <Filter className="w-4 h-4 mr-1.5" />
            Terapkan
          </button>
          <button className="p-2 border border-slate-200 rounded-lg bg-white text-slate-400 hover:text-slate-600">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center bg-slate-50/30">
        <h3 className="text-sm font-bold text-slate-900">Laporan Aktif</h3>
        <button className="text-[11px] font-bold text-blue-600 uppercase tracking-wider hover:underline">Export CSV</button>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="min-w-full text-[13px]">
          <thead className="bg-slate-50 border-y border-slate-100">
            <tr>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Report ID</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Date</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">School</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Category</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Risk Level</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Status</th>
              <th className="px-6 py-3 text-right font-semibold text-slate-400 uppercase tracking-widest text-[10px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <ReportRow id="#RPT-2045" date="Oct 24, 09:12" school="SDN Menteng 01" category="Food Safety" riskLevel="high" status="tertunda" />
            <ReportRow id="#RPT-2044" date="Oct 24, 08:45" school="SMPN 12 Bandung" category="Late Delivery" riskLevel="low" status="proses" />
            <ReportRow id="#RPT-2043" date="Oct 24, 08:30" school="SDN Cibinong 03" category="Hygiene" riskLevel="high" status="tertunda" />
            <ReportRow id="#RPT-2042" date="Oct 23, 16:20" school="SDN Kebon Jeruk 11" category="Portion Size" riskLevel="medium" status="selesai" />
            <ReportRow id="#RPT-2041" date="Oct 23, 15:45" school="SMPN 02 Depok" category="Menu Variance" riskLevel="low" status="selesai" />
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between rounded-b-xl">
        <span className="text-[11px] text-slate-500 font-medium">Menampilkan 1-5 dari 142 laporan</span>
        <div className="flex items-center space-x-1.5">
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-400 bg-white cursor-not-allowed">Sebelumnya</button>
          <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors">Berikutnya</button>
        </div>
      </div>
    </div>
  );
}
