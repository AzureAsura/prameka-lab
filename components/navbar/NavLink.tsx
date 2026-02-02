'use client'

import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import NavbarToggle from './NavbarToggle'


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

const NavLink = () => {

    return (
        <>
            <div className="hidden lg:block">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.name}>
                                {link.items ? (
                                    <>
                                        <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                                                {link.items.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.href}
                                                    >
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (

                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href={link.href!}>
                                            {link.name}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="relative group hidden lg:block">
                <input
                    type="text"
                    placeholder="Cari di Prameka..."
                    className="bg-gray-100 border border-transparent focus:border-green-500 focus:bg-white rounded-lg py-2 px-4 pr-10 text-sm outline-none transition-all w-[200px] lg:w-[250px]"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>

            <NavbarToggle/>


        </>
    )
}

export default NavLink