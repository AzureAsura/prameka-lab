"use client";

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Plus, Search, CalendarDays } from 'lucide-react'

const DATA_BLOG = [
  { 
    id: 1, 
    gambar: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=150", 
    judul: "Pentingnya Menjaga Kesehatan Jantung di Usia Muda", 
    createdAt: "12 Jan 2026" 
  },
  { 
    id: 2, 
    gambar: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=150", 
    judul: "Panduan Lengkap Vaksinasi Influenza bagi Lansia", 
    createdAt: "05 Feb 2026" 
  },
  { 
    id: 3, 
    gambar: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=150", 
    judul: "Mengenal Layanan Homecare Klinik Prameka", 
    createdAt: "28 Jan 2026" 
  },
]

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 ">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Daftar Artikel Blog</h1>
          <p className="text-sm text-slate-500 mt-1">Kelola publikasi artikel dan edukasi kesehatan.</p>
        </div>
        <Button className="bg-red-900 hover:bg-red-800 text-white rounded-md px-5 font-medium text-sm transition-all shrink-0">
          <Plus size={18} className="mr-2" /> Tulis Artikel
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari judul artikel..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-900/20 focus:border-red-900 transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="hover:bg-transparent border-slate-200">
              <TableHead className="w-[60px] text-slate-900 font-semibold py-4 pl-6 text-xs uppercase tracking-wider">No</TableHead>
              <TableHead className="w-[100px] text-slate-900 font-semibold text-xs uppercase tracking-wider">Gambar</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider">Judul Artikel</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right w-[150px]">Tanggal Dibuat</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right pr-6">Opsi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DATA_BLOG.map((blog, index) => (
              <TableRow key={blog.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="pl-6 text-slate-500 text-sm">{index + 1}</TableCell>
                <TableCell>
                  <div className="w-16 h-10 overflow-hidden rounded bg-slate-100 border border-slate-200">
                    <img 
                      src={blog.gambar} 
                      alt="thumbnail" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium text-slate-900 text-sm">
                  <span className="line-clamp-1">{blog.judul}</span>
                </TableCell>
                <TableCell className="text-right text-slate-500 text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <CalendarDays size={14} className="text-slate-300" />
                    {blog.createdAt}
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-900 hover:bg-red-50">
                      <Pencil size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50">
                      <Trash2 size={15} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default page