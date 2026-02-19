 import { Button } from '@/components/ui/button';

export default function ProductCard() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[350px] font-rubik group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full bg-[#F3F3F3] rounded-[32px] overflow-hidden border-8 border-white  ">
                {/*   Badge */}
                <div className="absolute top-0 left-0 bg-primary text-white px-6 py-3 rounded-br-[24px]   text-sm z-10">
                    New
                </div>


                <img
                    src="/products/1.png"
                    alt="Adidas 4DFWD"
                    className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Product Info */}
            <div className="space-y-4 px-2">
                <h3 className="text-base md:text-2xl font-[1000] uppercase   leading-none tracking-tighter text-dark-gray">
                    Adidas 4DFWD X Parley <br /> Running Shoes
                </h3>

                {/* Action Button with Price */}
                <Button variant="secondary" className="w-full justify-between md:justify-center px-2">
                    <span>View Product - </span>
                    <span className="text-[#FFA52F]">$125</span>
                </Button>
            </div>
        </div>
    );
}