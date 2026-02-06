import React from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const doctors = Array(10).fill({
    name: "dr. Ade Rahmatdianto",
    specialty: "Kedokteran Umum",
    subSpecialty: "Dokter Umum",
    hospital: "Prameka Hospitals Surabaya",
    availability: "Senin - Jumat",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070",
});

export default function Page() {
    return (
        <main className="min-h-screen pb-20">
            <section className="relative w-full bg-white overflow-hidden">
                <div className="container min-h-[250px] md:min-h-[350px] flex items-center">

                    <div className="relative z-20 w-full lg:w-1/2 px-4 md:px-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-3">
                            Temukan Dokter <br className="hidden md:block" /> Spesialis Anda
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base max-w-md font-medium">
                            Atur janji temu dengan tenaga medis profesional kami sesuai waktu yang Anda inginkan.
                        </p>
                    </div>

                    <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-10">
                        <div className="relative w-full h-full">
                            <Image
                                src="https://images.unsplash.com/photo-1664902276790-90624a60ff47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvc3BpdGFsfGVufDB8fDB8fHwy"
                                alt="Doctors"
                                fill
                                className="object-cover object-right"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/40 lg:from-white lg:via-white/60 lg:to-transparent" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="container mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {doctors.map((doctor, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                            <CardContent className="p-5">
                                <div className="flex flex-col items-center text-center mb-4">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Kunjungi Rumah Sakit</p>
                                        <h3 className="font-bold text-slate-800 text-[15px] leading-tight">{doctor.name}</h3>
                                        <p className="text-xs text-gray-500 font-medium">{doctor.specialty}</p>
                                        <p className="text-[11px] text-gray-400">{doctor.subSpecialty}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 my-4" />

                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
                                        <p className="text-[11px] text-gray-500 font-medium leading-tight">
                                            {doctor.hospital}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                                        <p className="text-[11px] text-gray-500">
                                            Praktek : <span className="font-bold text-slate-800">{doctor.availability}</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full bg-red-900 hover:bg-red-900/80 text-[13px] font-bold py-5 rounded-xl">
                                    Pesan Janji Temu
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
}