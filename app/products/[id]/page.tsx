"use client";
import { useRef, useState } from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/cards/productCard';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery, useGetProductsQuery } from '@/lib/services/productSlice';
import { ProductCardSkeleton } from '@/components/skeletons/productSkeleton';
import { ProductDetailSkeleton } from '@/components/skeletons/productDetailsSkeleton';

const product = {

    colors: [
        { name: "Shadow Navy", hex: "#2B3344" },
        { name: "Army Green", hex: "#7E8C77" }
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],

};

export default function ProductDetails() {

    // Get Product ID from URL
    const { id } = useParams();

    // Get product details from api
    const { data: productdetails, isLoading, error } = useGetProductByIdQuery(id as string);

    // Get releted products from api
    const { data: products } = useGetProductsQuery();
    const reletedProducts = products ? products.filter(p => p.category.id === productdetails?.category.id && p.id !== productdetails.id).slice(0, 10) : [];


    // States
    const [selectedSize, setSelectedSize] = useState("38");
    const [selectedColor, setSelectedColor] = useState(0);

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
        <section className="max-w-7xl mx-auto px-4 py-8 font-rubik">

            {isLoading && <ProductDetailSkeleton />}

            {
                !isLoading && productdetails && <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* images */}
                    <div className="lg:col-span-8">
                        {/* Desktop  images */}
                        <div className="hidden lg:grid grid-cols-2 gap-4">
                            {productdetails?.images.map((img, i) => (
                                <div key={i} className={` aspect-square bg-white-gray h-[500px] w-[400px] overflow-hidden ${i === 0 ? "rounded-tl-[50px] " : ""} ${i === 1 ? "rounded-tr-[50px]" : ""} ${i === 2 ? "rounded-bl-[50px]" : ""} ${i === 3 ? "rounded-br-[50px]" : ""}  `}>
                                    <img src={img} alt="Product view" className="  w-full h-full object-cover   " />
                                </div>
                            ))}
                        </div>

                        {/* Mobile  */}
                        <div className="lg:hidden space-y-4">
                            <div className="aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden relative">

                                <img src={productdetails?.images[0]} alt="Product" className="w-full h-full object-cover mix-blend-multiply" />
                                {/* Pagination Dots Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {[0, 1, 2, 3].map((dot) => (
                                        <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-[#4A69E2]' : 'bg-gray-300'}`} />
                                    ))}
                                </div>
                            </div>
                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                {productdetails?.images.map((img, i) => (
                                    <div key={i} className="min-w-[80px] h-20 bg-[#ECEEF0] rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover mix-blend-multiply" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* product INfo */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-4">
                            <Button variant="default" className='px-4'>
                                {productdetails?.category.name}
                            </Button>
                            <h1 className="text-3xl lg:text-4xl font-semibold text-dark-gray uppercase  ">
                                {productdetails?.title}
                            </h1>
                            <p className="text-blue text-2xl font-black">${productdetails?.price}</p>
                        </div>

                        {/* Color   */}
                        <div className="space-y-3">
                            <p className="font-black text-dark-gray uppercase ">Color</p>
                            <div className="flex gap-3">
                                {product.colors.map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedColor(i)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all p-0.5 ${selectedColor === i ? 'border-[#232321]' : 'border-transparent'}`}
                                    >
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size   */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <p className="font-black text-dark-gray uppercase tracking-tight">Size</p>
                                <button className="text-xs font-bold uppercase underline underline-offset-4  ">Size Chart</button>
                            </div>
                            <div className="grid grid-cols-8 gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`h-12 border rounded-xl   transition-all ${selectedSize === size
                                            ? 'bg-[#232321] text-white border-[#232321]'
                                            : 'bg-white text-[#232321] border-gray-200 hover:border-[#232321]'
                                            } ${["39", "40"].includes(size) ? 'bg-[#E7E7E3] opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action   */}
                        <div className=' w-full space-y-2  '>
                            <div className="w-full flex space-x-2 justify-between">
                                <Button variant="secondary" className='w-4/5' >
                                    Add to Cart
                                </Button>
                                <Button variant="icon" className='bg-black '>
                                    <Heart className="w-6 h-6 !text-white  " />
                                </Button>
                            </div>

                            <Button variant="default" className="w-full  ">
                                Buy it Now
                            </Button>
                        </div>


                        {/* About the Product */}
                        <div className="space-y-4 pt-4  ">
                            <p className="font-semibold text-dark-gray uppercase text-base">About the Product</p>
                            <p className="  text-dark-gray ">
                                {productdetails?.description}
                            </p>

                        </div>
                    </div>
                </div>
            }

            {/* Releted Products */}
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

                {/* --- SLIDER CONTAINER --- */}
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

                {/* Bottom bar / Pagination */}
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
        </section>
    );
}