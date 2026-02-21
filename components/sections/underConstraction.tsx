import { Hammer, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UnderConstruction() {
    return (
        <div className="min-h-screen   flex flex-col items-center justify-center px-4 font-rubik text-center">

            <div className="mb-8 relative">
                <div className="w-24 h-24 bg-yellow rounded-[32px] flex items-center justify-center rotate-12 shadow-xl">
                    <Hammer className="w-12 h-12 text-white   -rotate-12" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full border-4 border-gray" />
            </div>

            {/* Main Text */}
            <div className="space-y-4 max-w-2xl mb-10">
                <h1 className="text-5xl md:text-7xl font-[1000] text-black  ">
                    Under Construction
                </h1>

            </div>
 

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                <Link href="/" className="w-full">
                    <Button
                        variant="secondary"
                     >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </Button>
                </Link>

            </div>


        </div>
    );
}