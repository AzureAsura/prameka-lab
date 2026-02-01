'use client'

import clsx from 'clsx'
import { ChevronRight, Menu, Search, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { navLinks } from '@/constants'

const NavLink = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <div className="flex md:hidden items-center gap-3">
                <Search className="w-5 h-5 text-gray-600" />
                <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={clsx(
                "fixed top-[100px] left-0 w-full h-screen bg-white z-40 transition-all duration-300 md:hidden", 
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col p-6 gap-6">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium border-b border-gray-100 pb-4 flex justify-between items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                            <ChevronRight size={20} className='text-gray-400' />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavLink