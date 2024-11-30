'use client';

import { motion } from 'framer-motion';

export default function ProgressingScroll({ scrollYProgress }) {
    return (
        <div className="flex items-center justify-center w-full">
            <figure className="progress relative w-full">
                <svg height="8" width="100%" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Line */}
                    <line x1="0" y1="10" x2="100%" y2="10" className="bg stroke-gray-200 fill-none stroke-[10]" />
                    
                    {/* Animated Progress Line */}
                    <motion.line
                        x1="0"
                        y1="10"
                        x2="100%"
                        y2="10"
                        className="indicator stroke-blue-500 fill-none stroke-[10]"
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>
            </figure>
        </div>
    );
}
