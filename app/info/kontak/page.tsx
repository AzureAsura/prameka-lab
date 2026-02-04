import React from "react";
import {
    Phone,
    MessageCircle,
    Calendar,
    Info,
    Stethoscope,
    Tag,
    ChevronRight,
    ArrowRight
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const TOPICS = [
    {
        icon: <Calendar size={20} />,
        title: "Janji Temu Dokter",
        desc: "Buat janji, ubah jadwal, atau batalkan janji temu dokter."
    },
    {
        icon: <Info size={20} />,
        title: "Informasi Rumah Sakit",
        desc: "Cari informasi kontak dan lokasi Klinik Prameka."
    },
    {
        icon: <Stethoscope size={20} />,
        title: "Layanan Kesehatan",
        desc: "Pesan MCU, layanan homecare, laboratorium, dan radiologi."
    },
    {
        icon: <Tag size={20} />,
        title: "Promo",
        desc: "Dapatkan informasi mengenai promo yang sedang berlangsung."
    }
];

const BANNERS = [
    {
        title: "Kesempatan Berkarier",
        desc: "Temukan jalur karier yang menarik dan peluang pengembangan bersama Klinik Prameka.",
        btnText: "Telusuri Karier",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Kemitraan Strategis",
        desc: "Jelajahi potensi kemitraan bersama Prameka untuk menciptakan solusi berdampak bagi kesehatan.",
        btnText: "Hubungi Kami",
        img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    },
]

export default function page() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container pt-7">

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-xl">
                        Hubungi Kami untuk Pertanyaan dan Bantuan
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center justify-between gap-6 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer w-full sm:w-72">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-900">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Hubungi Kami</p>
                                    <p className="text-sm font-black text-slate-900">1-500-911</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-slate-300 group-hover:text-red-900" />
                        </div>

                        <div className="flex items-center justify-between gap-6 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer w-full sm:w-72">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">WhatsApp</p>
                                    <p className="text-sm font-black text-slate-900">+62 811 8951 181</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-slate-300 group-hover:text-red-900" />
                        </div>
                    </div>
                </div>


                <section className="mb-20">
                    <h2 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-widest">
                        Topik yang Dapat Ditanyakan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TOPICS.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between p-5 md:p-6 bg-white border border-slate-100 rounded-[24px] hover:border-red-900/20 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-red-900 shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>

                                    <div className="pr-4">
                                        <h4 className="font-black text-slate-900 text-sm md:text-base mb-1 tracking-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                <ChevronRight
                                    size={20}
                                    className="text-slate-200 group-hover:text-red-900 group-hover:translate-x-1 transition-all shrink-0"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <Carousel opts={{ align: "start", loop: true }} className="pb-10">
                    <CarouselContent className="-ml-6">
                        {BANNERS.map((item, index) => (
                            <CarouselItem key={index} className="pl-6 lg:basis-1/2 py-2">
                                <div className="group relative flex flex-col md:flex-row min-h-[400px] md:min-h-[300px] w-full overflow-hidden rounded-[32px] bg-slate-50 border border-slate-200 transition-all shadow-md">

                                    <div className="relative z-20 flex flex-1 flex-col justify-center p-10 lg:p-12 order-2 md:order-1">
                                        <h3 className="mb-4 text-2xl md:text-3xl font-black text-slate-900 tracking-tighter leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mb-8 text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>

                                        <button className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-red-900 group-hover:gap-5 transition-all">
                                            Lihat Detail <ArrowRight size={18} />
                                        </button>
                                    </div>

                                    <div className="relative h-48 md:h-auto md:w-[45%] overflow-hidden order-1 md:order-2">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-50 via-transparent to-transparent md:from-slate-50 md:via-slate-50/20 md:to-transparent" />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


            </div>
        </main>
    );
}


