"use client";
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/lib/services/productSlice';
import { ProductDetailSkeleton } from '@/components/skeletons/productDetailsSkeleton';
import { useDispatch, } from 'react-redux';
import { addToCart } from '@/lib/features/cartSlice';
import { toast } from 'sonner';
import ReletedProductSection from '@/components/sections/reletedProductSection';

// Mock product data for colors and sizes
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
    const { data: productdetails, isLoading } = useGetProductByIdQuery(id as string);

    // States
    const [selectedSize, setSelectedSize] = useState("38");
    const [selectedColor, setSelectedColor] = useState(0);

    // Handle add to cart
    const dispatch = useDispatch();

    const handleAdd = () => {
        try {
            dispatch(addToCart({
                id: productdetails?.id as number,
                title: productdetails?.title as string,
                price: productdetails?.price as number,
                image: productdetails?.images[0] as string,
                quantity: 1,
                selectedSize: selectedSize,
                selectedColor: selectedColor as unknown as string,
            }));

            toast.success("Item added to cart!");
        }
        catch (error) {
            console.error("Failed to add item to cart:", error);
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
                                <Button variant="secondary" className='w-4/5' onClick={handleAdd} >
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


            {/* Releted Producsts */}
            <ReletedProductSection categoryId={productdetails?.category.id as number} productId={productdetails?.id as number} />
        </section>
    );
}