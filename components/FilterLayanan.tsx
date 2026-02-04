import React from "react";
import { ChevronDown } from "lucide-react";
import { Search, ArrowUpDown, Filter, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

export const FilterLayanan = () => {
  const sections = [
    { title: "Usia", items: ["Anak-anak", "Dewasa", "Lansia"] },
    { title: "Jenis Kelamin", items: ["Pria", "Wanita"] },
    { title: "Harga", items: ["< 1 Juta", "1 - 5 Juta", "> 5 Juta"] },
    { title: "Urutkan Dari", items: ["Terpopuler", "Harga Terendah", "Harga Tertinggi"] },
  ];

  return (
    <div className="space-y-6 pb-10">

      <div className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Tipe</h3>
          <ChevronDown size={16} className="text-slate-400 rotate-180" />
        </div>
        <div className="flex flex-wrap gap-2">
          {['Medical Check-Up', 'Lab', 'Radiologi', 'Siloam at Home'].map((t) => (
            <button
              key={t}
              className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${t === 'Medical Check-Up'
                  ? 'bg-red-900 text-white border-red-900'
                  : 'bg-white text-slate-500 border-slate-200 active:border-red-900'
                }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="py-4 border-t border-slate-50">
          <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm font-bold text-slate-800 group-hover:text-red-900">{section.title}</span>
            <ChevronDown size={16} className="text-slate-300 group-hover:text-red-900" />
          </div>
        </div>
      ))}
    </div>
  );
};



export const FilterLayananMobile = () => {
  return (
    <div className="flex items-center gap-2 mb-10">

      <div className="relative flex-1 lg:hidden">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Cari nama paket"
          className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-900/5 focus:border-red-900 transition-all"
        />
      </div>


      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <button className="p-3.5 border border-slate-200 rounded-xl text-slate-700 bg-white active:bg-slate-50">
              <Filter size={20} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="px-6 h-[90vh]">
            <DrawerHeader className="px-0 flex flex-row items-center justify-between border-b pb-4 mb-4">
              <DrawerTitle className="text-lg font-bold">Filter</DrawerTitle>
              <DrawerClose><X size={20} className="text-slate-400" /></DrawerClose>
            </DrawerHeader>

            <div className="overflow-y-auto pr-2">
              <FilterLayanan />
            </div>

            <DrawerFooter className="px-0 pt-4 flex flex-row gap-3 bg-white border-t mt-auto">
              <button className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 text-sm">Reset</button>
              <button className="flex-[2] py-4 bg-red-900 text-white rounded-xl font-bold text-sm">Gunakan</button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

