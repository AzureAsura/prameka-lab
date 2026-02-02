import React from "react";
import { 
  ChevronRight, 
  Heart, 
  Activity, 
  Stethoscope, 
  Microscope, 
  Dna, 
  Bone 
} from "lucide-react";

const specialities = [
  {
    title: "Jantung & Pembuluh Darah",
    description: "Menangani berbagai gangguan pada jantung dan pembuluh darah.",
    icon: Heart,
    iconColor: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    title: "Saraf & Bedah Saraf",
    description: "Menangani berbagai gangguan otak, sistem saraf, serta saraf tulang belakang.",
    icon: Activity,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Digestif",
    description: "Menangani berbagai gangguan pada sistem pencernaan.",
    icon: Stethoscope,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Onkologi (Kanker)",
    description: "Menangani berbagai jenis tumor dan kanker.",
    icon: Microscope,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Ginjal & Saluran Kemih",
    description: "Menangani berbagai gangguan sistem kemih dan ginjal.",
    icon: Dna,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Ortopedi",
    description: "Menangani berbagai gangguan pada tulang, otot, dan sendi.",
    icon: Bone,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50"
  },
];

export default function PusatUnggulan3() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              Temukan Pusat Layanan Unggulan Kami
            </h2>
          </div>

          <div className="lg:w-2/3 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specialities.map((item, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between p-5 border border-gray-200 rounded-2xl hover:shadow-md hover:border-blue-100 transition-all cursor-pointer bg-white"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${item.bgColor} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-[15px] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-green-500 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}