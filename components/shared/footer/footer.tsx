"use client";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function Footer() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        toast.success(`Thank you for subscribing with ${email}!`);
        e.currentTarget.reset();
    };

    // Animation Variants
    const footerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const footerItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <footer className="w-full px-4 pt-8 font-rubik overflow-hidden">
            <div className="mx-auto max-w-7xl space-y-2">

                {/*  CTA  */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-blue rounded-t-[32px] md:rounded-t-[48px] p-8 pb-[100px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    <div className="z-10 text-center md:text-left space-y-4 w-full ">
                        <motion.h2
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-5xl font-[1000] text-white uppercase leading-none text-left "
                        >
                            Join our KicksPlus <br /> Club & get 15% off
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/80 text-base text-left"
                        >
                            Sign up for free! Join the community.
                        </motion.p>
                        <div className="max-w-md mx-auto md:mx-0">
                            <form onSubmit={handleSubmit} className='flex space-x-2 '>
                                <Input
                                    name='email'
                                    placeholder="Email address"
                                    className="bg-transparent border-white/40 text-white placeholder:text-white/60 h-12 rounded-xl focus:ring-yellow"
                                />
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button type='submit' className="bg-[#232321] text-white hover:bg-black h-12 px-8 rounded-xl font-bold uppercase transition-colors">
                                        Submit
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                    </div>

                    {/*   Logo */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="md:block opacity-100 w-full"
                    >
                        <div className="flex items-center justify-start md:justify-center w-full">
                            <h1 className="flex items-center text-5xl md:text-[100px] text-white relative font-black uppercase tracking-tighter">
                                <span>K</span><span>I</span>
                                <span className="relative z-20" style={{ WebkitTextStroke: '2px #4A69E2' }}>C</span>
                                <span className="relative z-10 -ml-2">K</span><span>S</span>
                                <motion.span
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -top-1 -right-3 md:-top-2 md:-right-5 z-50 flex items-center justify-center w-4 h-4 md:w-6 md:h-6 bg-yellow rounded-full"
                                >
                                    <span className="text-blue text-base font-bold">+</span>
                                </motion.span>
                            </h1>
                        </div>
                    </motion.div>
                </motion.div>


                {/*  Footer  */}
                <div className="bg-dark-gray -mt-20 rounded-[32px] md:rounded-[48px] pt-12 md:pt-10 pb-10 relative overflow-hidden">
                    <motion.div
                        variants={footerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 md:px-16 relative z-10 mb-20 md:mb-32"
                    >
                        {/* @ts-ignore */}
                        <motion.div variants={footerItem} className="space-y-4">
                            <h3 className="text-yellow text-xl font-bold">About us</h3>
                            <p className="text-white/70 leading-relaxed">
                                We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                            </p>
                        </motion.div>
                        {/* @ts-ignore */}

                        <motion.div variants={footerItem} className="space-y-4">
                            <h3 className="text-yellow text-xl font-bold">Categories</h3>
                            <ul className="text-white space-y-1">
                                {['Runners', 'Sneakers', 'Basketball', 'Outdoor', 'Golf'].map(item => (
                                    <li key={item} className="hover:text-yellow transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* @ts-ignore */}

                        <motion.div variants={footerItem} className="space-y-4">
                            <h3 className="text-yellow text-xl font-bold">Company</h3>
                            <ul className="text-white space-y-1">
                                {['About', 'Contact', 'Blogs'].map(item => (
                                    <li key={item} className="hover:text-yellow transition-colors cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                        {/* @ts-ignore */}

                        <motion.div variants={footerItem} className="space-y-4">
                            <h3 className="text-yellow text-xl font-bold">Follow us</h3>
                            <div className="flex gap-4 text-white">
                                {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                    <motion.div key={idx} whileHover={{ y: -5, color: '#FFA52F' }}>
                                        <Icon className="w-6 h-6 cursor-pointer" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/*  logo animation */}
                    <div className='sm:pt-10 lg:pt-20'>
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex items-center justify-center absolute -bottom-[40px] sm:-bottom-[70px] md:-bottom-[100px] lg:-bottom-[160px] left-1/2 -translate-x-1/2 w-full opacity-100 select-none pointer-events-none"
                        >
                            <h1 className="w-full flex items-center justify-center text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-black uppercase text-white leading-none">
                                <span>K</span><span>I</span>
                                <span className="relative z-20" style={{ WebkitTextStroke: '4px black' }}>C</span>
                                <span className="relative z-10 -ml-[6%]">K</span><span>S</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-dark-gray text-center py-2 text-base"
                >
                    © All rights reserved - KICKS 2026
                </motion.p>
            </div>
        </footer>
    );
}