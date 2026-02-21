'use client';

import { motion } from 'framer-motion'; // Add this
import { Button } from '@/components/ui/button';
import { Product } from '@/types/Products/products';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            //  
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col gap-4 w-full max-w-[350px] font-rubik group cursor-pointer"
        >
            {/* Image   */}
            <div className="relative aspect-[4/5] w-full bg-[#F3F3F3] rounded-[32px] overflow-hidden border-8 border-white">
                {/* Badge   */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-0 bg-primary text-white px-6 py-3 rounded-br-[24px] text-sm z-10"
                >
                    {product.category.name}
                </motion.div>

                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Product Info  */}
            <motion.div
                className="space-y-4 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-base md:text-2xl font-[1000] uppercase leading-none tracking-tighter text-dark-gray line-clamp-2">
                    {product.title}
                </h3>

                {/* Action Button with Price */}
                <motion.div
                    whileTap={{ scale: 0.97 }}
                >
                    <Button asChild variant="secondary" className="w-full justify-between md:justify-center px-2 group/btn">
                        <Link href={`/products/${product.id}`} className="flex items-center gap-2">
                            <span>View Product - </span>
                            <span className="text-[#FFA52F] group-hover/btn:text-white transition-colors">${product.price}</span>
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}