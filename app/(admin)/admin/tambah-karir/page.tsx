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
import { 
  ArrowLeft, 
  Save, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock, 
  FileText 
} from 'lucide-react'
import Link from 'next/link'

const AddCareerPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-32 md:pb-12">
      <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Tambah Lowongan Baru</h1>
          <p className="text-xs md:text-sm text-slate-500">Rekrut talenta terbaik untuk Klinik Prameka.</p>
        </div>
      </div>

      <div className="space-y-6">
        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <Briefcase size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Detail Pekerjaan</h2>
          </div>
          <div className="p-6 space-y-5">

            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 text-xs">Nama Posisi / Jabatan</label>
              <Input 
                placeholder="Contoh: Perawat Pelaksana atau Staff Admin" 
                className="h-11 rounded-md border-slate-200 focus:border-red-900 focus:ring-1 focus:ring-red-900/20 text-sm" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 text-xs">Kategori</label>
                <Select>
                  <SelectTrigger className="w-full h-11 rounded-md border-slate-200 bg-slate-50/30 text-sm">
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medis">Tenaga Medis</SelectItem>
                    <SelectItem value="non-medis">Non-Medis / Umum</SelectItem>
                    <SelectItem value="manajemen">Manajemen</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 text-xs flex items-center gap-2">
                  <Clock size={14} /> Tipe Pekerjaan
                </label>
                <Select>
                  <SelectTrigger className="w-full h-11 rounded-md border-slate-200 bg-slate-50/30 text-sm">
                    <SelectValue placeholder="Full-time / Part-time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time</SelectItem>
                    <SelectItem value="parttime">Part-time</SelectItem>
                    <SelectItem value="internship">Magang / Internship</SelectItem>
                    <SelectItem value="contract">Kontrak</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 text-xs flex items-center gap-2">
                  <MapPin size={14} /> Lokasi Penempatan
                </label>
                <Input 
                  placeholder="Contoh: Denpasar, Bali" 
                  className="h-11 rounded-md border-slate-200 text-sm bg-slate-50/30" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 text-xs flex items-center gap-2">
                  <Calendar size={14} /> Batas Pendaftaran
                </label>
                <Input 
                  type="date" 
                  className="h-11 rounded-md border-slate-200 text-sm bg-slate-50/30" 
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <FileText size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Isi Lowongan (Deskripsi & Kualifikasi)</h2>
          </div>
          <div className="p-6">
            <Textarea 
              placeholder="Tuliskan tanggung jawab pekerjaan dan kualifikasi yang dibutuhkan secara detail..." 
              className="min-h-[300px] rounded-md border-slate-200 text-sm leading-relaxed focus:border-red-900 focus:ring-1 focus:ring-red-900/20 transition-all" 
            />
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <Button className="bg-red-900 hover:bg-red-800 text-white px-12 h-12 font-semibold rounded-md transition-all shadow-lg shadow-red-900/10 active:scale-95">
            <Save size={18} className="mr-2" /> Simpan Lowongan
          </Button>
        </div>
      </div>

     
    </div>
  )
}

export default AddCareerPage