'use client'
import React from 'react'
import { motion } from 'framer-motion'
import transitions from '@/animations/transitions'
import images from '@/configs/img.config'
import LearnMore from '@/components/common/LearnMore'

export default function Blog() {
    return (
        <section className='bg-primary text-background'>
            <div className='bg-primary lg:sticky lg:top-14 lg:md:top-20 z-10 '>
                <motion.h1
                    variants={transitions.FadeInFromBottom}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    className='w-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20 py-16 text-4xl lg:text-5xl font-bold'>
                    <p className='max-w-3xl'>
                        Ensuring access to top vetted talents
                    </p>
                </motion.h1>
            </div>

            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-10'>
                
                {/* Blog 1 */}
                <BlogContainer
                    title={'Ad blueprint with credits + internal community'}
                    description={`
                        We provide you with a proven ad blueprint to attract
                        the best talents for your business. Plus, you get free
                        credits to post your jobs on popular platforms like
                        LinkedIn, Indeed, and Monster. And as a bonus, you get
                        access to our exclusive community of over 30,000 pre-vetted
                        professionals from around the world.
                    `}
                    group={
                        <div className='relative flex items-end justify-end w-full h-auto'>
                            {/* Background Image */}
                            <img
                                src={images.blog.blog_1.main}
                                alt="main"
                                className='w-full max-w-[400px] lg:max-w-[479px] rounded-xl'
                            />
                            {/* Overlay Image */}
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_1.sub}
                                alt="sub"
                                className='absolute w-full max-w-[400px] lg:max-w-[479px] top-2 left-2 rounded-lg'
                            />
                        </div>
                    }
                />
                
                {/* Blog 2 */}
                <BlogContainer
                    title={'Screening, grading and assessment'}
                    description={`
                        We reach out to candidates who match your requirements and take 
                        them through a bespoke screening, grading, and assessment process. 
                        We use comprehensive and rigorous criteria to evaluate their skills, 
                        experience, and fit for your business. We ensure that only the best 
                        talents make it to the next stage.
                    `}
                    group={
                        <div className='relative flex items-end justify-end w-full h-auto'>
                            {/* Background Image */}
                            <img
                                src={images.blog.blog_2.main}
                                alt="main"
                                className='w-full max-w-[400px] lg:max-w-[479px] rounded-xl'
                            />
                            {/* Overlay Image */}
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_2.sub_1}
                                alt="sub"
                                className='absolute w-full max-w-[179px] lg:max-w-[179px] top-2 left-2 rounded-lg'
                            />
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_2.sub_2}
                                alt="sub"
                                className='absolute w-full max-w-[229px] lg:max-w-[229px] bottom-5 lg:bottom-10 right-10 lg:left-20 rounded-lg'
                            />
                            <motion.img
                                variants={transitions.FadeInFromLeft}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_2.sub_3}
                                alt="sub"
                                className='absolute w-full max-w-[229px] lg:max-w-[229px] top-1/3 lg:top-1/2 left-0 lg:left-auto lg:-right-20 rounded-lg'
                            />
                        </div>
                    }
                />
                
                {/* Blog 3 */}
                <BlogContainer
                    title={'Machine-led interview'}
                    description={`
                        Our platform allows the candidates to showcase their skills 
                        and personality conveniently and flexibly. We then evaluate 
                        their performance both by our hiring team and by you. This 
                        ensures that you only meet with candidates who match your 
                        preferences and expectations.
                    `}
                    group={
                        <div className='relative flex items-end justify-end w-full h-auto'>
                            {/* Background Image */}
                            <img
                                src={images.blog.blog_3.main}
                                alt="main"
                                className='w-full max-w-[400px] lg:max-w-[479px] rounded-xl'
                            />
                            {/* Overlay Image */}
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_3.sub}
                                alt="sub"
                                className='absolute w-full max-w-[200px] lg:max-w-[239px] left-0 top-20 lg:top-auto lg:bottom-20 rounded-lg'
                            />
                        </div>
                    }
                />
                
                {/* Blog 4 */}
                <BlogContainer
                    title={'Technical challenge'}
                    description={`
                        We assist you in conducting the technical test through 
                        our outlined discipline. We co-create a tailored challenge 
                        relevant to the skills you need. Our platform allows 
                        the candidates to complete the challenge in a realistic 
                        and interactive environment. This allows you to review 
                        the code quality, logic, and efficiency of the candidates.
                    `}
                    group={
                        <div className='relative flex items-end justify-end w-full h-auto'>
                            {/* Background Image */}
                            <img
                                src={images.blog.blog_4.main}
                                alt="main"
                                className='w-full max-w-[400px] lg:max-w-[479px] rounded-xl'
                            />
                            {/* Overlay Image */}
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_4.sub}
                                alt="sub"
                                className='absolute w-full max-w-[200px] lg:max-w-[239px] right-auto left-0 lg:left-auto lg:-right-20 top-20 rounded-lg'
                            />
                        </div>
                    }
                />
                
                {/* Blog 5 */}
                <BlogContainer
                    title={'Client review'}
                    description={`
                        Our platform encapsulates all the data and feedback from 
                        the previous stages, so you can easily compare and evaluate 
                        the candidates. You only go for a face-to-face interview 
                        with the candidates that you feel have met all the criteria 
                        so far. This contributes to hiring the right fit at the right time.
                    `}
                    group={
                        <div className='relative flex items-end justify-end w-full h-auto'>
                            {/* Background Image */}
                            <img
                                src={images.blog.blog_5.main}
                                alt="main"
                                className='w-full max-w-[400px] lg:max-w-[479px] rounded-xl'
                            />
                            {/* Overlay Image */}
                            <motion.img
                                variants={transitions.FadeInFromRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.5 }}
                                src={images.blog.blog_5.sub}
                                alt="sub"
                                className='absolute w-full max-w-[200px] lg:max-w-[239px] left-0 top-20 rounded-lg'
                            />
                        </div>
                    }
                />
            </div>
        </section>
    )
}

function BlogContainer({ title, description, link, group }) {
    return (
        <div className='grid md:grid-cols-2 gap-10 place-items-center pb-20'>
            <motion.div
                variants={transitions.FadeInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                className='lg:pr-20 space-y-10'
            >
                <h1 className='w-full max-w-3xl text-3xl lg:text-4xl font-bold'> {title} </h1>
                <p className='opacity-50'> {description} </p>
                <LearnMore link={link}/>
            </motion.div>
            {group}
        </div>
    )
}
