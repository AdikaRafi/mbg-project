"use client";

import { Search, Filter, MoreHorizontal } from "lucide-react";

const students = [
  {
    id: "STU-001",
    name: "Ahmad Rizki",
    class: "5A",
    allergies: ["Kacang"],
    status: "Aktif",
    risk: "Tinggi",
  },
  {
    id: "STU-002",
    name: "Bunga Citra",
    class: "5A",
    allergies: [],
    status: "Aktif",
    risk: "Rendah",
  },
  {
    id: "STU-003",
    name: "Candra Wijaya",
    class: "5B",
    allergies: ["Seafood", "Dairy"],
    status: "Aktif",
    risk: "Sedang",
  },
  {
    id: "STU-004",
    name: "Dewi Sartika",
    class: "4A",
    allergies: [],
    status: "Tidak Hadir",
    risk: "Rendah",
  },
  {
    id: "STU-005",
    name: "Eko Prasetyo",
    class: "6C",
    allergies: ["Gluten"],
    status: "Aktif",
    risk: "Sedang",
  },
  {
    id: "STU-006",
    name: "Fajar Nugraha",
    class: "6C",
    allergies: [],
    status: "Aktif",
    risk: "Rendah",
  },
];

export function StudentTable() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-border-light dark:border-border-dark flex items-center justify-between gap-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">
          Daftar Siswa
        </h3>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari Siswa..."
              className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs w-48 focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Class</th>
              <th className="px-6 py-4">Allergies/Diet</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.map((student) => (
              <tr 
                key={student.id} 
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {student.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        ID: {student.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {student.class}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 flex-wrap">
                    {student.allergies.length > 0 ? (
                      student.allergies.map((allergy) => (
                        <span 
                          key={allergy} 
                          className="px-2 py-0.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold rounded"
                        >
                          {allergy}
                        </span>
                      ))
                    ) : (
                      <span className="text-[10px] text-slate-400">-</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded flex w-fit items-center gap-1.5 ${
                    student.status === "Active" 
                      ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${student.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`}></span>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
