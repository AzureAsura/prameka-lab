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
import { Pencil, Trash2, Plus, Search, MapPin, Clock } from 'lucide-react'

const DATA_KARIR = [
  { 
    id: 1, 
    nama: "Perawat Homecare", 
    lokasi: "Denpasar, Bali", 
    kategori: "Medis", 
    deadline: "20 Feb 2026" 
  },
  { 
    id: 2, 
    nama: "Staff Administrasi Klinik", 
    lokasi: "Badung, Bali", 
    kategori: "Non-Medis", 
    deadline: "15 Feb 2026" 
  },
  { 
    id: 3, 
    nama: "Dokter Umum (Part-time)", 
    lokasi: "Denpasar, Bali", 
    kategori: "Medis", 
    deadline: "28 Feb 2026" 
  },
]

const CareerListPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Manajemen Karir</h1>
          <p className="text-sm text-slate-500 mt-1">Kelola lowongan pekerjaan dan rekrutmen Klinik Prameka.</p>
        </div>
        <Button className="bg-red-900 hover:bg-red-800 text-white rounded-md px-5 font-medium text-sm transition-all shrink-0">
          <Plus size={18} className="mr-2" /> Tambah Lowongan
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari posisi pekerjaan..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-900/20 focus:border-red-900 transition-all"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="hover:bg-transparent border-slate-200">
              <TableHead className="w-[60px] text-slate-900 font-semibold py-4 pl-6 text-xs uppercase tracking-wider">No</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider">Posisi Pekerjaan</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider">Lokasi</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-center">Kategori</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right w-[180px]">Batas Pendaftaran</TableHead>
              <TableHead className="text-slate-900 font-semibold text-xs uppercase tracking-wider text-right pr-6">Opsi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DATA_KARIR.map((karir, index) => (
              <TableRow key={karir.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                <TableCell className="pl-6 text-slate-500 text-sm">{index + 1}</TableCell>
                <TableCell className="font-medium text-slate-900 text-sm">
                  {karir.nama}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm italic">
                    <MapPin size={14} className="text-slate-300 shrink-0" />
                    <span className="truncate max-w-[150px]">{karir.lokasi}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded border ${
                    karir.kategori === 'Medis' 
                    ? 'bg-red-50 text-red-800 border-red-100' 
                    : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}>
                    {karir.kategori}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2 text-sm font-semibold text-slate-700">
                    <Clock size={14} className="text-slate-400" />
                    {karir.deadline}
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

export default CareerListPage