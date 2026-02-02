import { ArrowRight } from "lucide-react"

const PusatUnggulan2 = () => {
    return (
        <section className="w-full min-h-[500px] md:h-[650px] relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070"
                    alt="Story Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto h-full px-5 flex flex-col justify-center text-white py-16 md:py-0">
                <div className="max-w-2xl space-y-4 md:space-y-5">

                    <p className="text-[10px] md:text-xs font-semibold opacity-90 tracking-widest uppercase">
                        Cerita #BersamaPrameka
                    </p>

                    <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-tight">
                        Perjuangan Hendra <br className="hidden md:block" /> Melawan Penyakit <br className="hidden md:block" /> Ginjal Turunan.
                    </h2>

                    <div className="flex items-center gap-3 py-1">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070"
                                alt="Doctor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-0.5">
                            <p className="font-bold text-sm md:text-base leading-none">Prof. Dr. dr. Endang Susalit, SpPD-KGH</p>
                            <p className="text-[10px] md:text-xs opacity-80 font-medium">Spesialis Penyakit Dalam - Konsultan Ginjal dan Hipertensi</p>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-lg">
                        Penyakit ini pernah dialami oleh Hendra Johari (45). Setelah mengalami penurunan fungsi ginjal akibat ginjal polikistik, ia memutuskan untuk menjalani transplantasi ginjal di Prameka Lab.
                    </p>

                    <div className="flex flex-col gap-3 pt-2">
                        <button className="flex items-center gap-2 group text-sm font-bold hover:text-blue-300 transition-colors w-fit">
                            <span>Baca Selengkapnya</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="flex items-center gap-2 group text-sm font-bold hover:text-blue-300 transition-colors w-fit">
                            <span>Lihat Semua Cerita</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PusatUnggulan2