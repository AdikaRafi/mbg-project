import { Utensils, Clock, Heart, CheckCircle, Shield } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  icon: 'restaurant' | 'schedule' | 'health' | 'verified' | 'shield';
  subtitle: string;
  trend?: string;
  bgColor: string;
  iconColor: string;
}

const iconMap = {
  restaurant: Utensils,
  schedule: Clock,
  health: Heart,
  verified: CheckCircle,
  shield: Shield
};

function MetricCard({ title, value, icon, subtitle, trend, bgColor, iconColor }: MetricCardProps) {
  const Icon = iconMap[icon];
  
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <div className={`p-1.5 ${bgColor} ${iconColor} rounded-lg`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-[11px] mt-2 font-medium ${trend ? 'text-green-600' : 'text-slate-500'}`}>
        {trend || subtitle}
      </p>
    </div>
  );
}

export default function AnalysisMetrics() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <MetricCard
        title="Total Meals"
        value="1.2M"
        icon="restaurant"
        subtitle="+5% vs last month"
        trend="↑ +5% vs last month"
        bgColor="bg-blue-50"
        iconColor="text-blue-600"
      />
      <MetricCard
        title="On-Time Rate"
        value="94.2%"
        icon="schedule"
        subtitle="Target: 95%"
        bgColor="bg-blue-50"
        iconColor="text-blue-600"
      />
      <MetricCard
        title="Nutrition Compliance"
        value="98.5%"
        icon="health"
        subtitle="Excellent"
        trend="Excellent"
        bgColor="bg-green-50"
        iconColor="text-green-600"
      />
      <MetricCard
        title="Complaint Resolution"
        value="92%"
        icon="verified"
        subtitle="Avg time: 24h"
        bgColor="bg-amber-50"
        iconColor="text-amber-600"
      />
      <MetricCard
        title="Risk Index"
        value="Low"
        icon="shield"
        subtitle="Stable operations"
        trend="Stable operations"
        bgColor="bg-teal-50"
        iconColor="text-teal-600"
      />
    </div>
  );
}
