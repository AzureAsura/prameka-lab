import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const newsItems = [
  {
    title: "Limitless Customization: Building Stronger Brands Through Pre-Rolled Cones",
    date: "JANUARI 23, 2026",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Why Global Brands Choose Manufacturers with International Standards",
    date: "JANUARI 6, 2026",
    image: "https://images.unsplash.com/photo-1633219664572-473fd988a44f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Celebrating 24 Years of Growth, Compliance & Global Partnership",
    date: "DESEMBER 31, 2025",
    image: "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  }
];

export default function News() {
  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden">
      <div className="container">
        
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
            Berita & Healthpedia
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Lihat berita dan pembaruan terbaru dari tim kami
          </p>
        </div>

        <div className="w-full">
          <Carousel 
            opts={{ align: "start" }} 
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {newsItems.map((news, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3"
                >
                  <div className="flex flex-col h-full group cursor-pointer">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm mb-6">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-grow space-y-3">
                      <h3 className="text-base md:text-lg font-bold text-[#0A2540] leading-snug line-clamp-3 group-hover:text-blue-700 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-[10px] md:text-xs font-bold text-red-600 tracking-widest uppercase">
                        {news.date}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
}