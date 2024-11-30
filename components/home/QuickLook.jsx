import images from '@/configs/img.config'
import React from 'react'

export default function QuickLook() {
  return (
    <section className='w-full h-full lg:py-28 bg-primary text-background'>
        <div className="w-full h-full max-w-8xl mx-auto">
            <div className="w-full h-full px-4 md:px-8 lg:px-20 grid lg:grid-cols-2">
                <div className='space-y-4 lg:pr-28 flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-start'>
                    <img
                        src={images.look.image}
                        alt="look.image"
                        className='-mt-10 lg:m-0'
                    />
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        Take a 
                        <br className='hidden lg:block'/> 
                        quick look 
                        <br className='hidden lg:block'/> 
                        at our platform
                    </h1>
                    <p>You want to empower your current team of high performers by adding specialists with niche experience. Hand-pick the best resources to contribute to the project.</p>
                </div>
                <div>
                    video
                </div>
            </div>
        </div>
    </section>
  )
}