import { Skeleton } from "@/components/ui/skeleton"

export function CategoryCardSkeleton() {
    return (
        <div className="w-full max-w-[690px] overflow-hidden">
            <div className="relative aspect-square bg-white-gray p-8 md:p-12  ">

                <div className="w-full h-full flex items-center justify-center">
                    <Skeleton className="w-4/5 h-4/5 rounded-2xl bg-dark-gray/50 animate-pulse" />
                </div>

                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 space-y-2">
                    <Skeleton className="h-8 md:h-10 w-24 md:w-36 bg-dark-gray/60" />
                </div>

                <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10">
                    <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dark-gray/80" />
                </div>
            </div>
        </div>
    )
}