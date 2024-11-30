"use client";

import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import images from "@/configs/img.config";

export default function Testimonial({ testimonials, autoplay = false }) {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const handleNext = () => {
        setDirection(1); // Moving to the next testimonial
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1); // Moving to the previous testimonial
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    return (
        <div className="relative h-[750px] lg:h-[550px] flex flex-col py-20">
            <div className="flex flex-grow">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Section Title */}
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Clients say
                    </h2>
                    {/* Testimonial Text */}
                    <div className="overflow-hidden lg:col-span-2 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-10">
                        <img
                            src={images.quote}
                            alt="look.image"
                            className="w-8 lg:w-auto aspect-square"
                        />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: direction === 1 ? 300 : -300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction === 1 ? -300 : 300 }}
                                transition={{ duration: 0.1 }}
                                className="space-y-10 lg:space-y-20"
                            >
                                <p className="text-lg lg:text-2xl">
                                    {testimonials[active].quote}
                                </p>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-10 lg:mt-8">
                                    <img
                                        src={testimonials[active].src}
                                        alt={testimonials[active].name}
                                        className="h-24 aspect-square rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-bold">{testimonials[active].name}</p>
                                        <p className="text-sm">{testimonials[active].designation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-between items-center gap-6 w-full px-4">
                <button onClick={handlePrev}>
                    <HiOutlineArrowSmLeft className="h-6 w-6 lg:h-14 lg:w-14" />
                </button>
                <button onClick={handleNext}>
                    <HiOutlineArrowSmRight className="h-6 w-6 lg:h-14 lg:w-14" />
                </button>
            </div>
        </div>
    );
}
