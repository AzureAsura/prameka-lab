import React from "react";
import {
    ChevronRight,
    Clock,
    FileText,
    Plus,
} from "lucide-react";
import BookingBox from "@/components/BookingBox";

const placeholder = [
    { title: "Fungsi Ginjal (Uric Acid, Creatinine)", desc: "Pemeriksaan kadar asam urat dan fungsi penyaringan ginjal dalam darah." },
    { title: "Skrining Diabetes", desc: "Pemeriksaan gula darah puasa untuk mendeteksi gejala diabetes melitus." }
]

export default function page() {
    return (
        <main className="min-h-screen pb-20">

            <nav className="border-b border-slate-100 hidden lg:block">
                <div className="container py-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <a href="/" className="hover:text-red-900">Beranda</a>
                    <ChevronRight size={12} />
                    <a href="/layanan/mcu" className="hover:text-red-900">Medical Check Up</a>
                    <ChevronRight size={12} />
                    <span className="text-slate-900">Paket Prameka Silver</span>
                </div>
            </nav>

            <div className="container pt-7">
                <div className="flex flex-col lg:flex-row gap-12">

                    <section className="flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none">
                                    Paket Cek Kesehatan Umum - <span className="text-[#7f1d1d]">Prameka Plus</span>
                                </h1>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                    Skrining Umum • Pria & Wanita
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-500 leading-relaxed mb-5 max-w-3xl">
                            Pemeriksaan ini bertujuan untuk mengevaluasi kondisi kesehatan secara menyeluruh...
                        </p>
                        
                        <div className="lg:hidden mb-10">
                            <BookingBox />
                        </div>


                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                Yang termasuk dalam produk ini
                            </h3>

                            {placeholder.map((item, i) => (
                                <div key={i} className="border max-w-[600px] border-slate-300 rounded-2xl overflow-hidden shadow-sm ">
                                    <button className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors">
                                        <span className="font-bold text-slate-800 text-sm uppercase tracking-wide">{item.title}</span>
                                        <Plus size={18} className="text-red-900" />
                                    </button>
                                    <div className="px-6 pb-5">
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 grid md:grid-cols-2 gap-10 border-t border-slate-200 pt-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-red-900">
                                    <Clock size={20} />
                                    <h4 className="font-bold uppercase text-xs tracking-widest">Persiapan</h4>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-500 italic">
                                    <li>• Puasa 10-12 jam sebelum pengambilan sampel darah.</li>
                                    <li>• Hanya diperbolehkan minum air putih selama berpuasa.</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-red-900">
                                    <FileText size={20} />
                                    <h4 className="font-bold uppercase text-xs tracking-widest">Prosedur</h4>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed italic">
                                    Pemeriksaan dilakukan dengan pengambilan sampel darah di laboratorium dan pengumpulan sampel urin.
                                </p>
                            </div>
                        </div>
                    </section>

                    <aside className="hidden lg:block w-full lg:w-[380px] sticky top-32 self-start">
                        <BookingBox />
                    </aside>

                </div>
            </div>





        </main>
    );
}
