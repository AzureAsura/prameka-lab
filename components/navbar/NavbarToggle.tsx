

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import clsx from "clsx"
import { ChevronRight, Menu, Search, X, ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import Link from "next/link"
import { navLinks } from "@/constants"


const NavbarToggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="lg:hidden">
            <div className="flex items-center gap-3">
                <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={clsx(
                "fixed top-[105px] left-0 w-full h-screen bg-white z-40 transition-all duration-300 lg:hidden overflow-y-auto",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex flex-col p-6 gap-2">
                    <Accordion type="single" collapsible className="w-full">
                        {navLinks.map((item) => (
                            <div key={item.name}>
                                {item.items ? (
                                    <AccordionItem value={item.name} className="border-b border-gray-100 py-2">
                                        <AccordionTrigger className="text-lg font-medium hover:no-underline py-4">
                                            {item.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-4 pl-4 pt-2 pb-4">
                                                {item.items.map((sub) => (
                                                    <Link
                                                        key={sub.title}
                                                        href={sub.href}
                                                        className="text-gray-600 font-medium text-base flex justify-between items-center"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.title}
                                                        <ChevronRight size={16} className="text-gray-300" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ) : (
                                    <div className="border-b border-gray-100 py-6">
                                        <Link
                                            href={item.href!}
                                            className="text-lg font-medium flex justify-between items-center"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                            <ChevronRight size={20} className='text-gray-400' />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Accordion>

                    <div className="mt-8">
                        <Link
                            href="/hubungi-kami"
                            className="w-full bg-red-900 text-white flex justify-center py-3 rounded-lg font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarToggle