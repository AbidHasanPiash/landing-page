'use client';
import transitions from '@/animations/transitions';
import { motion } from 'framer-motion';
import HorizontalScroll from '@/components/common/HorizontalScroll';
import Services from '@/components/common/slider/Services';
import images from '@/configs/img.config';

export default function Service() {
    const services = [
        {
            title: "Onboarding",
            description: `We help you onboard the candidates by doing background checks, 
                          extending the offer, and installing our proprietary service culture pathway.`,
            image: {
                main: images.hs.hs_1.main,
                sub: images.hs.hs_1.sub,
            },
        },
        {
            title: "Compliance",
            description: `We handle the compliance issues for you and the candidates. 
                          We make sure contracts are native and efficiently handled.`,
            image: {
                main: images.hs.hs_2.main,
                sub: images.hs.hs_2.sub,
            },
        },
        {
            title: "Team Management",
            description: `We help you better manage your team with strategic consultation, 
                          sprint management, training, and development.`,
            image: {
                main: images.hs.hs_3.main,
                sub: images.hs.hs_3.sub,
            },
        },
        {
            title: "HR Management",
            description: `We take care of the entire HR Management for your remote team, 
                          handling contract fees, attendance, performance evaluations, and more.`,
            image: {
                main: images.hs.hs_4.main,
                sub: images.hs.hs_4.sub,
            },
        },
    ];

    return (
        <section>
            <div className='bg-primary text-white'>
                <motion.h1
                    variants={transitions.FadeInFromBottom}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    className='w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20 py-8 text-4xl lg:text-5xl font-bold'>
                    <p className='max-w-3xl'>
                        We are just getting started, there is more to come...
                    </p>
                </motion.h1>
            </div>
            <div className='lg:hidden'>
                <Services services={services} />
            </div>
            <div className='hidden lg:block'>
                <HorizontalScroll />
            </div>
        </section>
    )
}
