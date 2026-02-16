interface NutrientBarProps {
  name: string;
  target: string;
  actual: string;
  percentage: number;
  isDeficit?: boolean;
}

function NutrientBar({ name, target, actual, percentage, isDeficit }: NutrientBarProps) {
  const barColor = isDeficit ? 'bg-red-500' : 'bg-blue-600';
  const textColor = isDeficit ? 'text-red-500' : 'text-green-600';
  
  return (
    <div>
      <div className="flex justify-between text-xs font-medium mb-1.5">
        <span>{name}</span>
        <span className="text-slate-500">Target: {target}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${barColor} rounded-full`} style={{ width: `${Math.min(percentage, 100)}%` }}></div>
      </div>
      <div className="flex justify-between text-[10px] mt-1.5">
        <span className="text-slate-500">Aktual: {actual}</span>
        {isDeficit ? (
          <a href="#" className="text-red-500 font-bold hover:underline cursor-pointer">
            Deficit (-15%) (Adj. Recipe)
          </a>
        ) : (
          <span className={`${textColor} font-bold`}>{percentage}%</span>
        )}
      </div>
    </div>
  );
}

export default function NutritionCompliance() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-bold">Ketepatan Nutrisi</h3>
        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Week 42</span>
      </div>
      <p className="text-xs text-slate-500 mb-6">Rencana vs Asupan Aktual per rata-rata makanan.</p>
      <div className="space-y-6">
        <NutrientBar name="Kalori (kcal)" target="650" actual="638" percentage={98} />
        <NutrientBar name="Protein (g)" target="25" actual="25" percentage={100} />
        <NutrientBar name="Zat Besi (mg)" target="8" actual="6.8" percentage={85} isDeficit />
        <NutrientBar name="Vitamin A (mcg)" target="500" actual="510" percentage={102} />
      </div>
    </div>
  );
}
