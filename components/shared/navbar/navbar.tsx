'use client';

import Link from 'next/link';
import { Search, User, Menu, ChevronDown, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Logo from '@/components/logo';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const NAV_DATA = [
    { name: 'New Drops 🔥', href: '/new-drops' },
    {
        name: 'Men',
        href: '/men',
        subMenu: ['Running', 'Basketball', 'Training', 'Lifestyle']
    },
    {
        name: 'Women',
        href: '/women',
        subMenu: ['Yoga', 'Running', 'Tennis', 'Lifestyle']
    },
];

export default function Navbar() {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="w-full px-4 py-4 sticky top-0 z-50 ">
            <div className="mx-auto max-w-7xl bg-white rounded-[24px] px-4 md:px-6 py-3 flex items-center justify-between shadow-sm relative bg-white-gray">

                {/* Desktop Menus*/}
                <div className="hidden lg:flex items-center gap-6">
                    {NAV_DATA.map((link) => (
                        link.subMenu ? (
                            <DropdownMenu key={link.name}>
                                <DropdownMenuTrigger className="flex items-center gap-1 text-base text-dark-gray font-bold   tracking-tight outline-none hover:text-primary transition-colors">
                                    {link.name} <ChevronDown className="w-4 h-4 opacity-50" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-48 rounded-xl p-2">
                                    {link.subMenu.map((item) => (
                                        <DropdownMenuItem key={item} asChild>
                                            <Link href={`/${link.name.toLowerCase()}/${item.toLowerCase()}`} className="cursor-pointer font-medium">
                                                {item}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link key={link.name} href={link.href} className="text-base text-dark-gray font-bold   tracking-tight hover:text-primary transition-colors">
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/*Mobile Menus*/}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0 border-none">
                            <div className="flex flex-col h-full bg-white">
                                <div className="p-6 border-b flex justify-between items-center  ">
                                    <Logo />

                                </div>

                                <div className="flex-1 overflow-y-auto p-6">
                                    <Accordion type="single" collapsible className="w-full">
                                        {NAV_DATA.map((link, idx) => (
                                            <AccordionItem value={`item-${idx}`} key={link.name} className="border-none">
                                                {link.subMenu ? (
                                                    <>
                                                        <AccordionTrigger className="text-base font-bold   py-4 hover:no-underline">
                                                            {link.name}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="flex flex-col gap-4 pl-4 pb-4">
                                                            {link.subMenu.map((sub) => (
                                                                <Link key={sub} href="#" className="text-lg text-muted-foreground font-medium">
                                                                    {sub}
                                                                </Link>
                                                            ))}
                                                        </AccordionContent>
                                                    </>
                                                ) : (
                                                    <Link key={link.name} href={link.href} className="text-base text-dark-gray font-bold   tracking-tight hover:text-primary transition-colors">
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/*   logo   */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                {/*  Profile */}
                <div className="flex items-center gap-2 md:gap-4">
                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <Search className="!w-6 !h-6" />
                    </Button>


                    <Button variant="ghost" size="icon" className="hidden md:flex">
                        <User className="!w-6 !h-6" />
                    </Button>
                    <div className='flex items-center space-x-4'>

                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className=" md:flex relative cursor-pointer">
                                <ShoppingCart className="!w-6 !h-6" />
                                <p className="absolute top-0 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{cartCount}</p>
                            </Button>
                        </Link>

                        <div className="relative cursor-pointer group">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow flex items-center justify-center text-sm font-bold shadow-inner group-hover:scale-105 transition-transform">
                                0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}