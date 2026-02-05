import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Play } from "lucide-react";

const jobs = [
  { title: "General Practitioner (Dokter Umum)", loc: "Ubud / Canggu", slug: "gp-doctor", cat: "Tenaga Medis" },
  { title: "Registered Nurse (ER Specialist)", loc: "Denpasar", slug: "senior-nurse", cat: "Tenaga Medis" },
  { title: "Clinic Front Office", loc: "Canggu", slug: "front-office", cat: "Administrasi & Support" }
];

export default function CareerMinimalist() {
  return (
    <main className="min-h-screen bg-white ">

      <section className="px-4 py-8 md:py-16 border-b border-slate-100">
        <div className="max-w-2xl mx-auto text-center">

          <span className="text-[10px] font-bold tracking-[0.25em] text-[#7f1d1d] uppercase block mb-2 md:mb-4">
            Career Opportunities
          </span>


          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-5 tracking-tight">
            Bergabung dengan Tim Prameka Bali
          </h1>


          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Kami mencari individu yang berdedikasi untuk memberikan layanan kesehatan terbaik.
            Temukan posisi yang sesuai dengan keahlian dan minat Anda di bawah ini.
          </p>

          <div className="mt-4 h-1 w-12 bg-[#7f1d1d] mx-auto rounded-full" />
        </div>
      </section>


      <section className="">
        <div className="container">
          <div className="relative aspect-video lg:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
              alt="Team"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#7f1d1d]">Filosofi Kami</h2>
            <p className="text-2xl font-semibold leading-snug">
              Integritas dalam pelayanan, profesionalisme dalam tindakan, dan kasih sayang dalam setiap interaksi.
            </p>
          </div>
          <div className="text-slate-500 space-y-3 md:space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              Di Prameka, kami percaya bahwa lingkungan kerja yang sehat akan menghasilkan pelayanan yang luar biasa. Kami memberikan fleksibilitas, asuransi penuh, dan jenjang karir yang jelas bagi setiap staf medis.
            </p>
            <div className="pt-4 border-t border-slate-200">
              <span className="font-bold italic">"We don't just treat patients, we care for people."</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Open Positions</h2>
            <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-medium">Join our healthcare family</p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {["Tenaga Medis", "Administrasi & Support"].map((category) => (
              <div key={category}>
                <h3 className="text-[11px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6 pl-2">
                  {category}
                </h3>
                <div className="border-t border-slate-200">
                  {jobs.filter(j => j.cat === category).map((job, i) => (
                    <a
                      href={`/info/karir/${job.slug}`}
                      key={i}
                      className="flex items-center justify-between py-6 md:py-8 border-b border-slate-100 group px-2 hover:bg-red-50/30 transition-all"
                    >
                      <div className="pr-4">
                        <h4 className="text-lg md:text-xl font-bold group-hover:text-red-900 transition-colors leading-tight">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-2 text-slate-500">
                          <MapPin size={14} className="shrink-0" />
                          <span className="text-xs md:text-sm font-medium">{job.loc}</span>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-slate-300 group-hover:text-red-900 shrink-0 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}