"use client";
import React, { useState } from 'react';
import { 
  Menu, X, Plus, List, 
  LayoutDashboard, Activity, ChevronRight, LogOut 
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link 
      href={href} 
      onClick={() => setIsOpen(false)}
      className="flex items-center justify-between py-3 px-4 hover:bg-slate-50 rounded-md transition-all group"
    >
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-red-900">
        {label}
      </span>
      <ChevronRight size={14} className="text-slate-300 group-hover:text-red-900" />
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-[60] bg-white border-b border-slate-300 h-16 px-6 flex items-center justify-between">
        <Link href='/admin' className="text-xl font-black tracking-tighter text-red-900 uppercase">
          Prameka<span className="text-slate-900 text-sm italic ml-1 font-bold">Admin</span>
        </Link>

        <button onClick={toggleMenu} className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-md border border-slate-100">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>


        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-2xl lg:hidden flex flex-col overflow-y-auto max-h-[calc(100vh-64px)] animate-in slide-in-from-right duration-300">
            <div className="p-6 space-y-4">
              
              <div className="border-b border-slate-100 pb-2">
                <NavLink href="/admin" label="Dashboard Overview" />
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="hover:no-underline py-3 px-1 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <Plus size={16} className="text-red-900" /> Input Data Baru
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-1">
                    <NavLink href="/admin/tambah-paket" label="Tambah Paket" />
                    <NavLink href="/admin/tambah-blog" label="Tambah Blog" />
                    <NavLink href="/admin/tambah-karir" label="Tambah Karir" />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="hover:no-underline py-3 px-1 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <List size={16} className="text-red-900" /> Database List
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 space-y-1">
                    <NavLink href="/admin/paket" label="Daftar Paket" />
                    <NavLink href="/admin/blog" label="Daftar Blog" />
                    <NavLink href="/admin/karir" label="Daftar Karir" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="pt-4 border-t border-slate-100">
                <Button 
                  variant="outline" 
                  className="w-full justify-between h-12 border-red-900/20 text-red-900 hover:bg-red-900 hover:text-white rounded-md font-bold text-[11px] uppercase tracking-[0.2em] transition-all"
                >
                  Keluar <LogOut size={16} />
                </Button>
              </div>

            </div>
          </div>
        )}
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-50 lg:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};