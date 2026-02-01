import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const appointmentSteps = [
  {
    title: "Download Aplikasi MySiloam",
    linkText: "Pelajari Aplikasi MySiloam",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Kelola Janji Temu",
    linkText: "Kelola Janji Temu",
    image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function Appointment() {
  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 pt-4">
            <p className="text-gray-400 text-xs md:text-sm font-semibold mb-2 uppercase tracking-wide">
              Buat Janji Temu
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
              Sudah buat janji temu?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
              Hal yang bisa Anda lakukan agar kunjungan jadi lebih mudah.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
              <CarouselContent className="-ml-4 md:-ml-6">
                {appointmentSteps.map((step, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 md:pl-6 basis-[88%] sm:basis-1/2"
                  >
                    <div className="group relative h-[350px] md:h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-0 p-6 md:p-8 w-full text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs md:text-sm font-bold group/btn">
                          <span>{step.linkText}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}