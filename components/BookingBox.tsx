"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Phone, Mail, ShoppingBag } from 'lucide-react'

function BookingBox() {
    const packageData = {
        name: "Paket MCU Silver (Demam Tifoid)",
        price: "Rp1.900.000"
    };

    return (
        <div className="bg-white border border-slate-200 rounded-md overflow-hidden shadow-sm">
            <div className="p-8 space-y-6">
                <h3 className="text-lg font-black text-slate-900 tracking-tighter uppercase">
                    Periksa Ketersediaan & Harga
                </h3>

                <div className="space-y-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        Jenis Layanan
                    </p>
                    <div className="flex items-center gap-4 p-4 rounded-md border-2 border-red-900 bg-red-50/30 transition-all">
                        <div className="w-5 h-5 rounded-full border-4 border-red-900 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-slate-900 leading-none">Datang ke Klinik</p>
                            <p className="text-[10px] text-slate-500 mt-1">Kunjungi klinik kami untuk menjalani tes secara intensif.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-50/80 px-8 pt-4 pb-7 border-t border-slate-200">
                <div className="flex items-end justify-between mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-1">
                        Total Harga
                    </span>
                    <span className="text-2xl font-black tracking-tighter text-slate-900">
                        {packageData.price}
                    </span>
                </div>
                
                <div className="space-y-3">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="w-full py-4 bg-red-900 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-md hover:bg-red-950 transition-all shadow-lg shadow-red-900/10 active:scale-[0.98]">
                                Beli Sekarang
                            </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[500px] w-[95%] rounded-md border-slate-200 p-0 overflow-hidden">
                            <DialogHeader className="p-6 bg-red-900 text-white">
                                <DialogTitle className="text-lg font-black uppercase tracking-tighter flex items-center gap-2">
                                    <ShoppingBag size={20} /> Form Checkout
                                </DialogTitle>
                                <p className="text-[10px] text-red-100 font-bold uppercase tracking-widest opacity-80 mt-1">
                                    Lengkapi data kunjungan Anda
                                </p>
                            </DialogHeader>

                            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-md">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Paket yang dipilih</p>
                                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{packageData.name}</h4>
                                    <p className="text-red-900 font-black text-sm mt-1">{packageData.price}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                            <User size={14} className="text-red-900" /> Nama Lengkap Pasien
                                        </label>
                                        <Input placeholder="Sesuai KTP" className="h-11 rounded-md border-slate-200 focus:border-red-900 text-sm" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <Phone size={14} className="text-red-900" /> No. WhatsApp
                                            </label>
                                            <Input placeholder="0812..." className="h-11 rounded-md border-slate-200 focus:border-red-900 text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <Mail size={14} className="text-red-900" /> Alamat Email
                                            </label>
                                            <Input type="email" placeholder="contoh@mail.com" className="h-11 rounded-md border-slate-200 focus:border-red-900 text-sm" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <Calendar size={14} className="text-red-900" /> Tanggal Kunjungan
                                            </label>
                                            <Input type="date" className="h-11 rounded-md border-slate-200 focus:border-red-900 text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <Clock size={14} className="text-red-900" /> Jam Kunjungan
                                            </label>
                                            <Input type="time" className="h-11 rounded-md border-slate-200 focus:border-red-900 text-sm" />
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full bg-red-900 hover:bg-red-800 text-white h-12 rounded-md font-black uppercase tracking-[0.2em] text-[11px] shadow-lg shadow-red-900/10">
                                    Konfirmasi & Bayar Sekarang
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

export default BookingBox;