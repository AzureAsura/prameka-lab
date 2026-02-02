import React from "react";
import { ArrowRight, ClipboardList, Microscope, Radio } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";


const solutions = [
    {
        count: "250+",
        title: "Spesialisasi & Subspesialisasi",
        icon: ClipboardList,
    },
    {
        count: "300+",
        title: "Tes Laboratorium",
        icon: Microscope,
    },
    {
        count: "200+",
        title: "Pemeriksaan Radiologi",
        icon: Radio,
    },
];

export default function Layanan() {
    return (
        <section className="w-full bg-gray-100 py-12">

            <div className="container flex flex-col lg:flex-row gap-10 lg:gap-32">

                <div className="lg:w-1/4">
                    <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wide">
                        Layanan Medis Prameka
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                        Solusi Kesehatan yang Menyeluruh
                    </h2>
                </div>

                <div className="lg:w-2/3 w-full">

                    <div className="md:hidden w-full overflow-visible">
                        <Carousel opts={{ align: "start" }} className="w-full">
                            <CarouselContent className="-ml-4">
                                {solutions.map((item, index) => (
                                    <CarouselItem key={index} className="pl-4 basis-[85%]">
                                        <Card className="bg-red-900 border-none rounded-[2rem]">
                                            <CardContent className=" flex flex-col justify-between h-full text-white relative">
                                                <item.icon className="w-16 h-16 mb-6 opacity-90" strokeWidth={1} />
                                                <h3 className="text-5xl font-bold mb-2">{item.count}</h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-xl font-medium leading-snug max-w-[200px]">
                                                        {item.title}
                                                    </p>
                                                    <div className=" w-12 h-12 rounded-full border border-dotted border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                                                        <ArrowRight className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <div className="hidden md:grid md:grid-cols-3 gap-6 ">
                        {solutions.map((item, index) => (
                            <Card key={index} className="bg-red-900 border-none rounded-[2rem] transition-all hover:brightness-110">
                                <CardContent className=" flex flex-col justify-between h-full text-white relative">
                                    <item.icon className="w-16 h-16 mb-6 opacity-90" strokeWidth={1} />
                                    <h3 className="text-4xl font-bold mb-2">{item.count}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-md font-medium leading-snug max-w-[150px]">
                                            {item.title}
                                        </p>
                                        <div className="w-12 h-12 rounded-full border border-dotted border-white/60 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}