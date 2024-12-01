import images from '@/configs/img.config'
import React from 'react'
import { FiCalendar, FiUser } from 'react-icons/fi'

export default function BlogPage() {
    return (
        <section>
            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-20 pb-20'>
                <div className='w-full text-center lg:px-32 mx-auto flex flex-col items-center justify-center py-10 space-y-6 lg:space-y-10'>
                    <h1 className='text-5xl lg:text-7xl font-bold'>Thoughts & ideas around the things that actually matter.</h1>
                    <p className='max-w-3xl mx-auto'>
                        Discover our latest articles, reports, and events to learn more about global employment, remote hiring trends, and global-first business.
                    </p>
                </div>

                <div className='space-y-6 lg:space-y-10'>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-center'> Featured Posts </h1>
                    <div className='grid md:grid-cols-3 gap-10'>
                        <div className='space-y-2'>
                            <img src={images.blog_page.blog_1} alt="blog_1" className='rounded-2xl border' />
                            <h2>Are You Ready For The Future Of Work?</h2>
                            <div>
                                <p className='flex items-center space-x-2'> <FiUser /> <strong>Diat Khan</strong></p>
                                <p className='flex items-center space-x-2'> <FiCalendar /> <span>March 7, 2023</span></p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <img src={images.blog_page.blog_2} alt="blog_2" className='rounded-2xl border' />
                            <h2>Two ways to build your team with Remote Office</h2>
                            <div>
                                <p className='flex items-center space-x-2'> <FiUser /> <strong>Diat Khan</strong></p>
                                <p className='flex items-center space-x-2'> <FiCalendar /> <span>February 13, 2023</span></p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <img src={images.blog_page.blog_3} alt="blog_3" className='rounded-2xl border' />
                            <h2>Ensuring access to top vetted talents</h2>
                            <div>
                                <p className='flex items-center space-x-2'> <FiUser /> <strong>Rupali Singh</strong></p>
                                <p className='flex items-center space-x-2'> <FiCalendar /> <span>February 1, 2023</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
