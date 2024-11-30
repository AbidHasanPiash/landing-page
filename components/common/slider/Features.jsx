"use client";

import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import images from "@/configs/img.config";

export default function Features({ features, autoplay = false }) {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const handleNext = () => {
        setDirection(1); // Moving forward
        setActive((prev) => (prev + 1) % features.length);
    };

    const handlePrev = () => {
        setDirection(-1); // Moving backward
        setActive((prev) => (prev - 1 + features.length) % features.length);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000); // Auto-play every 5 seconds
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    // Animation settings
    const animationSettings = {
        initial: { opacity: 0, x: direction === 1 ? 300 : -300 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction === 1 ? -300 : 300 },
        transition: { duration: 0.1, ease: "easeInOut" }, // Smooth easing
    };

    return (
        <div className="relative w-full bg-background/80 rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={active} {...animationSettings}>
                    {/* Grid Structure for Mobile View */}
                    <div className="w-full font-semibold">
                        <h1 className="text-nowrap text-center bg-background py-4">{features[active].title}</h1>
                        
                        <p className="text-nowrap text-center p-4 grid grid-cols-2 w-full place-items-center">
                            <span className="w-full text-start">Freelance Market</span>
                            <span>{features[active].col1}</span>
                        </p>
                        <div className="text-nowrap text-center bg-background p-4 mx-4 rounded-lg grid grid-cols-2 w-full place-items-center">
                            <div className="w-full text-start">
                                <img src={images.logo} alt="logo" className='h-8' />
                            </div>
                            <span className="pr-8">{features[active].col2}</span>
                        </div>
                        <p className="text-nowrap text-center p-4 grid grid-cols-2 w-full place-items-center">
                            <span className="w-full text-start">In-house</span>
                            <span>{features[active].col3}</span>
                        </p>
                        <p className="text-nowrap text-center p-4 grid grid-cols-2 w-full place-items-center">
                            <span className="w-full text-start">Agencies</span>
                            <span>{features[active].col4}</span>
                        </p>
                        {/* {JSON.stringify(features[active], null, 2)} */}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
                <button onClick={handlePrev} className="p-4">
                    <HiOutlineArrowSmLeft className="h-6 w-6" />
                </button>
                <button onClick={handleNext} className="p-4">
                    <HiOutlineArrowSmRight className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
