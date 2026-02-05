"use client";

import React from 'react'
import {
    Calendar,
    User,
    Clock,
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const BlogDetailPage = () => {
    return (
        <div className="bg-white min-h-screen">

            <main className="container py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <article className="lg:col-span-8 space-y-8">

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-900 rounded-sm text-[10px] font-black uppercase tracking-widest">
                                Tips Kesehatan
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                                Bolehkah Sakit Tipes Minum Air Hangat? Ini Penjelasannya
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-slate-100 text-slate-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                        <User size={14} className="text-slate-400" />
                                    </div>
                                    <div className="text-[11px] leading-none">
                                        <p className="font-bold text-slate-900 uppercase tracking-tight">Tim Medis Prameka</p>
                                        <p className="mt-1">Ditinjau oleh dr. Pratama</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                                    <Calendar size={14} className="text-red-900" />
                                    <span>05 Feb 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-md overflow-hidden bg-slate-100 border border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000"
                                alt="Drinking water"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="p-6 bg-slate-50 rounded-md border-l-4 border-red-900 space-y-3">
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-red-900">Daftar Isi</p>
                            <ul className="space-y-2 text-sm font-bold text-slate-700">
                                <li className="hover:text-red-900 cursor-pointer flex items-center gap-2 leading-tight">
                                    <div className="w-1 h-1 bg-red-900 rotate-45" /> Manfaat Air Hangat Bagi Penderita Tipes
                                </li>
                                <li className="hover:text-red-900 cursor-pointer flex items-center gap-2 leading-tight">
                                    <div className="w-1 h-1 bg-red-900 rotate-45" /> Suhu Air yang Disarankan
                                </li>
                                <li className="hover:text-red-900 cursor-pointer flex items-center gap-2 leading-tight">
                                    <div className="w-1 h-1 bg-red-900 rotate-45" /> Cara Mempercepat Pemulihan Tipes
                                </li>
                            </ul>
                        </div>

                        <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900">
                            <div className='py-10'>
                                <p className="text-lg leading-relaxed font-medium text-slate-700 italic border-l-2 border-slate-200 pl-4">
                                    Tipes atau demam tifoid adalah penyakit infeksi bakteri Salmonella typhi yang menyerang saluran pencernaan. Salah satu pertanyaan yang sering diajukan pasien adalah mengenai asupan cairan yang tepat.
                                </p>

                            </div>

                            <h2>Manfaat Air Hangat untuk Pencernaan</h2>

                            <p>
                                Minum air hangat dapat membantu merelaksasi otot-otot di sekitar saluran cerna. Bagi penderita tipes, hal ini sangat membantu mengurangi rasa tidak nyaman atau kram perut yang sering muncul akibat infeksi bakteri.
                            </p>


                            <h2>Cara Mencegah Tipes Kambuh Kembali</h2>
                            <p>Menjaga kebersihan makanan dan asupan cairan adalah kunci utama. Berikut adalah langkah praktisnya:</p>
                            <ul>
                                <li>Selalu cuci tangan sebelum makan.</li>
                                <li>Hindari membeli es batu di tempat yang tidak terjamin kebersihannya.</li>
                                <li>Konsumsi makanan yang dimasak hingga matang sempurna.</li>
                            </ul>
                        </div>
                    </article>

                    <aside className="lg:col-span-4 space-y-10 sticky top-24">
                        <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm group">
                            <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww"
                                    alt="Doctor Consultation"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                            </div>

                            <div className="p-6 -mt-8 relative z-10 bg-white">
                                <h3 className="text-lg font-black text-slate-900 leading-[1.2] tracking-tighter mb-3">
                                    Konsultasikan dengan dokter kami untuk mendapatkan resep yang tepat
                                </h3>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">
                                    Dapatkan penanganan langsung dari tenaga medis profesional Klinik Prameka untuk proses pemulihan yang lebih cepat.
                                </p>

                                <Link href="/cari-dokter">
                                    <Button className="w-full bg-red-900 hover:bg-red-800 text-white h-11 rounded-md font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-red-900/10 transition-all active:scale-[0.98]">
                                        Cari Dokter
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-6 pt-4">
                            <h3 className="font-black text-slate-900 uppercase tracking-widest text-[11px] flex items-center gap-2">
                                <div className="w-4 h-[2px] bg-red-900" /> Baca Juga
                            </h3>
                            <div className="space-y-5">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="group cursor-pointer border-b border-slate-300 pb-4">
                                        <p className="text-[10px] font-black text-red-900 uppercase tracking-widest mb-1">Penyakit Dalam</p>
                                        <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-red-900 transition-colors">
                                            Kenali Gejala Demam Berdarah Sejak Dini
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    )
}

export default BlogDetailPage