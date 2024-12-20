'use client'
import React from 'react'
import Link from 'next/link'
import images from '@/configs/img.config'
import Button from '@/components/common/Button'
import TypingAnimation from '@/components/common/TypingAnimation';
import { BsInfoLg } from "react-icons/bs";
import { motion } from 'framer-motion';
import transitions from '@/animations/transitions';
import TiltCardAnimation from '@/components/common/TiltCardAnimation'

export default function Hero() {
    return (
        <section className='w-full h-full lg:h-[calc(100vh-5rem)] max-w-8xl mx-auto'>
            <div className='w-full h-full px-4 md:px-8 lg:px-20 grid lg:grid-cols-2 gap-4'>
                <div className='flex items-center py-16'>
                    <div className='w-full space-y-8 lg:pr-20'>
                        <div className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-start'>
                            <h1>Build and Manage Global</h1>
                            <TypingAnimation
                                words={[
                                    'Compliances',
                                    'HR Operations',
                                    'Remote Teams',
                                ]}
                            />
                        </div>
                        <motion.p 
                            variants={transitions.FadeInFromRight}
                            initial="initial"
                            animate="animate"
                            className='text-xl lg:text-2xl text-center lg:text-start'>
                            We are an end-to-end remoteOps platform that solves all things global HR
                        </motion.p>
                        <div className='flex items-center justify-center lg:justify-start'>
                            <div>
                                <Button className={'px-8 py-3 font-bold'}>Looking for talent</Button>
                                <div className='flex items-end'>
                                    <img src={images.hero.arrow_down_right} alt="talent_Acquisition" />
                                    <Link href={'#'} className='-mb-2 px-2 py-1 rounded-full flex items-center space-x-1 bg-muted'>
                                        <BsInfoLg />
                                        <span>Pay only for results</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-full grid place-content-center p-2'>
                    <div className="relative">
                        {/* Sphere Image */}
                        <TiltCardAnimation>
                            <img src={images.hero.sphere} alt="sphere" className="z-10 lg:z-0 py-10 lg:py-0" />
                        </TiltCardAnimation>

                        {/* Overlaying Images with Animations */}
                        <motion.div
                            variants={transitions.FadeInFromBottom}
                            initial="initial"
                            animate="animate"
                            className="absolute -z-10 lg:z-0 -top-4 left-0 lg:top-24 xl:top-32 lg:left-8 w-48"
                        >
                            <TiltCardAnimation>
                                <img src={images.hero.card_1} alt="card_1" />
                            </TiltCardAnimation>
                        </motion.div>

                        <motion.div
                            variants={transitions.FadeInFromBottom}
                            initial="initial"
                            animate="animate"
                            className="absolute bottom-0 right-0 lg:bottom-0 xl:bottom-16 lg:left-48 xl:left-64 w-48"
                            custom={{ delay: 0.3 }}
                        >
                            <TiltCardAnimation>
                                <img src={images.hero.card_2} alt="card_2" />
                            </TiltCardAnimation>
                        </motion.div>

                        <motion.div
                            variants={transitions.FadeInFromRight}
                            initial="initial"
                            animate="animate"
                            className="hidden lg:block absolute top-16 right-4"
                            custom={{ delay: 1 }}
                        >
                            <TiltCardAnimation>
                                <img src={images.hero.people} alt="people" className="h-24" />
                            </TiltCardAnimation>
                        </motion.div>

                        <motion.img
                            src={images.hero.talent_Acquisition}
                            alt="talent_Acquisition"
                            className="hidden lg:block absolute top-12 left-2 h-10 hover:scale-125 transition-all duration-200"
                            variants={transitions.FadeInWithBlur}
                            initial="initial"
                            animate="animate"
                            custom={{ delay: 2 }}
                        />

                        <motion.img
                            src={images.hero.virtual_hr}
                            alt="virtual_hr"
                            className="hidden lg:block absolute top-1/2 right-4 h-10 hover:scale-125 transition-all duration-200"
                            variants={transitions.FadeInWithBlur}
                            initial="initial"
                            animate="animate"
                            custom={{ delay: 2 }}
                        />

                        <motion.img
                            src={images.hero.compliance}
                            alt="compliance"
                            className="hidden lg:block absolute lg:top-44 xl:top-60 lg:left-44 xl:left-52 h-10 hover:scale-125 transition-all duration-200"
                            variants={transitions.FadeInWithBlur}
                            initial="initial"
                            animate="animate"
                            custom={{ delay: 2 }}
                        />

                        <motion.img
                            src={images.hero.virtual_team_management}
                            alt="virtual_team_management"
                            className="hidden lg:block absolute lg:bottom-24 xl:bottom-28 left-0 h-10 hover:scale-125 transition-all duration-200"
                            variants={transitions.FadeInWithBlur}
                            initial="initial"
                            animate="animate"
                            custom={{ delay: 2 }}
                        />
                    </div>
                </div>

                <div className='lg:hidden w-full my-10 grid grid-cols-2 gap-4 place-items-center'>
                    <div className='w-full h-full p-4 space-y-4 rounded-xl flex flex-col items-center justify-center bg-secondary-hover'>
                        <img src={images.hero.search} alt="search" />
                        <h2 className='font-bold text-center text-xl'>Talent Acquisition</h2>
                    </div>
                    <div className='w-full h-full p-8 space-y-4 rounded-xl flex flex-col items-center justify-center bg-secondary-hover'>
                        <img src={images.hero.board} alt="board" />
                        <h2 className='font-bold text-center text-xl'>Virtual HR</h2>
                    </div>
                    <div className='w-full h-full p-8 space-y-4 rounded-xl flex flex-col items-center justify-center bg-secondary-hover'>
                        <img src={images.hero.file} alt="file" />
                        <h2 className='font-bold text-center text-xl'>Compliance</h2>
                    </div>
                    <div className='w-full h-full p-8 space-y-4 rounded-xl flex flex-col items-center justify-center bg-secondary-hover'>
                        <img src={images.hero.network} alt="network" />
                        <h2 className='font-bold text-center text-xl'>Virtual Team Management</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
