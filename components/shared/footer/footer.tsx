import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
    return (
        <footer className="w-full px-4 pt-8   font-rubik">
            <div className="mx-auto max-w-7xl space-y-2">

                {/*  Cta */}
                <div className="bg-blue rounded-t-[32px] md:rounded-t-[48px] p-8 pb-[100px]   flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="z-10 text-center md:text-left space-y-4 w-full ">
                        <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase leading-none text-left ">
                            Join our KicksPlus <br /> Club & get 15% off
                        </h2>
                        <p className="text-white/80  text-base text-left">
                            Sign up for free! Join the community.
                        </p>
                        <div className="flex space-x-2      max-w-md mx-auto md:mx-0">
                            <Input
                                placeholder="Email address"
                                className="bg-transparent border-white/40 text-white placeholder:text-white/60 h-12 rounded-xl"
                            />
                            <Button className="bg-[#232321] text-white hover:bg-black h-12 px-8 rounded-xl font-bold uppercase">
                                Submit
                            </Button>
                        </div>
                    </div>

                    {/* logo */}
                    <div className="md:block opacity-100 w-full">
                        <div className="flex items-center justify-start md:justify-center w-full">
                            <h1 className="flex items-center text-5xl md:text-[100px] text-white relative font-black font-rubik uppercase tracking-tighter  ">
                                <span className="relative">K</span>
                                <span>I</span>
                                <span
                                    className="relative z-20"
                                    style={{ WebkitTextStroke: '2px #4A69E2' }}
                                >
                                    C
                                </span>
                                <span className="relative z-10 -ml-2">K</span>
                                <span>S</span>

                                <span className="absolute -top-1 -right-3 md:-top-2 md:-right-5 z-50 
                       flex items-center justify-center 
                       w-4 h-4 md:w-6 md:h-6 
                       bg-yellow rounded-full 
                        ">
                                    <span className="text-blue text-base  font-bold  ">
                                        +
                                    </span>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>


                {/* Dark Sectoin */}
                <div className="bg-dark-gray -mt-20 rounded-[32px] md:rounded-[48px] pt-12 md:pt-10 pb-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-16 relative z-10 mb-20 md:mb-32">


                        <div className=" ">
                            <h3 className="text-yellow text-xl font-bold">About us</h3>
                            <p className=" text-white-gray">
                                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                            </p>
                        </div>


                        <div className="space-y-2">
                            <h3 className="text-yellow text-xl font-bold">Categories</h3>
                            <ul className="text-white space-y-1  ">
                                <li className="hover:text-yellow cursor-pointer">Runners</li>
                                <li className="hover:text-yellow cursor-pointer">Sneakers</li>
                                <li className="hover:text-yellow cursor-pointer">Basketball</li>
                                <li className="hover:text-yellow cursor-pointer">Outdoor</li>
                                <li className="hover:text-yellow cursor-pointer">Golf</li>
                            </ul>
                        </div>


                        <div className="space-y-2">
                            <h3 className="text-yellow text-xl font-bold">Company</h3>
                            <ul className="text-white space-y-1  ">
                                <li className="hover:text-yellow cursor-pointer">About</li>
                                <li className="hover:text-yellow cursor-pointer">Contact</li>
                                <li className="hover:text-yellow cursor-pointer">Blogs</li>
                            </ul>
                        </div>


                        <div className="space-y-2">
                            <h3 className="text-yellow text-xl font-bold">Follow us</h3>
                            <div className="flex gap-4 text-white">
                                <Facebook className="w-6 h-6 hover:text-yellow cursor-pointer" />
                                <Instagram className="w-6 h-6 hover:text-yellow cursor-pointer" />
                                <Twitter className="w-6 h-6 hover:text-yellow cursor-pointer" />
                                <Youtube className="w-6 h-6 hover:text-yellow cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    {/* LOgo Bottom */}
                    <div className='sm:pt-10 lg:pt-20'>
                        <div className="flex items-center justify-center absolute -bottom-[40px] sm:-bottom-[70px] md:-bottom-[100px] lg:-bottom-[160px]  left-1/2 -translate-x-1/2 w-full opacity-100 select-none pointer-events-none">
                            <h1 className="w-full flex items-center justify-center text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px]  font-black font-rubik uppercase   text-white   leading-none">
                                <span className="relative">K</span>
                                <span>I</span>
                                <span
                                    className="relative z-20  "
                                    style={{ WebkitTextStroke: '4px black' }}

                                >
                                    C
                                </span>
                                <span className="relative z-10 -ml-[6%]">K</span>
                                <span  >S</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/*   copy   */}
                <p className="text-dark-gray text-center py-2   text-base">
                    © All rights reserved - KICKS 2026
                </p>
            </div>
        </footer>
    );
}