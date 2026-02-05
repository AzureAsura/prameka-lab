import React from "react";
import { ArrowLeft, MapPin, Clock } from "lucide-react";

export default function CareerDetailCentered() {
  return (
    <main className="min-h-screen bg-white pb-16">

      <div className="max-w-4xl mx-auto px-4 md:px-0">
        
        <nav className="pt-5 lg:pt-12">
          <a 
            href="/info/karir" 
            className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-[#991b1b] transition-colors"
          >
            <ArrowLeft size={16} />
            KEMBALI KE KARIR
          </a>
        </nav>

        <header className="mt-6 lg:mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-3 lg:mb-6">
            <span className="px-3 py-1 bg-slate-50 text-[#991b1b] text-[11px] font-bold rounded-full border border-slate-100 uppercase">
              Full-time
            </span>
            <span className="px-3 py-1 bg-slate-50 text-slate-500 text-[11px] font-bold rounded-full border border-slate-100 uppercase">
              Tenaga Medis
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] mb-8">
            General Practitioner <br /> (Dokter Umum)
          </h1>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-8 text-slate-500 text-sm font-medium border-b border-slate-100 pb-10">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#991b1b]" />
              <span>Ubud / Canggu, Bali</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#991b1b]" />
              <span>Pendaftaran ditutup 28 Feb 2026</span>
            </div>
          </div>
        </header>

        <article className="mt-12 space-y-12">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Tentang Pekerjaan</h2>
            <p className="text-slate-600 leading-relaxed">
              Kami mencari Dokter Umum yang berdedikasi untuk bergabung dengan tim medis kami di Klinik Prameka. 
              Anda akan bertanggung jawab untuk memberikan konsultasi medis primer, melakukan pemeriksaan fisik, 
              dan memberikan perawatan berkualitas tinggi kepada pasien lokal maupun internasional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Kualifikasi</h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600">
              <li>Lulusan Pendidikan Profesi Dokter dari Universitas terakreditasi.</li>
              <li>Memiliki STR (Surat Tanda Registrasi) yang masih aktif.</li>
              <li>Memiliki sertifikat ACLS / ATLS yang masih berlaku.</li>
              <li>Mampu berkomunikasi dengan baik dalam Bahasa Inggris (verbal & tertulis).</li>
            </ul>
          </section>

          <section className="pt-12 border-t border-slate-100 text-center">
            <p className="text-slate-500 mb-6 font-medium">Tertarik bergabung dengan tim kami?</p>
            <a 
              href=""
              className="inline-block bg-red-900/80 text-white px-12 py-4 rounded-xl font-bold hover:shadow-2xl transition-all active:scale-95"
            >
              Lamar Posisi Ini
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}