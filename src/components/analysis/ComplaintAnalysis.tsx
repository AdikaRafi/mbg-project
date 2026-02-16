import { Frown, Truck, BookOpen } from 'lucide-react';

interface ComplaintCardProps {
  title: string;
  count: number;
  subtitle: string;
  percentage: number;
  icon: 'frown' | 'truck' | 'book';
  color: string;
}

const iconMap = {
  frown: Frown,
  truck: Truck,
  book: BookOpen
};

function ComplaintCard({ title, count, subtitle, percentage, icon, color }: ComplaintCardProps) {
  const Icon = iconMap[icon];
  
  return (
    <a href="#" className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer group">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className={`${color} w-5 h-5`} />
        <span className="text-xs font-bold text-gray-900 group-hover:text-blue-600">{title}</span>
      </div>
      <p className="text-2xl font-bold">{count}</p>
      <p className="text-[10px] text-slate-500">{subtitle}</p>
      <div className="h-1 w-full bg-gray-200 mt-3 rounded-full overflow-hidden">
        <div className={`h-full ${color.replace('text-', 'bg-')}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </a>
  );
}

export default function ComplaintAnalysis() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold">Analisis Keluhan</h3>
        <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Lihat Semua Masalah</a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ComplaintCard
          title="Kualitas Makanan"
          count={42}
          subtitle="Masalah Suhu"
          percentage={45}
          icon="frown"
          color="text-amber-500"
        />
        <ComplaintCard
          title="Keterlambatan Pengiriman"
          count={18}
          subtitle="Terkait Lalu Lintas"
          percentage={20}
          icon="truck"
          color="text-blue-500"
        />
        <ComplaintCard
          title="Ukuran Porsi"
          count={12}
          subtitle="Tidak Konsisten"
          percentage={15}
          icon="book"
          color="text-purple-500"
        />
      </div>
    </div>
  );
}
