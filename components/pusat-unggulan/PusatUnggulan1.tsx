import Image from "next/image"
import { ChevronRight } from "lucide-react"

const PusatUnggulan1 = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="md:container md:mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch lg:h-[550px]">

                    <div className="relative w-full h-[500px] lg:h-auto lg:w-1/2 lg:order-2">
                        <Image
                            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=60"
                            alt="Dokter"
                            fill
                            className="object-cover object-top lg:object-center"
                            priority
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent lg:hidden" />

                        <div className="absolute bottom-0 left-0 w-full p-6 text-white lg:hidden">
                            <p className="text-xs font-medium opacity-80 mb-2 uppercase tracking-wider">
                                Apa itu Pusat Layanan Unggulan
                            </p>
                            <h1 className="text-2xl font-bold leading-tight mb-4">
                                Pendekatan Holistik untuk Perawatan Pasien
                            </h1>
                            <p className="text-sm opacity-90 leading-relaxed line-clamp-4">
                                Pusat Layanan Unggulan Prameka Lab menghadirkan perawatan terpadu untuk menangani berbagai kondisi medis melalui kolaborasi tim dokter multidisiplin, teknologi medis modern, dan pendekatan yang berpusat pada pasien.
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:w-1/2 flex-col justify-center py-20 pr-12 lg:order-1">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold text-slate-800 leading-[1.1] tracking-tight">
                                Pusat Layanan Unggulan <br /> Prameka Lab
                            </h1>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                                Perawatan pasien berstandar internasional, terintegrasi, komprehensif, dengan tenaga medis ahli dan fasilitas modern.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PusatUnggulan1