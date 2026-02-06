import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Tentang Kami",
    links: ["Overview", "History", "Pencapaian", "Hubungan Investor", "Program CSR"],
  },
  {
    title: "Untuk Pasien",
    links: ["Pusat Unggulan", "Telekonsultasi", "FAQ"],
  },
  {
    title: "Untuk Perusahaan",
    links: ["Laporan Keuangan", "Laporan Tahunan", "Corporate Governance"],
  },
  {
    title: "Untuk Profesional",
    links: ["Pusat Pelatihan", "Pusat Unggulan", "Karir"],
  },
];

export default function Footer() {
  return (
    <div>
      {/* <div className="container mx-auto  py-10">
        <section className="pt-5 border-t border-slate-200">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8">Afiliasi Kami</h2>
          <div className="flex flex-wrap items-center gap-12 opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" /> 
            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
            <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
          </div>
          <p className="mt-10 text-[11px] leading-relaxed max-w-4xl italic">
            PT Prameka Internasional Hospitals merupakan jaringan klinik dan laboratorium kesehatan yang berkomitmen memberikan pelayanan medis berkualitas dan berstandar internasional melalui berbagai cabang yang tersebar di wilayah strategis.
          </p>
        </section>
      </div>
 */}

      <footer className="w-full bg-red-900 text-white pt-16 pb-8">
        <div className="container ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-lg font-bold">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 lg:col-span-1 space-y-6">
              <h4 className="text-lg font-bold">Ayo Terhubung dengan Kami</h4>
              <div className="flex gap-5">
                <Link href="#" className="hover:text-red-300 transition-colors">
                  <MessageCircle size={24} />
                </Link>
                <Link href="#" className="hover:text-red-300 transition-colors">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="hover:text-red-300 transition-colors">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="hover:text-red-300 transition-colors">
                  <Youtube size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm opacity-90">
            <p>© Copyright 2026, PT Prameka Lab.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:underline">Syarat dan Ketentuan</Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:underline">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>

      </footer>


    </div>
  );
}