"use client";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center  px-4 text-center">
            <div className="relative mb-8">

                <h1 className="flex items-center text-[120px] md:text-[200px] font-[1000] font-rubik uppercase tracking-tighter text-[#232321]   leading-none">
                    <span className="relative">4</span>
                    <span className="-ml-[5%] text-yellow">0</span>
                    <span
                        className="relative z-20 -ml-[5%]"
                        style={{ WebkitTextStroke: '6px #E7E7E3', paintOrder: 'stroke fill' }}
                    >
                        4
                    </span>
                </h1>
                <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-yellow text-dark-gray px-4 py-1 rounded-full font-black text-xl md:text-2xl   rotate-12">
                    MISS!
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-[1000] uppercase   text-dark-gray mb-4">
                Oops! Not Found.
            </h2>

            <Button asChild variant="default" className="group">
                <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
            </Button>
        </main>
    )
}