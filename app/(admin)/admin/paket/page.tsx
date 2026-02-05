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
import { Pencil, Trash2, Plus, Search, Filter } from 'lucide-react'

const DATA_PAKET = [
  { id: 1, nama: "Medical Check Up Basic", harga: "Rp 750.000", kategori: "MCU", status: "Aktif" },
  { id: 2, nama: "Paket Homecare Vaksin Influenza", harga: "Rp 1.200.000", kategori: "Homecare", status: "Aktif" },
  { id: 3, nama: "Radiologi Dada (X-Ray Thorax)", harga: "Rp 450.000", kategori: "Laboratorium", status: "Non-Aktif" },
  { id: 4, nama: "Paket Ibu & Anak Premium", harga: "Rp 2.500.000", kategori: "Layanan Khusus", status: "Aktif" },
]

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 ">

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Daftar Paket Layanan</h1>
          <p className="text-sm text-slate-500 mt-1">Manajemen data paket dan harga layanan Klinik Prameka.</p>
        </div>
        <Button className="bg-red-900 hover:bg-red-800 text-white rounded-md px-5 font-medium text-sm transition-all shrink-0">
          <Plus size={18} className="mr-2" /> Tambah Paket
        </Button>
      </div>


      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari nama paket..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-900/20 focus:border-red-900 transition-all"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="hover:bg-transparent border-slate-200">
              <TableHead className="w-[60px] text-slate-900 font-semibold py-4 pl-6 text-xs uppercase tracking-wider">No</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider">Nama Paket</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-center">Kategori</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right">Harga</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-center w-[120px]">Status</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right pr-6">Opsi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DATA_PAKET.map((paket, index) => (
              <TableRow key={paket.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="pl-6 text-slate-500 text-sm">{index + 1}</TableCell>
                <TableCell className="font-medium text-slate-900 text-sm">{paket.nama}</TableCell>
                <TableCell className="text-center">
                  <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                    {paket.kategori}
                  </span>
                </TableCell>
                <TableCell className="text-right font-semibold text-slate-900 text-sm">
                  {paket.harga}
                </TableCell>
                <TableCell className="text-center">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    paket.status === 'Aktif' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {paket.status}
                  </span>
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