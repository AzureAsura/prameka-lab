import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const stats = [
    { value: "41+", label: "Rumah Sakit di Seluruh Indonesia" },
    { value: "12.5K+", label: "Tenaga Medis" },
    { value: "8.59M+", label: "Pasien Dilayani" },
    { value: "400+", label: "Mitra Asuransi" },
]


const HeroCarousel = () => {
    return (
        <div className="bg-gray-100">
                <div className="container md:py-10">
                  <div className="hidden md:grid md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-5">
                        <span className="text-5xl font-black text-red-900 tracking-tighter">{stat.value}</span>
                        <p className="text-sm font-medium leading-tight max-w-[140px]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
        
                  <div className="md:hidden">
                    <Carousel opts={{ align: "start" }}>
                      <CarouselContent className="-ml-2">
                        {stats.map((stat, idx) => (
                          <CarouselItem key={idx} className="pl-2 basis-[75%]">
                            <div className="flex items-center gap-4 px-4 py-7 rounded-xl">
                              <span className="text-4xl font-black text-red-900 tracking-tighter">{stat.value}</span>
                              <p className="text-[11px] font-semibold leading-tight">{stat.label}</p>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </div>
              </div>
    )
}

export default HeroCarousel