"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowLeft, 
  Save, 
  FileText, 
  Upload, 
  UserCircle, 
  ListOrdered,
  X
} from 'lucide-react'
import Link from 'next/link'

const AddBlogPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-32 md:pb-12">

      <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Tulis Artikel Baru</h1>
          <p className="text-xs md:text-sm text-slate-500">Unggah edukasi kesehatan terbaru ke sistem.</p>
        </div>
      </div>

      <div className="space-y-6">

        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <FileText size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Informasi & Media</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1">Judul Artikel</label>
                  <Input placeholder="Judul artikel..." className="h-11 rounded-md border-slate-200 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-2">
                    <UserCircle size={14} /> Penulis
                  </label>
                  <Input placeholder="Nama author..." className="h-11 rounded-md border-slate-200 text-sm" />
                </div>
              </div>


              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider ml-1 flex items-center gap-2">
                  <Upload size={14} /> Gambar Utama Artikel
                </label>
                <div className="relative group">
                  <label className="flex flex-col items-center justify-center w-full h-[108px] border-2 border-dashed border-slate-200 rounded-md bg-slate-50/50 cursor-pointer hover:border-red-900/30 hover:bg-red-50/30 transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-6 h-6 mb-2 text-slate-400 group-hover:text-red-900" />
                      <p className="text-[10px] text-slate-500 group-hover:text-red-900 font-medium">Klik untuk upload atau drag & drop</p>
                      <p className="text-[9px] text-slate-400 mt-1 uppercase">PNG, JPG up to 5MB</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <ListOrdered size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Table of Content (Daftar Isi)</h2>
          </div>
          <div className="p-6">
            <Textarea 
              placeholder="Gunakan poin-poin singkat untuk daftar isi..." 
              className="min-h-[100px] rounded-md border-slate-200 text-sm" 
            />
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-2">
            <FileText size={16} className="text-red-900" />
            <h2 className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Isi Artikel</h2>
          </div>
          <div className="p-6">
            <Textarea 
              placeholder="Tuliskan konten artikel secara detail..." 
              className="min-h-[400px] rounded-md border-slate-200 text-sm leading-relaxed focus:border-red-900 transition-all" 
            />
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <Button className="bg-red-900 hover:bg-red-800 text-white px-12 h-12 font-semibold rounded-md transition-all shadow-lg shadow-red-900/10">
            <Save size={18} className="mr-2" /> Publikasikan
          </Button>
        </div>
      </div>

    </div>
  )
}

export default AddBlogPage