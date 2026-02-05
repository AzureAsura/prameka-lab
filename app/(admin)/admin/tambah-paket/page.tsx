"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { ArrowLeft, Save, Info, ClipboardList, ShieldAlert, PackageCheck, Layers } from 'lucide-react'

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-32 md:pb-12">

      <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Tambah Paket Baru</h1>
          <p className="text-xs md:text-sm text-slate-500">Input data layanan kesehatan Klinik Prameka.</p>
        </div>
      </div>

      <div className="space-y-6">

        <section className="bg-white border border-slate-200 rounded-md shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <Info size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Informasi Utama</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Nama Paket</label>
              <Input placeholder="Contoh: Paket MCU Silver" className="rounded-md border-slate-200 focus:border-red-900 transition-all h-10 text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Kategori</label>
                <Select>
                  <SelectTrigger className="w-full rounded-md border-slate-200 h-10 text-sm">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mcu">Medical Check Up</SelectItem>
                    <SelectItem value="vaksin">Vaksinasi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Harga (IDR)</label>
                <Input type="number" placeholder="750000" className="rounded-md border-slate-200 h-10 text-sm" />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Gender</label>
                <Select>
                  <SelectTrigger className="w-full rounded-md border-slate-200 h-10 text-sm">
                    <SelectValue placeholder="Semua" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua</SelectItem>
                    <SelectItem value="male">Laki-laki</SelectItem>
                    <SelectItem value="female">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Umur</label>
                <Input placeholder="17-50 Thn" className="rounded-md border-slate-200 h-10 text-sm" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Penjelasan Singkat</label>
              <Textarea placeholder="Tuliskan deskripsi umum..." className="min-h-[80px] rounded-md border-slate-200 text-sm" />
            </div>
          </div>
        </section>

        {/* Section 2: Prosedur & Termasuk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <ClipboardList size={16} className="text-red-900" />
              <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Persiapan & Prosedur</h2>
            </div>
            <div className="p-6">
              <Textarea placeholder="Contoh: Puasa 10 jam..." className="min-h-[120px] rounded-md border-slate-200 text-sm" />
            </div>
          </section>

          <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
              <PackageCheck size={16} className="text-red-900" />
              <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Isi Dalam Paket</h2>
            </div>
            <div className="p-6">
              <Textarea placeholder="Contoh: Tes Darah, Rontgen..." className="min-h-[120px] rounded-md border-slate-200 text-sm" />
            </div>
          </section>
        </div>

        {/* Section 3: S&K */}
        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <ShieldAlert size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Syarat & Ketentuan</h2>
          </div>
          <div className="p-6">
            <Textarea placeholder="Aturan pembatalan dan masa berlaku..." className="min-h-[120px] rounded-md border-slate-200 text-sm" />
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <Button className="bg-red-900 hover:bg-red-800 text-white px-10 h-12 font-semibold rounded-md transition-all">
            <Save size={18} className="mr-2" /> Simpan Paket Layanan
          </Button>
        </div>
      </div>

    </div>
  )
}

export default page