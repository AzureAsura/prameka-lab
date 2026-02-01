import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { Phone, MessageCircle, User, Globe, Search, ChevronDown } from 'lucide-react'
import { navLinks } from '@/constants'

const Navbar = () => {
    return (
        <header className='w-full sticky top-0 z-50 shadow-sm'>

            <div className=' bg-red-900 text-white py-2'>
                <div className='container flex justify-between items-center text-xs font-medium'>

                    <div className='md:flex gap-6 hidden'>
                        <Link href="/" className='hover:underline'>Pasien & Pengunjung</Link>
                        <Link href="/" className='hover:underline'>Perusahaan</Link>
                        <Link href="/" className='hover:underline'>Healthpedia</Link>
                    </div>

                    <div className='md:hidden flex items-center gap-1.5 cursor-pointer hover:text-green-400'>
                        <div className='bg-green-500 rounded-full p-0.5'>
                            <MessageCircle size={14} className='fill-white text-white' />
                        </div>
                        <span>WhatsApp</span>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <div className='hidden md:flex items-center gap-1.5 cursor-pointer hover:text-green-400'>
                            <div className='bg-green-500 rounded-full p-0.5'>
                                <MessageCircle size={14} className='fill-white text-white' />
                            </div>
                            <span>WhatsApp</span>
                        </div>

                        <div className='flex items-center gap-1.5 cursor-pointer hover:underline'>
                            <Phone size={14} className='text-gray-300' />
                            <span>Hubungi Kami 1-500-911</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container flex items-center justify-between py-4'>
                    <Link href='/' className='shrink-0'>
                        <Image src='/prameka.png' height={48} width={150} alt='Logo' priority className='object-contain' />
                    </Link>


                        <div className="md:flex gap-8 hidden">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center gap-1 font-medium text-gray-700 hover:text-blue-900 transition-all text-[15px]"
                                >
                                    {item.name}
                                    {item.name === "Layanan Kesehatan" && <ChevronDown size={16} className='text-green-500 font-bold' />}
                                </Link>
                            ))}
                        </div>

                        <div className="relative group hidden md:block">
                            <input
                                type="text"
                                placeholder="Cari di Prameka..."
                                className="bg-gray-100 border border-transparent focus:border-green-500 focus:bg-white rounded-lg py-2 px-4 pr-10 text-sm outline-none transition-all w-[200px] lg:w-[250px]"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                        </div>


                    <NavLink />
                </div>
            </div>
        </header>
    )
}

export default Navbar