import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from '../cards/productCard'
import { ProductCardSkeleton } from '../skeletons/productSkeleton'
import { useGetProductsQuery } from '@/lib/services/productSlice'

export default function ReletedProductSection({ categoryId, productId }: { categoryId: number, productId: number }) {


    // Get Releted P{roducts from api 
    const { data: products, isLoading } = useGetProductsQuery();

    const reletedProducts = products ? products.filter(p => p.category.id === categoryId && p.id !== productId).slice(0, 10) : [];

    // Scroll
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Scrolls by one full view-width at a time
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>

            <div className="px-4 mt-20">
                <div className="flex items-center md:items-end justify-between space-x-2 px-4 py-8">
                    <h1 className="text-2xl md:text-4xl md:text-[48px] font-[1000] uppercase italic tracking-tighter text-dark-gray leading-none">
                        You may also like
                    </h1>
                    <div className="w-full md:w-auto flex items-center justify-end space-x-2">
                        <Button
                            variant="icon"
                            className='bg-black text-white hover:bg-gray-800'
                            onClick={() => scroll('left')}
                        >
                            <ArrowLeft />
                        </Button>
                        <Button
                            variant="icon"
                            className='bg-black text-white hover:bg-gray-800'
                            onClick={() => scroll('right')}
                        >
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                {/*  slider */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth gap-6"
                >
                    {reletedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-full md:min-w-[calc(25%-18px)] snap-start"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}

                    {/* Loading Skeletons */}
                    {isLoading && (
                        <div className="flex gap-6 w-full">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="min-w-full md:min-w-[calc(25%-18px)]">
                                    <ProductCardSkeleton />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/*   Pagination */}
                <div className="flex items-center justify-center gap-2 py-4 mt-8">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className={`
                      h-2 w-12 rounded-full transition-all duration-300
                      ${index === 0 ? "bg-[#4A69E2]" : "bg-[#BCBCBC]"}
                    `}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
