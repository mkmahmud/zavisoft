"use client";
import { Heart, Trash2, ChevronDown, ShoppingBag, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { clearCart, removeFromCart } from '@/lib/features/cartSlice';
import Link from 'next/link';
import ReletedProductSection from '@/components/sections/reletedProductSection';

export default function CartPage() {

    // Get cart items and summary from Redux store
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartSummary = useSelector((state: RootState) => state.cart.cartSummary);
    const dispatch = useDispatch();

    // Handle delete form cart
    const handleDelete = ({ id, selectedSize, selectedColor }: { id: number; selectedSize: string; selectedColor: string }) => {
        dispatch(removeFromCart({ id, selectedSize, selectedColor }));
    }

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
                {/* if cart is empty */}
                {
                    cartItems.length === 0 &&
                    <div className="flex flex-col items-center justify-center gap-6 py-32 px-4   ">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                            <ShoppingBag className="w-10 h-10 text-primary" />
                        </div>

                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl md:text-4xl font-medium text-dark-gray  ">
                                Your bag is empty
                            </h2>
                            <p className="text-dark-gray/60 max-w-[280px] mx-auto font-medium">
                                Looks like you haven't added any heat to your bag yet.
                            </p>
                        </div>

                        <Link href="/products" className="mt-4">
                            <Button
                                variant="secondary"

                            >
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                }


                {/* If data available  */}

                {
                    cartItems.length > 0 && <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/*  YOUR BAG   */}
                        <div className="lg:col-span-8 bg-white-gray rounded-xl p-6 md:p-8">
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="text-3xl font-bold text-dark-gray  ">Your Bag</h2>
                                    <p className="  text-dark-gray/80 mb-8">Items in your bag not reserved- check out now to make them yours.</p>

                                </div>
                                <div>
                                    <Button    onClick={() => dispatch(clearCart())} className='bg-red-500 hover:bg-red-700' >
                                        Clear Bag <Trash className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            {
                                cartItems.map((item) => (
                                    <div className='mt-4 ' key={`${item.id}-${item.selectedSize}`}>
                                        <div className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8">
                                            <div className="w-full md:w-48 aspect-square bg-[#ECEEF0] rounded-2xl overflow-hidden shrink-0">
                                                <img
                                                    src={item.image}
                                                    className="w-full h-full object-cover mix-blend-multiply"
                                                    alt="Product"
                                                />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl font-bold text-dark-gray uppercase  ">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-xl   text-dark-gray/80 mt-2    ">Men's Road Running Shoes</p>
                                                        <p className="text-xl   text-dark-gray/80    ">Enamel Blue/ University White</p>
                                                    </div>
                                                    <p className="text-2xl font-medium text-primary">${item.price}</p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-6 mt-6">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm   text-dark-gray  ">Size</span>
                                                        <button className="flex items-center gap-1 font-black text-dark-gray">
                                                            {item.selectedSize} <ChevronDown className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm   text-dark-gray  ">Quantity</span>
                                                        <button className="flex items-center gap-1 font-black text-dark-gray">
                                                            {item.quantity} <ChevronDown className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 mt-6">
                                                    <Button variant="icon"  >
                                                        <Heart className="w-6 h-6" />
                                                    </Button>
                                                    <Button variant="icon" onClick={() => handleDelete({ id: item.id, selectedSize: item.selectedSize, selectedColor: item.selectedColor })} className='hover:text-red-500' >
                                                        <Trash2 className="w-6 h-6" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        {/*order summary */}
                        <div className="lg:col-span-4 space-y-2 bg-white-gray py-4 rounded-xl md:bg-transparent md:p-0">
                            <div className="  p-8 space-y-6">
                                <h2 className="text-3xl font-bold text-dark-gray  ">Order Summary</h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between  text-dark-gray/80 text-xl ">
                                        <span>{cartSummary?.totalItems} Item</span>
                                        <span className="text-[#232321]">${cartSummary?.totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between  text-dark-gray/80 text-xl">
                                        <span>Delivery</span>
                                        <span className="text-[#232321]">${cartSummary?.delivaryFee}</span>
                                    </div>
                                    <div className="flex justify-between  text-dark-gray/80 text-xl">
                                        <span>Sales Tax</span>
                                        <span className="text-[#232321]">${cartSummary?.salesTax}</span>
                                    </div>
                                    <div className="flex justify-between font-semibold  text-dark-gray/80 text-2xl">
                                        <span className="   ">Total</span>
                                        <span className=" ">${cartSummary?.grandTotal}</span>
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
                }
            </div>

            {/* Releted Producsts */}
            <ReletedProductSection categoryId={3 as number} productId={4 as number} />
        </div>
    );
}