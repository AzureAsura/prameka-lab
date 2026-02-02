import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FeatureCard } from "./FeatureCard";
// 2. Data Dummy (Sesuai Gambar)
const features = [
  {
    category: "Ibu & Anak",
    title: "Program IVF: 200+ Kelahiran Bayi",
    description: "Hingga saat ini, Siloam Hospitals berhasil membantu 200+ proses kelahiran lewat program bayi tabung.",
    image: "https://plus.unsplash.com/premium_photo-1681967103563-871828436e1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Nefrologi",
    title: "470+ Operasi Transplantasi Ginjal",
    description: "Hingga saat ini, 260+ pasien Siloam Hospitals memiliki harapan hidup baru usai transplantasi ginjal.",
    image: "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Kardiologi",
    title: "3,7K+ Prosedur PCI per Tahun",
    description: "Selama 2022, Siloam Hospitals telah melakukan 3.700+ prosedur PCI terhadap pasien jantung.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];



export default function Showcase() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-[1.1]">
              Ketika Pengalaman <br className="hidden md:block" /> Bertemu Kepedulian
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Kami berkomitmen memberikan pelayanan kesehatan unggulan dengan mengutamakan integritas.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">

            <div className="block md:hidden">
              <Carousel 
                opts={{ align: "start", loop: false }} 
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {features.map((item, index) => (
                    <CarouselItem key={index} className="pl-4 basis-[88%]">
                      <FeatureCard item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {features.map((item, index) => (
                <div key={index} className="transition-all duration-300 hover:-translate-y-2">
                  <FeatureCard item={item} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}