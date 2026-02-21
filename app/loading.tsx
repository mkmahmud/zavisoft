"use client";
export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray">
            <div className="relative animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center gap-1 mt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-dark-gray rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    )
}