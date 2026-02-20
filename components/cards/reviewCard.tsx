import { Star } from "lucide-react";

export default function ReviewCard() {
    return (
        <div className="flex flex-col w-full max-w-[400px] rounded-[32px] overflow-hidden bg-white   font-rubik">
            {/* Top sections */}
            <div className="p-6 md:p-8 space-y-4">
                <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-bold text-dark-gray leading-tight">
                            Good Quality
                        </h3>
                        <p className="text-dark-gray   text-sm md:text-base leading-snug">
                            I highly recommend shopping from kicks
                        </p>
                    </div>

                    {/*  Profile Image */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden  ">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5 fill-yellow text-yellow"
                        />
                    ))}
                    <span className="ml-2  text-dark-gray text-sm md:text-lg">
                        5.0
                    </span>
                </div>
            </div>

            {/*  image*/}
            <div className="  w-full overflow-hidden">
                <img
                    src="/products/r1.png"
                    alt="Product Review"
                    className="w-full h-full object-cover transition-transform duration-500  "
                />
            </div>
        </div>
    )
}
