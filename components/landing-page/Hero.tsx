import Image from 'next/image'
import { ChevronRight, Stethoscope, Building2, ClipboardList, Home, FlaskConical, MonitorPlay, Search } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const menuItems = [
    { label: "Cari Dokter", icon: <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-red-900" />, href: '/cari-dokter' },
    { label: "Layanan Unggulan", icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-red-900" />, href: '/layanan-unggulan' },
    { label: "Medical Check Up", icon: <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-red-900" />, href: '/mcu' },
    { label: "At Home", icon: <Home className="w-5 h-5 md:w-6 md:h-6 text-red-900" />, href: '/mcu' },
    { label: "Lab", icon: <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-red-900" />,  href: '/mcu' },
    { label: "Radiologi", icon: <MonitorPlay className="w-5 h-5 md:w-6 md:h-6 text-red-900" />, href: '/mcu' },
  ]

  const stats = [
    { value: "41+", label: "Rumah Sakit di Seluruh Indonesia" },
    { value: "12.5K+", label: "Tenaga Medis" },
    { value: "8.59M+", label: "Pasien Dilayani" },
    { value: "400+", label: "Mitra Asuransi" },
  ]

  return (
    <div className="w-full bg-white">
      
      <div className="hidden md:block relative w-full min-h-[650px] overflow-hidden">
        <Image src='https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill className='object-cover object-right' alt='Hero' priority />
        <div className='absolute inset-0 bg-black/50'></div>

        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-6 h-full flex flex-col justify-start pt-20">
            <div className="max-w-2xl text-white mb-10">
              <p className="text-lg mb-2 opacity-90 uppercase tracking-widest">Laboratorium Klinik Prameka Bali</p>
              <h1 className="text-6xl font-extrabold leading-tight">Yang berarti, <br /> segera kembali.</h1>
            </div>

            <div className="p-8 w-full max-w-lg bg-white rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-5 text-xs">
                <span className="text-gray-400 font-medium">Temukan</span>
                <div className="flex gap-2">
                  <button className="bg-red-900 text-white px-5 py-2 rounded-full font-bold">Semua</button>
                  <button className="border border-red-900 text-red-900 px-5 py-2 rounded-full font-bold">Dokter</button>
                  <button className="border border-red-900 text-red-900 px-5 py-2 rounded-full font-bold">Lokasi</button>
                </div>
              </div>
              <div className="flex items-center border-b-2 border-gray-100 pb-2">
                <input type="text" placeholder="Ketik kata kunci" className="w-full text-lg focus:outline-none bg-transparent" />
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full z-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-6 gap-4">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} className='flex items-center justify-between p-4 bg-white rounded-xl shadow-xl border border-gray-50 group cursor-pointer hover:-translate-y-1 duration-300 transition-all'>
                    <div className="flex items-center gap-3">
                      <div className="text-red-900">{item.icon}</div>
                      <span className="text-[13px] font-bold text-slate-800 leading-tight">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-red-300 group-hover:text-red-900" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>



      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-[6/4]">
          <Image src='https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' fill className='object-cover' alt='Hero' />
        </div>
        
        <div className="px-4 py-6 bg-white">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Selamat Datang di Prameka Lab</p>
          <h1 className="text-2xl font-bold text-slate-900 mt-1 mb-6">Yang berarti, <br /> segera kembali.</h1>
          
          <div className="p-5 bg-white rounded-2xl shadow-xl border border-gray-100 mb-8">
            <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
              <button className="bg-red-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold">Semua</button>
              <button className="border border-red-900 text-red-900 px-4 py-1.5 rounded-full text-[10px] font-bold">Dokter</button>
              <button className="border border-red-900 text-red-900 px-4 py-1.5 rounded-full text-[10px] font-bold">Lokasi</button>
            </div>
            <div className="flex items-center border-b border-gray-100 pb-1">
              <input type="text" placeholder="Ketik kata kunci" className="w-full py-2 text-sm focus:outline-none" />
              <Search className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-2 mb-2">
                <div className="p-4 bg-white shadow-md rounded-md border border-gray-50 text-red-900">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold text-red-900 uppercase leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Hero