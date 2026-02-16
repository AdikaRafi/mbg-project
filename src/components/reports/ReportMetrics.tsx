import { Inbox, AlertCircle, Clock, Cog, CheckCircle } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: 'inbox' | 'alert' | 'clock' | 'settings' | 'check';
  subtitle: string;
  bgColor: string;
  textColor?: string;
  borderColor?: string;
}

const iconMap = {
  inbox: Inbox,
  alert: AlertCircle,
  clock: Clock,
  settings: Cog,
  check: CheckCircle
};

function MetricCard({ title, value, icon, subtitle, bgColor, textColor = 'text-slate-900', borderColor = 'border-slate-200' }: MetricCardProps) {
  const Icon = iconMap[icon];
  const iconColor = title === 'Urgent' ? 'text-red-600' : 
                    title === 'Pending' ? 'text-amber-600' : 
                    title === 'In Progress' ? 'text-indigo-600' :
                    title === 'Resolved' ? 'text-green-600' : 'text-blue-600';
  
  const iconBg = title === 'Urgent' ? 'bg-red-100' :
                 title === 'Pending' ? 'bg-amber-50' :
                 title === 'In Progress' ? 'bg-indigo-50' :
                 title === 'Resolved' ? 'bg-green-50' : 'bg-blue-50';
  
  return (
    <div className={`${bgColor} p-5 rounded-xl border ${borderColor} shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start mb-3">
        <span className={`text-xs font-semibold ${title === 'Urgent' ? 'text-red-600' : 'text-slate-500'} uppercase tracking-wider`}>{title}</span>
        <div className={`p-1.5 ${iconBg} rounded-lg`}>
          <Icon className={`${iconColor} w-[18px] h-[18px]`} />
        </div>
      </div>
      <div className={`text-3xl font-bold ${title === 'Urgent' ? 'text-red-700' : textColor}`}>{value}</div>
      <div className={`text-[11px] mt-1 font-medium ${title === 'Resolved' ? 'text-green-600 font-semibold' : title === 'Urgent' ? 'text-red-600' : 'text-slate-400'}`}>
        {subtitle}
      </div>
    </div>
  );
}

export default function ReportMetrics() {
  return (
    <div className="grid grid-cols-5 gap-4 mb-6">
      <MetricCard
        title="Total Laporan"
        value="142"
        icon="inbox"
        subtitle="Sejak awal bulan"
        bgColor="bg-white"
      />
      <MetricCard
        title="Penting"
        value="8"
        icon="alert"
        subtitle="Membutuhkan tindakan segera"
        bgColor="bg-[#FEF2F2]"
        borderColor="border-red-100"
      />
      <MetricCard
        title="Tertunda"
        value="24"
        icon="clock"
        subtitle="Menunggu penugasan"
        bgColor="bg-white"
      />
      <MetricCard
        title="Sedang Dikerjakan"
        value="45"
        icon="settings"
        subtitle="Sedang dalam investigasi"
        bgColor="bg-white"
      />
      <MetricCard
        title="Selesai"
        value="65"
        icon="check"
        subtitle="+12% vs last week"
        bgColor="bg-white"
      />
    </div>
  );
}
