'use client'
import React from 'react';
import LearnMore from '@/components/common/LearnMore';
import images from '@/configs/img.config';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Team() {
    const { isMobile } = useMediaQuery();
    return (
        <section
            className="w-full h-full py-28 bg-gradient-to-t md:bg-gradient-to-l from-secondary to-accent"
            // Mobile
            // style={{
            //     background: 'linear-gradient(to top, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)',
            // }}
            // Desktop
            // style={{
            //     background: 'linear-gradient(to left, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)',
            // }}

            style={{
                background: isMobile
                    ? 'linear-gradient(to top, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)' // Mobile gradient
                    : 'linear-gradient(to left, var(--tw-gradient-from) 50%, var(--tw-gradient-to) 50%)', // Desktop gradient
            }}
        >
            <div className="w-full h-full max-w-8xl mx-auto">
                <div className="w-full h-full px-4 md:px-8 lg:px-20 grid lg:grid-cols-2 gap-32">
                    <div className='lg:pr-20 space-y-10 text-background'>
                        <h1 className="text-4xl lg:text-5xl font-bold">Supercharge your team</h1>
                        <p>
                            You want to empower your current team of high performers by adding specialists 
                            with niche experience. Hand-pick the best resources to contribute to the project.
                        </p>
                        <img
                            src={images.team.left.desktop}
                            alt="left.desktop"
                            className='hidden md:block'
                        />
                        <img
                            src={images.team.left.mobile}
                            alt="left.desktop"
                            className='md:hidden block'
                        />
                        <LearnMore/>
                    </div>
                    <div className='lg:pr-20 space-y-10 text-foreground'>
                        <h1 className="text-4xl lg:text-5xl font-bold">Build your dream team</h1>
                        <p>
                            You need to build a team from scratch. You hand-pick resources that align with 
                            your vision and what your project needs. You scale the team as your project grows.
                        </p>
                        <img
                            src={images.team.right.desktop}
                            alt="left.desktop"
                            className='hidden md:block'
                        />
                        <img
                            src={images.team.right.mobile}
                            alt="left.desktop"
                            className='md:hidden block'
                        />
                        <LearnMore/>
                    </div>
                </div>
            </div>
        </section>
    );
}
