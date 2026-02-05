"use client";
import React from 'react'
import {
    Package,
    BookOpen,
    Briefcase,
    Users,
    ArrowUpRight,
    Plus,
    Clock,
    ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const DashboardPage = () => {
    const stats = [
        { label: 'Total Paket', count: '24', icon: Package, color: 'text-red-900', bg: 'bg-red-50' },
        { label: 'Artikel Blog', count: '142', icon: BookOpen, color: 'text-slate-700', bg: 'bg-slate-100' },
        { label: 'Lowongan Aktif', count: '8', icon: Briefcase, color: 'text-slate-700', bg: 'bg-slate-100' },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">DASHBOARD</h1>
                <p className="text-sm text-slate-500 mt-1">Selamat datang di panel kontrol Klinik Prameka.</p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: false,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {stats.map((stat, i) => (
                        <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                            <div className="bg-white p-5 rounded-md border border-slate-200 shadow-sm group hover:border-red-900/30 transition-all cursor-default h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-2.5 rounded-md ${stat.bg} ${stat.color}`}>
                                        <stat.icon size={20} />
                                    </div>
                                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-red-900 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 mb-1">
                                        {stat.label}
                                    </p>
                                    <h2 className="text-2xl font-black text-slate-900">
                                        {stat.count}
                                    </h2>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2">
                    <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px] flex items-center gap-2">
                                <Clock size={14} className="text-red-900" /> Update Terakhir
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-900" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800">Paket MCU Silver telah diperbarui</p>
                                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight mt-0.5">2 Jam yang lalu • Oleh Admin</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-red-900 p-6 rounded-md text-white shadow-lg shadow-red-900/10">
                        <h3 className="font-bold uppercase tracking-widest text-[11px] mb-6 opacity-80">Aksi Cepat</h3>
                        <div className="space-y-2">
                            <Link href="/admin/tambah-paket" className="w-full flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-md transition-all border border-white/5 group">
                                <span className="text-xs font-bold uppercase tracking-wide">Buat Paket Baru</span>
                                <Plus size={18} />
                            </Link>
                            <Link href="/admin/tambah-blog" className="w-full flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-md transition-all border border-white/5 group">
                                <span className="text-xs font-bold uppercase tracking-wide">Tulis Artikel</span>
                                <Plus size={18} />
                            </Link>
                            <Link href="/admin/tambah-karir" className="w-full flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-md transition-all border border-white/5 group">
                                <span className="text-xs font-bold uppercase tracking-wide">Post Lowongan</span>
                                <Plus size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardPage