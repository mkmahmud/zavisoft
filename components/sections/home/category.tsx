import CategoryCard from '@/components/cards/categoryCard';
import { CategoryCardSkeleton } from '@/components/skeletons/categorySkeleton';
import { Button } from '@/components/ui/button';
import { useGetCategoryQuery } from '@/lib/services/categorySlice';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react'

export default function Category() {

    // Get Categories Data
    const { data: categories, isLoading: categoryLoading } = useGetCategoryQuery();
    const displayedCategories = categories ? categories.slice(1, 5) : [];

    // Handle Carousel Scrolling
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: 'smooth',
            });
        }
    };

    return (

        <section className="bg-[#232321] mt-20 pt-8 overflow-hidden">
            {/* Header with Controls */}
            <div className="flex items-center md:items-end justify-between px-4 py-8">
                <h1 className=" text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase  md:max-w-2xl text-white ">Categories</h1>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="icon"
                        onClick={() => scroll('left')}
                    >
                        <ArrowLeft />
                    </Button>
                    <Button
                        variant="icon"
                        onClick={() => scroll('right')}
                    >
                        <ArrowRight />
                    </Button>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth ml-4 md:ml-10 mt-10 rounded-tl-[120px]   "
            >
                {displayedCategories.map((category: any) => (
                    <div
                        key={category.id}
                        className="min-w-full md:min-w-[50%] snap-start  "
                    >
                        <CategoryCard category={category} />
                    </div>
                ))}
                {/* If Loading */}
                {
                    categoryLoading && Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="min-w-full md:min-w-[50%] snap-start  "
                        >
                            <CategoryCardSkeleton />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
