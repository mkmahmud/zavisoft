'use client';

import { motion } from "framer-motion";
import ProductCard from "@/components/cards/productCard";
import ReviewCard from "@/components/cards/reviewCard";
import Category from "@/components/sections/home/category";
import { ProductCardSkeleton } from "@/components/skeletons/productSkeleton";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/lib/services/productSlice";
import Link from "next/link";

//  animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const heroTextVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20, delay: 0.5 }
  }
};

export default function UsersPage() {
  // Get Products
  const { data: products, isLoading } = useGetProductsQuery();
  const displayedProducts = products ? products.slice(30, 34) : [];

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden" >

      {/* Hero  */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="overflow-hidden"
      >
        <h1 className="uppercase text-[60px] md:text-[200px] font-bold text-center mb-8 leading-none tracking-tighter">
          Do it <span className="text-primary  ">right</span>
        </h1>
      </motion.div>

      {/* --- MAIN HERO SECTION --- */}
      <section className="px-4 py-2 w-full">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl relative h-[600px] md:h-[750px] overflow-hidden rounded-[48px] bg-[#E7E7E3]"
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/herobg.png')` }}
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* Nike Air Max Content */}
          <motion.div
            // @ts-ignore
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-16 left-8 md:left-16 z-10 max-w-lg"
          >
            <h1 className="text-white text-2xl md:text-[74px] font-black uppercase leading-none mb-4">
              Nike Air Max
            </h1>
            <p className="text-white/90 text-base md:text-2xl mb-6 leading-tight">
              Nike introducing the new air max for <br className="hidden md:block" /> everyone's comfort
            </p>
            <Button variant="default"  >Shop Now</Button>

          </motion.div>

          {/* Floating Thumbnails */}
          <div className="absolute right-8 bottom-16 flex flex-col gap-4">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.2), type: "spring" }}
                whileHover={{ scale: 1.1, rotate: i === 1 ? -2 : 2 }}
                className="w-[64px] h-[64px] md:w-[160px] md:h-[160px] rounded-3xl overflow-hidden border-2 border-white/50 cursor-pointer shadow-2xl"
              >
                <img src={`/hero${i}.png`} alt="View" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* All Products */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="px-4 mt-10"
      >
        <div className="flex items-center md:items-end justify-between py-8">
          {/* @ts-ignore */}
          <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase md:max-w-2xl leading-none">
            Don’t miss out <br /> new drops
          </motion.h1>
          {/* @ts-ignore */}
          <motion.div variants={itemVariants}>
            <Button variant="default" asChild>
              <Link href="/products">Shop New Drops</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            // @ts-ignore
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
          {isLoading && [...Array(4)].map((_, i) => <ProductCardSkeleton key={i} />)}
        </div>
      </motion.section>

      {/* --- CATEGORIES --- */}

      <Category />


      {/* --- REVIEWS: STAGGERED SPRING --- */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mt-20 px-4 mb-20"
      >
        <div className="flex items-center md:items-end justify-between py-8">
          {/* @ts-ignore */}
          <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl md:text-[74px] font-bold md:uppercase leading-none">
            Reviews
          </motion.h1>
          {/* @ts-ignore */}
          <motion.div variants={itemVariants}>
            <Button variant="default">See All</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              // @ts-ignore
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={i > 0 ? "hidden md:block" : ""}
            >
              <ReviewCard />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}