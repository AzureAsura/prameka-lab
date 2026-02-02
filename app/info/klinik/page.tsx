import React from "react";
import { MapPin, Clock, Phone, PlusSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const clinicData = [
  {
    name: "Prameka Lab Canggu",
    address: "Jl. Raya Canggu no. 168, Kerobokan, Kuta Utara, Badung, Bali 80361",
    hours: "Senin – Minggu: 09.00 – 21.00 WITA",
    phone: "(0361) 934 8888 / 0811 3991 134",
    faskes: "-",
  },
  {
    name: "Prameka Lab Jakabaring",
    address: "Lippo Plaza Jakabaring Lt GF No. 2, 5, dan 6 Jl. Gubernur Haji A Bastari",
    hours: "Senin – Jumat: 09:00 - 17:00 WIB Sabtu: 08:00 - 14:00 WIB",
    phone: "(0711) 5743 741",
    faskes: "0090B099",
  },
  {
    name: "Prameka Lab Ubud",
    address: "Jl. Raya Sanggingan No.21, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80561",
    hours: "Senin – Minggu: 09.00 AM – 21.00 PM WITA",
    phone: "(0361) 2091 030 / 0811 3995 52",
    faskes: "-",
  }
];

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container py-6">
        <p className="text-sm mb-4">
          Temukan berbagai layanan kesehatan berkualitas yang tersebar di seluruh Indonesia melalui daftar Klinik Prameka Lab.
        </p>
      </section>

      <section className="container mb-12">
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.6094974918406!2d115.1976742!3d-8.6334347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23ff08d9f45ef%3A0x84cf3639729cd423!2sPRAMEKA%20LABORATORIUM%20KLINIK!5e0!3m2!1sid!2sid!4v1770022690819!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      


      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.map((clinic, index) => (
            <Card key={index} className="border-none shadow-sm bg-red-100 rounded-xl hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-red-800 leading-tight">
                  {clinic.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <p className="text-[13px]  leading-snug">
                      {clinic.address}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <p className="text-[13px]  leading-snug">
                      {clinic.hours}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <p className="text-[13px]  leading-snug">
                      {clinic.phone}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <PlusSquare className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                    <p className="text-[13px]  leading-snug">
                      Kode Faskes: <span className="font-semibold">{clinic.faskes}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}