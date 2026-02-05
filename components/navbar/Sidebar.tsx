"use client";
import React from 'react';
import { 
  Package, 
  Briefcase, 
  BookOpen, 
  PlusCircle, 
  LogOut, 
  LayoutDashboard, 
  Activity 
} from 'lucide-react';
import Link from 'next/link';

const NavLink = ({ href, label, icon: Icon }: any) => (
  <Link href={href} className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-red-900 rounded-md transition-all font-bold text-[12px] uppercase tracking-widest group">
    <Icon size={17} className="text-slate-400 group-hover:text-red-900" />
    {label}
  </Link>
);

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-16 w-72 h-[calc(100vh-64px)] bg-white border-r border-slate-300 p-6 overflow-y-auto">
      <div className="flex-1 space-y-8">
        <div>
          <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-[10px]">Utama</p>
          <NavLink href="/admin" label="Dashboard" icon={LayoutDashboard} />
        </div>

        <div>
          <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-[10px]">Aksi</p>
          <NavLink href="/admin/tambah-paket" label="Tambah Paket" icon={PlusCircle} />
          <NavLink href="/admin/tambah-karir" label="Tambah Karir" icon={Briefcase} />
          <NavLink href="/admin/tambah-blog" label="Tambah Blog" icon={PlusCircle} />
        </div>

        <div>
          <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 text-[10px]">Data</p>
          <NavLink href="/admin/paket" label="Daftar Paket" icon={Package} />
          <NavLink href="/admin/karir" label="Daftar Karir" icon={Briefcase} />
          <NavLink href="/admin/blog" label="Daftar Blog" icon={BookOpen} />
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-300">
        <button className="flex items-center justify-between w-full px-4 py-3 text-red-900 hover:bg-red-50 rounded-md transition-all font-bold text-[12px] uppercase tracking-widest group">
          Keluar
          <LogOut size={17} className="text-red-900 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </aside>
  );
};