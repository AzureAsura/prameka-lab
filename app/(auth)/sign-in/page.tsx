"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LogIn, ShieldCheck } from 'lucide-react'

const page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-[400px] space-y-8">
        
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-red-900 p-3 rounded-md shadow-lg shadow-red-900/20">
              <ShieldCheck size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase mt-4">
            Prameka<span className="text-red-900"> Admin</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Silahkan masuk ke sistem
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-md p-8 shadow-sm space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider ml-1">
                Alamat Email
              </label>
              <Input 
                type="email" 
                placeholder="" 
                className="h-12 rounded-md border-slate-200 focus:border-red-900 focus:ring-1 focus:ring-red-900/20 transition-all font-medium text-sm"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                  Kata Sandi
                </label>
              </div>
              <Input 
                type="password" 
                placeholder="" 
                className="h-12 rounded-md border-slate-200 focus:border-red-900 focus:ring-1 focus:ring-red-900/20 transition-all font-medium text-sm"
              />
            </div>
          </div>

          <Button className="w-full bg-red-900 hover:bg-red-800 text-white h-12 rounded-md font-bold text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-red-900/10 transition-all active:scale-[0.98]">
            Masuk Sekarang <LogIn size={16} className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-[10px] text-slate-400 font-medium tracking-tight">
          &copy; 2026 Klinik Prameka Lab. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default page