'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';

export default function OrderConfirmationModal({
    orderNumber,
    onClose

}: {
    orderNumber: string;
    onClose: () => void
}) {


    // Clear Cart
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch({ type: 'cart/clearCart' });
        onClose();
    }

    return (
        <div className="relative w-full bg-white rounded-[40px] p-8 font-rubik overflow-hidden">


            <div className="flex flex-col items-center text-center">
                {/*   Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="w-24 h-24 bg-yellow flex items-center justify-center rounded-[32px] mb-6  "
                >
                    <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 className="text-4xl font-black text-dark-gray leading-none mb-3">
                        Order  Confirmed
                    </h2>
                    <p className="text-dark-gray/60 font-medium mb-8">
                        Your order has been placed successfully.
                    </p>
                </motion.div>

                {/* Order Details  */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-white-gray rounded-3xl p-6 mb-8  "
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-dark-gray/40 uppercase tracking-widest">Transaction ID</span>
                        <span className="font-black text-dark-gray text-sm">#{orderNumber}</span>
                    </div>
                    <div className="h-[1px] w-full bg-gray-200 my-4" />
                    <p className="text-left text-xs text-dark-gray/50 ">
                        A confirmation email has been sent to your registered email address with the tracking link.
                    </p>
                </motion.div>

                {/* actions */}
                <div className="w-full space-y-3">


                    <Button
                        variant="ghost"
                        onClick={handleClose}
                        className="w-full h-12 text-dark-gray/60 font-bold uppercase hover:bg-gray-50 rounded-xl"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}