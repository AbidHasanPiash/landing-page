'use client';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import transitions from '@/animations/transitions';
import images from '@/configs/img.config';
import { cn } from '@/lib/utils';
import ProgressingScroll from './ProgressingScroll';

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    // const { scrollYProgress } = useScroll({ target: targetRef });
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);



    // Use scroll hook to track scroll progress on the target section
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Map vertical scroll progress to horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

     // Apply spring smoothing to the scroll progress
     const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    
    return (
        <section>
            <div ref={targetRef} className="relative h-[400vh]">
                {/* Sticky container for horizontal scrolling */}
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex w-[400vw]" // 4 screens wide
                    >
                        {/* Screen 1 */}
                        <Screen
                            className={'bg-primary text-white'}
                            title={'Onboarding'}
                            description={`
                                We help you onboard the candidates by doing background checks, 
                                extending the offer, and installing our proprietary service 
                                culture pathway. We ensure a smooth and hassle-free transition 
                                for you and the candidates.
                            `}
                            number={
                                <div className='space-y-2'>
                                    <div className='w-full text-3xl font-bold flex items-center justify-between'>
                                        <span className='text-accent'>01</span>
                                        <span className='text-gray-300'>02</span>
                                    </div>
                                    {/* Scroll Indicator Items */}
                                    <ProgressingScroll scrollYProgress={smoothScrollYProgress} />
                                </div>
                            }
                            group={
                                <div className='relative flex items-end justify-end w-full h-auto'>
                                    {/* Background Image */}
                                    <motion.img
                                        variants={transitions.ZoomOut}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_1.main}
                                        alt="main"
                                        className='w-full max-w-[448px] rounded-2xl'
                                    />
                                    {/* Overlay Image */}
                                    <motion.img
                                        variants={transitions.FadeInFromRight}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_1.sub}
                                        alt="sub"
                                        className='absolute w-full max-w-[282px] top-1/2 left-2 -translate-y-1/2'
                                    />
                                </div>
                            }
                        />

                        {/* Screen 2 */}
                        <Screen
                            className={'bg-background text-foreground'}
                            title={'Compliance'}
                            description={`
                                We handle the compliance issues for you and the candidates. 
                                We make sure contracts are native and efficiently handled 
                                to safeguard integrity, confidentiality, continuity, and effectivity.
                            `}
                            number={
                                <div className='space-y-2'>
                                    <div className='w-full text-3xl font-bold flex items-center justify-between'>
                                        <span className='text-accent'>02</span>
                                        <span className='text-gray-300'>03</span>
                                    </div>
                                    {/* Scroll Indicator Items */}
                                    <ProgressingScroll scrollYProgress={smoothScrollYProgress} />
                                </div>
                            }
                            group={
                                <div className='relative flex items-end justify-end w-full h-auto'>
                                    {/* Background Image */}
                                    <motion.img
                                        variants={transitions.ZoomOut}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_2.main}
                                        alt="main"
                                        className='w-full max-w-[448px] rounded-2xl'
                                    />
                                    {/* Overlay Image */}
                                    <motion.img
                                        variants={transitions.FadeInFromRight}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_2.sub}
                                        alt="sub"
                                        className='absolute w-full max-w-[282px] top-5 left-2'
                                    />
                                </div>
                            }
                        />

                        {/* Screen 3 */}
                        <Screen
                            className={'bg-accent text-white'}
                            title={'Team Management'}
                            description={`
                                We help you better manage your team with strategic consultation, 
                                sprint management, training and development, and reporting 
                                standard management. We suggest the best practices and tools 
                                to optimize your remote team’s performance and productivity.
                            `}
                            number={
                                <div className='space-y-2'>
                                    <div className='w-full text-3xl font-bold flex items-center justify-between'>
                                        <span className='text-background'>03</span>
                                        <span className='text-gray-300'>04</span>
                                    </div>
                                    {/* Scroll Indicator Items */}
                                    <ProgressingScroll scrollYProgress={smoothScrollYProgress} />
                                </div>
                            }
                            group={
                                <div className='relative flex items-end justify-end w-full h-auto'>
                                    {/* Background Image */}
                                    <motion.img
                                        variants={transitions.ZoomOut}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_3.main}
                                        alt="main"
                                        className='w-full max-w-[448px] rounded-2xl'
                                    />
                                    {/* Overlay Image */}
                                    <motion.img
                                        variants={transitions.FadeInFromRight}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_3.sub}
                                        alt="sub"
                                        className='absolute w-full max-w-[282px] bottom-10 left-2'
                                    />
                                </div>
                            }
                        />

                        {/* Screen 4 */}
                        <Screen
                            className={'bg-primary text-white'}
                            title={'HR Management'}
                            description={`
                                We take care of the entire HR Management for your remote team. 
                                We handle the contract fees, attendance, leaves, holiday calendars, 
                                performance evaluation, and appraisals. We ensure that your 
                                team is happy, motivated, and productive.
                            `}
                            number={
                                <div className='space-y-2'>
                                    <div className='w-full text-3xl font-bold flex items-center justify-between'>
                                        <span className='text-accent'>04</span>
                                    </div>
                                    {/* Scroll Indicator Items */}
                                    <ProgressingScroll scrollYProgress={smoothScrollYProgress} />
                                </div>
                            }
                            group={
                                <div className='relative flex items-end justify-end w-full h-auto'>
                                    {/* Background Image */}
                                    <motion.img
                                        variants={transitions.ZoomOut}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_4.main}
                                        alt="main"
                                        className='w-full max-w-[448px] rounded-2xl'
                                    />
                                    {/* Overlay Image */}
                                    <motion.img
                                        variants={transitions.FadeInFromRight}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true, amount: 0.5 }}
                                        src={images.hs.hs_4.sub}
                                        alt="sub"
                                        className='absolute w-full max-w-[282px] top-10 -right-20'
                                    />
                                </div>
                            }
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Screen = ({ className, title, description, number, group }) => {
    return (
        <div className={cn("w-screen h-screen flex items-center justify-center", className)}>
            <div className='w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20 pt-14 md:pt-20'>
                <div className='grid md:grid-cols-2 place-items-center gap-10'>
                    <div className='lg:pr-40 space-y-10'>
                        <h1 className='w-full max-w-3xl text-3xl lg:text-4xl font-bold'> {title} </h1>
                        <p> {description} </p>
                        {number && number}
                    </div>
                    <div>
                        {group && group}
                    </div>
                </div>
            </div>
        </div>
    );
};
