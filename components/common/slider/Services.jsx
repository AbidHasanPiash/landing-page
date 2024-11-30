"use client";

import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import transitions from "@/animations/transitions";

export default function ServiceSlider({ services, autoplay = false }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const totalSlides = services.length;

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const animationSettings = {
        initial: { opacity: 1, x: direction === 1 ? 300 : -300 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 1, x: direction === 1 ? -300 : 300 },
        transition: { duration: 0.1, ease: "easeInOut" },
    };

    return (
        <div className={cn("relative w-full h-full overflow-hidden")}>

            <div className="flex items-center justify-between p-4 bg-primary text-background">
                {/* Dots Indicator */}
                <div className="flex space-x-2">
                    {services.map((_, index) => (
                        <span
                            key={index}
                            className={cn(
                                "h-3 aspect-square rounded-full bg-muted-hover",
                                index === currentIndex ? "opacity-100" : "opacity-50"
                            )}
                        />
                    ))}
                </div>
                {/* Navigation Controls */}
                <div className="space-x-3">
                    <button onClick={handlePrev} className="p-1 rounded-lg border">
                        <HiOutlineArrowSmLeft size={24} />
                    </button>
                    <button onClick={handleNext} className="p-1 rounded-lg border">
                        <HiOutlineArrowSmRight size={24} />
                    </button>

                </div>
            </div>

            {/* Slider Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    {...animationSettings}
                    className={cn("w-full h-full p-4 flex flex-col items-center text-center space-y-4 pb-16",
                        currentIndex === 0 && "bg-primary text-background",
                        currentIndex === 1 && "bg-background text-foreground",
                        currentIndex === 2 && "bg-accent text-white",
                        currentIndex === 3 && "bg-primary text-background",
                    )}
                >
                    <div className={cn("w-full h-full flex items-center justify-center")}>
                        <div className='w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20 pt-14 md:pt-20'>
                            <div className='grid md:grid-cols-2 place-items-center gap-10'>
                                <div className='lg:pr-40 space-y-10 text-start'>
                                    <h1 className='w-full max-w-3xl text-3xl lg:text-4xl font-bold'> {services[currentIndex].title} </h1>
                                    <p> {services[currentIndex].description} </p>
                                    <div className='space-y-2'>
                                        <div className='w-full text-3xl font-bold flex items-center justify-between'>
                                            <span className={cn(currentIndex === 2 ? 'text-gray-300' : 'text-accent')}>0{currentIndex + 1}</span>
                                            <span className='text-gray-300'>{currentIndex + 1 === totalSlides ? '' : `0${currentIndex + 2}`}</span>
                                        </div>
                                        <div className='w-full h-1 bg-gray-300' />
                                    </div>
                                </div>
                                <div className='relative flex items-end justify-end w-full h-auto'>
                                    {/* Background Image */}
                                    <motion.img
                                        variants={transitions.ZoomOut}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={services[currentIndex].image.main}
                                        alt="main"
                                        className='w-full max-w-[448px] rounded-2xl'
                                    />
                                    {/* Overlay Image */}
                                    <motion.img
                                        variants={transitions.FadeInFromRight}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={services[currentIndex].image.sub}
                                        alt="sub"
                                        className='absolute w-full max-w-[282px] top-1/2 left-2 -translate-y-1/2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
