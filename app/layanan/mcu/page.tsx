
import React from "react";
import { FilterLayanan, FilterLayananMobile } from "@/components/FilterLayanan";
import {
    Search,
    ChevronDown,
    Activity,
    Syringe,
    Heart,
    Users,
    Globe,
    Briefcase,
    ClipboardList,
    Stethoscope
} from "lucide-react";
import Link from "next/link";


const categories = [
    { icon: Activity, label: "Skrining Kanker" },
    { icon: Syringe, label: "Vaksinasi" },
    { icon: Heart, label: "Skrining Jantung" },
    { icon: Users, label: "Skrining Pranikah" },
    { icon: Globe, label: "Aplikasi Visa" },
    { icon: Briefcase, label: "Skrining Prakerja" },
    { icon: ClipboardList, label: "Skrining Lite" },
    { icon: Stethoscope, label: "Skrining Umum" },
];

export default function LayananPage() {
    return (
        <main className="min-h-screen">
            <div className="container py-10">

                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Layanan Medical Check Up</h1>
                    <p className="text-slate-400 text-sm mt-1 font-medium">Temukan paket pemeriksaan kesehatan terbaik untuk Anda.</p>
                </div>

                <section className="mb-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-4 lg:grid-cols-8 gap-6">
                            {categories.map((item, i) => (
                                <button
                                    key={i}
                                    className="group flex flex-col items-center gap-4 transition-all"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-red-900 group-hover:shadow-md transition-all">
                                        <item.icon
                                            size={32}
                                            className="text-red-900 group-hover:scale-110 transition-transform"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="text-[13px] font-medium text-slate-600 group-hover:text-red-900 text-center leading-tight">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-red-900 transition-colors">
                                Lihat Lebih Banyak <ChevronDown size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                <FilterLayananMobile />


                <div className="flex flex-col lg:flex-row gap-12 mb-16">
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24">
                            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-50">
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Filter</span>
                                <button className="text-[11px] font-bold text-red-900 uppercase">Reset</button>
                            </div>
                            <FilterLayanan />
                        </div>
                    </aside>


                    <section className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-500">Semua Layanan (139)</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                <div
                                    key={i}
                                    className="group bg-white border border-slate-200 rounded-xl p-5 transition-all duration-300 hover:border-red-900 shadow-md hover:shadow-lg flex flex-col relative overflow-hidden"
                                >
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 text-base leading-tight group-hover:text-red-900 transition-colors mb-1">
                                            Paket Siloam Silver
                                        </h4>
                                        <p className="text-[11px] text-slate-400 font-medium mb-4">Skrining Umum</p>


                                        <div className="mt-auto">
                                            <p className="text-lg font-black text-slate-900 mt-0.5 tracking-tight">Rp1.900.000</p>
                                        </div>
                                    </div>

                                    <div className="pt-5 border-t border-slate-50 flex gap-2">
                                        <button className="w-full py-2.5 bg-red-900 text-white text-[10px] font-bold rounded-lg hover:bg-red-950 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                                            + Pesan
                                        </button>
                                        <Link href='/layanan/mcu/paket-contoh' className="w-full">
                                            <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-600 text-[10px] font-bold rounded-lg hover:bg-slate-50 transition-all uppercase tracking-widest">
                                                Lihat Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}


