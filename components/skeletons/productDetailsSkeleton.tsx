import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailSkeleton() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 animate-pulse">

            <div className="lg:col-span-8">
                <div className="hidden lg:grid grid-cols-2 gap-4">
                    {[
                        "rounded-tl-[50px]",
                        "rounded-tr-[50px]",
                        "rounded-bl-[50px]",
                        "rounded-br-[50px]",
                    ].map((radius, i) => (
                        <Skeleton
                            key={i}
                            className={`aspect-square bg-dark-gray/30 h-[500px] w-full ${radius}`}
                        />
                    ))}
                </div>

                {/* Mobile Image Skeleton */}
                <div className="lg:hidden space-y-4">
                    <div className="aspect-square bg-dark-gray/30 rounded-[32px] relative">
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-dark-gray/30" />
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {[...Array(4)].map((_, i) => (
                            <Skeleton key={i} className="min-w-[80px] h-20 bg-dark-gray/30 rounded-xl shrink-0" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-24 rounded-md bg-dark-gray/30" />
                    <div className="space-y-2">
                        <Skeleton className="h-10 w-full bg-dark-gray/30" />
                        <Skeleton className="h-10 w-2/3 bg-dark-gray/30" />
                    </div>
                    <Skeleton className="h-8 w-20 bg-dark-gray/30" />
                </div>

                <div className="space-y-3">
                    <Skeleton className="h-5 w-16 bg-dark-gray/30" />
                    <div className="flex gap-3">
                        {[...Array(3)].map((_, i) => (
                            <Skeleton key={i} className="w-10 h-10 rounded-full bg-dark-gray/30 " />
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-5 w-12 bg-dark-gray/30" />
                        <Skeleton className="h-4 w-20 bg-dark-gray/30" />
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                        {[...Array(8)].map((_, i) => (
                            <Skeleton key={i} className="h-12 w-full rounded-xl bg-dark-gray/30" />
                        ))}
                    </div>
                </div>

                <div className='w-full space-y-2'>
                    <div className="w-full flex space-x-2">
                        <Skeleton className="h-14 w-4/5 rounded-xl bg-dark-gray/30" />
                        <Skeleton className="h-14 w-1/5 rounded-xl bg-dark-gray/30" />
                    </div>
                    <Skeleton className="h-14 w-full rounded-xl bg-dark-gray/30" />
                </div>

                {/* About the Product */}
                <div className="space-y-4 pt-4">
                    <Skeleton className="h-6 w-40 bg-dark-gray/30" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-dark-gray/30" />
                        <Skeleton className="h-4 w-full bg-dark-gray/30" />
                        <Skeleton className="h-4 w-3/4 bg-dark-gray/30" />
                    </div>
                </div>
            </div>
        </div>
    );
}