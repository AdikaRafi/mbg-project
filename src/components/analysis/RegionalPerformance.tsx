interface RegionRowProps {
  region: string;
  satisfaction: string;
  compliance: string;
  status: 'optimal' | 'review';
}

function RegionRow({ region, satisfaction, compliance, status }: RegionRowProps) {
  const statusColors = {
    optimal: 'bg-green-100 text-green-700',
    review: 'bg-amber-100 text-amber-700'
  };
  
  const statusText = {
    optimal: 'Optimal',
    review: 'Review'
  };
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-3.5 font-semibold">{region}</td>
      <td className="py-3.5 text-slate-500">{satisfaction}</td>
      <td className="py-3.5 text-slate-500">{compliance}</td>
      <td className="py-3.5">
        <span className={`${statusColors[status]} px-2 py-0.5 rounded-full text-[10px] font-bold`}>
          {statusText[status]}
        </span>
      </td>
    </tr>
  );
}

export default function RegionalPerformance() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <h3 className="font-bold mb-4">Kinerja Wilayah</h3>
      <table className="w-full text-xs">
        <thead>
          <tr className="text-left text-slate-500 border-b border-gray-50">
            <th className="pb-3 font-medium uppercase tracking-wider">Wilayah</th>
            <th className="pb-3 font-medium uppercase tracking-wider">Kepuasan</th>
            <th className="pb-3 font-medium uppercase tracking-wider">Kepatuhan</th>
            <th className="pb-3 font-medium uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          <RegionRow region="Jakarta Pusat" satisfaction="96%" compliance="99%" status="optimal" />
          <RegionRow region="Jawa Barat Zona A" satisfaction="88%" compliance="94%" status="review" />
          <RegionRow region="Banten 2" satisfaction="92%" compliance="97%" status="optimal" />
        </tbody>
      </table>
    </div>
  );
}
