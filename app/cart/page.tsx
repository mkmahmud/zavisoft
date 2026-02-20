import React from 'react';
import { Heart, Trash2, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/cards/productCard';

export default function CartPage() {
    return (
        <div className=" pt-10 pb-12 px-4 font-rubik max-w-7xl mx-auto ">
            <div >
                {/* Banner  */}
                <div className="mb-8">
                    <h1 className="text-3xl   text-dark-gray  font-medium">Saving to celebrate</h1>
                    <p className="text-sm   text-dark-gray/70 mt-1">
                        Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
                    </p>
                    <div className="mt-2 text-sm       cursor-pointer">
                        Join us <span className="font-medium text-gray-500">or</span> Sign-in
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/*  YOUR BAG   */}
                    <div className="lg:col-span-8 bg-white-gray rounded-xl p-6 md:p-8">
                        <h2 className="text-3xl font-bold text-dark-gray  ">Your Bag</h2>
                        <p className="  text-dark-gray/80 mb-8">Items in your bag not reserved- check out now to make them yours.</p>

                        {/* Cart Item */}
                        <div className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8">
                            <div className="w-full md:w-48 aspect-square bg-[#ECEEF0] rounded-2xl overflow-hidden shrink-0">
                                <img
                                    src="/products/1.png"
                                    className="w-full h-full object-cover mix-blend-multiply"
                                    alt="Product"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-dark-gray uppercase  ">
                                            DROPSET TRAINER SHOES
                                        </h3>
                                        <p className="text-xl   text-dark-gray/80 mt-2    ">Men's Road Running Shoes</p>
                                        <p className="text-xl   text-dark-gray/80    ">Enamel Blue/ University White</p>
                                    </div>
                                    <p className="text-2xl font-medium text-primary">$130.00</p>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 mt-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm   text-dark-gray  ">Size</span>
                                        <button className="flex items-center gap-1 font-black text-dark-gray">
                                            10 <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm   text-dark-gray  ">Quantity</span>
                                        <button className="flex items-center gap-1 font-black text-dark-gray">
                                            1 <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <button className="text-[#232321] hover:text-[#4A69E2] transition-colors">
                                        <Heart className="w-6 h-6" />
                                    </button>
                                    <button className="text-[#232321] hover:text-red-500 transition-colors">
                                        <Trash2 className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*order summary */}
                    <div className="lg:col-span-4 space-y-2 bg-white-gray py-4 rounded-xl md:bg-transparent md:p-0">
                        <div className="  p-8 space-y-6">
                            <h2 className="text-3xl font-bold text-dark-gray  ">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between  text-dark-gray/80 text-xl ">
                                    <span>1 Item</span>
                                    <span className="text-[#232321]">$130.00</span>
                                </div>
                                <div className="flex justify-between  text-dark-gray/80 text-xl">
                                    <span>Delivery</span>
                                    <span className="text-[#232321]">$6.99</span>
                                </div>
                                <div className="flex justify-between  text-dark-gray/80 text-xl">
                                    <span>Sales Tax</span>
                                    <span className="text-[#232321]">-</span>
                                </div>
                                <div className="flex justify-between font-semibold  text-dark-gray/80 text-2xl">
                                    <span className="   ">Total</span>
                                    <span className=" ">$136.99</span>
                                </div>
                            </div>

                            <Button variant="secondary" className='w-full'>
                                Checkout
                            </Button>
                        </div>

                        <button className="w-full text-left font-black text-dark-gray     tracking-tighter underline underline-offset-8 decoration-2 hover:text-primary transition-colors px-4">
                            Use a promo code
                        </button>
                    </div>

                </div>
            </div>

            {/* Releted Products */}
            <div className="px-4 mt-20 ">
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
        </div>
    );
}