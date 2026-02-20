"use client";
import { useState } from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/cards/productCard';

const product = {
    name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: "$125.00",
    colors: [
        { name: "Shadow Navy", hex: "#2B3344" },
        { name: "Army Green", hex: "#7E8C77" }
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    images: [
        " /products/details/1.png",
        "/products/details/2.png",
        "/products/details/3.png",
        "/products/details/4.png"
    ]
};

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState("38");
    const [selectedColor, setSelectedColor] = useState(0);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 font-rubik">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                {/* images */}
                <div className="lg:col-span-8">
                    {/* Desktop  images */}
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        {product.images.map((img, i) => (
                            <div key={i} className={`
        aspect-square bg-white-gray h-[500px] w-[400px] overflow-hidden
        ${i === 0 ? "rounded-tl-[50px] " : ""}
        ${i === 1 ? "rounded-tr-[50px]" : ""}
        ${i === 2 ? "rounded-bl-[50px]" : ""}
        ${i === 3 ? "rounded-br-[50px]" : ""}
      `}>
                                <img src={img} alt="Product view" className="  w-full h-full object-cover   " />
                            </div>
                        ))}
                    </div>

                    {/* Mobile  */}
                    <div className="lg:hidden space-y-4">
                        <div className="aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden relative">

                            <img src={product.images[0]} alt="Product" className="w-full h-full object-cover mix-blend-multiply" />
                            {/* Pagination Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {[0, 1, 2, 3].map((dot) => (
                                    <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-[#4A69E2]' : 'bg-gray-300'}`} />
                                ))}
                            </div>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                            {product.images.map((img, i) => (
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
                            New Release
                        </Button>
                        <h1 className="text-3xl lg:text-4xl font-semibold text-dark-gray uppercase  ">
                            {product.name}
                        </h1>
                        <p className="text-blue text-2xl font-black">{product.price}</p>
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
                        <p className="  text-dark-gray ">Shadow Navy / Army Green</p>
                        <p className="  text-dark-gray ">
                            This product is excluded from all promotional discounts and offers.
                        </p>
                        <ul className="text-dark-gray">
                            <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                            <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Releted Products */}
            <div className="px-4 mt-20">
                <div className="flex items-center md:items-end justify-between space-x-2     px-4  py-8   ">
                    <h1 className=" text-2xl md:text-4xl md:text-[48px] font-bold md:uppercase  md:max-w-2xl text-dark-gray  ">You may also like</h1>
                    <div className="w-full md:w-auto flex items-center justify-end space-x-2">
                        <Button variant="icon" className='bg-black text-white' >
                            <ArrowLeft />
                        </Button>
                        <Button variant="icon" className='bg-black text-white'>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
}