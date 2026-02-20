import { Skeleton } from "../ui/skeleton";



export function ProductCardSkeleton() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[350px]">
            <div className="relative aspect-[4/5] w-full bg-white/50 rounded-[32px] overflow-hidden border-8 border-white">
                <div className="absolute top-0 left-0 w-20 h-10 bg-dark-gray rounded-br-[24px] animate-pulse" />

                <Skeleton className="w-full h-full bg-dark-gray" />
            </div>

            <div className="space-y-4 px-2">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4 bg-dark-gray" />
                    <Skeleton className="h-6 w-1/2 bg-dark-gray" />
                </div>

                <Skeleton className="w-full h-12 rounded-xl bg-dark-gray" />
            </div>
        </div>
    )
}