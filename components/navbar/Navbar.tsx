import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink'
import { Phone, MessageCircle, Search, ChevronDown } from 'lucide-react'
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


                    <NavLink />
                </div>
            </div>
        </header>
    )
}

export default Navbar