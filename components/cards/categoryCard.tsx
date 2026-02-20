import { ArrowUpRight } from 'lucide-react'

export default function CategoryCard() {
    return (
        <div className="group relative w-full max-w-[690px] overflow-hidden cursor-pointer">

            <div className="relative aspect-square bg-white-gray   p-8 md:p-12 overflow-hidden transition-all duration-500">

                {/* Product Image */}
                <div className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                    <img
                        src="/products/c2.png"
                        className="w-full h-full object-cover   transition-transform duration-500 ease-out  scale-120"
                    />
                </div>

                {/* Texts*/}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold uppercase  leading-[0.9] text-dark-gray">
                        Lifestyle <br /> Shoes
                    </h2>
                </div>

                {/* Button   */}
                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-gray text-white rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}
