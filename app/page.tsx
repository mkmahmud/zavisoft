'use client';

import CategoryCard from "@/components/cards/categoryCard";
import ProductCard from "@/components/cards/productCard";
import ReviewCard from "@/components/cards/reviewCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";



const reviews = [
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "https://randomuser.me/api/portraits/men/32.jpg",
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "https://randomuser.me/api/portraits/men/44.jpg",
    productImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    rating: 5.0,
    userImage: "https://randomuser.me/api/portraits/men/85.jpg",
    productImage: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop"
  }
];


export default function UsersPage() {



  return (
    <div className="max-w-7xl mx-auto  " >
      {/* Hero Title */}
      <h1 className="uppercase text-[60px] md:text-[200px] font-bold text-center mb-8">Do it <span className="text-primary">right</span></h1>

      {/* Hero */}
      <section className="px-4 py-2 w-full">
        <div className="mx-auto max-w-7xl relative h-[600px] md:h-[750px] overflow-hidden rounded-[48px] bg-[#E7E7E3]">

          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('/herobg.png')`,
            }}
          />

          {/* Overlay    */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Vertical   Badge */}
          <div className="absolute top-10 left-0 bg-dark-gray text-white px-4 py-6 rounded-r-2xl   md:block z-20">
            <p className="[writing-mode:vertical-lr] rotate-180 text-xs md:text-base   ">
              Nike product of the year
            </p>
          </div>

          {/* Main Content   */}
          <div className="absolute bottom-16 left-8 md:left-16 z-10 max-w-lg">
            <h1 className="text-white text-2xl   md:text-[74px] font-black uppercase     ">
              Nike Air  Max
            </h1>
            <p className="w-xs md:w-md text-white/90 text-base md:text-2xl    my-2 md:mb-4  leading-tight">
              Nike introducing the new air max for <br className="hidden md:block" /> everyone's comfort
            </p>
            <Button variant="default">
              Shop Now
            </Button>
          </div>

          {/*  mini Tumbnail */}
          <div className="absolute right-8 bottom-16 flex flex-col gap-4   lg:flex">
            <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden border-2 border-white/50  cursor-pointer  ">
              <img src="/hero1.png" alt="View 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden border-2 border-white/50  cursor-pointer  ">
              <img src="/hero2.png" alt="View 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 mt-10">
        <div className="flex items-center md:items-end justify-between space-x-2       py-8   ">
          <h1 className=" text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase  md:max-w-2xl ">Don’t miss out new drops</h1>
          <div className="w-full md:w-auto flex items-center justify-end ">
            <Button variant="default"  >
              Shop New Drops
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
      </section>

      {/* Categoris */}
      <section className="bg-dark-gray mt-20 pt-8   ">
        <div className="flex items-center md:items-end justify-between space-x-2     px-4  py-8   ">
          <h1 className=" text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase  md:max-w-2xl text-white ">Categories</h1>
          <div className="w-full md:w-auto flex items-center justify-end space-x-2">
            <Button variant="icon"  >
              <ArrowLeft />
            </Button>
            <Button variant="icon"  >
              <ArrowRight />
            </Button>
          </div>
        </div>
        {/* categories Contetn */}
        <div className="rounded-tl-[120px] overflow-hidden ml-10 mt-10 md:flex ">
          <CategoryCard />
          <CategoryCard />

        </div>
      </section>

      {/* Reviews */}
      <section className="mt-20 px-4">
        <div className="flex items-center md:items-end justify-between space-x-2       py-8   ">
          <h1 className=" text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase  md:max-w-2xl ">Reviews</h1>
          <div className="w-full md:w-auto flex items-center justify-end ">
            <Button variant="default"  >
              See All
            </Button>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <ReviewCard />
          <div className="hidden md:block">
            <ReviewCard />
          </div>
          <div className="hidden md:block">
            <ReviewCard />
          </div>
           
        </div>
      </section>
    </div>
  );
}