'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PerformanceTrend() {
  const data = {
    labels: ['Oct 1', 'Oct 3', 'Oct 5', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 15', 'Oct 17', 'Oct 19', 'Oct 21', 'Oct 23', 'Oct 25', 'Oct 27', 'Oct 29'],
    datasets: [
      {
        label: 'Meals Distributed',
        data: [85, 87, 86, 89, 92, 90, 95, 94, 98, 102, 105, 100, 108, 112, 115],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.05)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#2563EB',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        yAxisID: 'y'
      },
      {
        label: 'Complaints',
        data: [12, 10, 15, 8, 6, 7, 4, 6, 3, 5, 8, 4, 3, 2, 4],
        borderColor: '#EF4444',
        borderDash: [4, 4],
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#EF4444',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94A3B8', font: { size: 10 } }
      },
      y: {
        position: 'left' as const,
        min: 80,
        max: 115,
        grid: { color: '#F1F5F9' },
        ticks: { color: '#94A3B8', font: { size: 10 } },
        title: { display: true, text: 'Meals (k)', font: { size: 10 } }
      },
      y1: {
        position: 'right' as const,
        min: 0,
        max: 16,
        grid: { display: false },
        ticks: { color: '#EF4444', font: { size: 10 } },
        title: { display: true, text: 'Complaints', font: { size: 10 }, color: '#EF4444' }
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-bold">Tren Kinerja</h3>
          <p className="text-xs text-slate-500">Perbandingan volume distribusi makanan vs frekuensi keluhan</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-[10px] font-medium text-slate-500">
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full border-2 border-blue-600 mr-1.5"></span> Makanan Terdistribusi (x1000)
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 rounded-full border-2 border-red-500 mr-1.5"></span> Keluhan
            </div>
          </div>
          <select className="text-xs border-gray-200 rounded-lg px-3 py-1.5 focus:ring-0 outline-none">
            <option>30 Hari Terakhir</option>
          </select>
        </div>
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
