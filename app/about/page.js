'use client'

import Button from '@/components/common/Button'
import images from '@/configs/img.config'
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import React from 'react'
const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: false });

export default function AboutPage() {

    // Team member data
    const teamMembers = [
        {
            name: 'Diat',
            role: 'Founder & CEO',
            description: 'Startup savvy and data-driven growth hacker, 10+ years of experience in solving business pain points through tailored digital solutions.',
            image: images.about.team_1,
        },
        {
            name: 'Rakesh',
            role: 'CFO',
            description: 'Experienced operations leader, passionate about driving efficiencies and optimizing workflows for global teams.',
            image: images.about.team_2,
        },
        {
            name: 'Hasin',
            role: 'Director',
            description: 'Tech visionary with a focus on scaling platforms and leading technical innovation across diverse teams.',
            image: images.about.team_3,
        },
        {
            name: 'Gideon',
            role: 'CTO',
            description: 'Creative marketer with a knack for building brand awareness and generating impactful digital strategies.',
            image: images.about.team_4,
        },
        {
            name: 'Nahian',
            role: 'Sr. Manager | Business Operations',
            description: 'Creative marketer with a knack for building brand awareness and generating impactful digital strategies.',
            image: images.about.team_5,
        },
        {
            name: 'Ashik',
            role: 'Service Lead | Technology',
            description: 'Creative marketer with a knack for building brand awareness and generating impactful digital strategies.',
            image: images.about.team_6,
        },
        {
            name: 'Rupali',
            role: 'Service Lead | Marketing',
            description: 'Creative marketer with a knack for building brand awareness and generating impactful digital strategies.',
            image: images.about.team_7,
        },
        {
            name: 'Meeta',
            role: 'HR Manager',
            description: 'Creative marketer with a knack for building brand awareness and generating impactful digital strategies.',
            image: images.about.team_8,
        },
    ];

    return (
        <section>
            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-20'>
                <div className='w-full max-w-5xl lg:px-32 mx-auto flex flex-col items-center justify-center py-10 space-y-6 lg:space-y-10'>
                    <h1 className='text-5xl lg:text-7xl font-bold'>About Us</h1>
                    <p className='text-center'>
                        Welcome to Remote Office - Your Gateway to Exceptional Global Team Building.
                        Experience the ease of assembling and managing a high-performing remote team
                        with our comprehensive platform. We specialise in connecting you with elite
                        global talent, streamlining compliance and HR processes, and providing expert
                        advice to enhance team efficiency and output. Embark on a journey to elevate
                        your team dynamics with Remote Office. Start building your ultimate remote team today.
                    </p>
                    <Button className={'px-8 py-3 font-bold'}>Get Started</Button>
                    <div className='w-full aspect-video'>
                        <iframe
                            className='w-full h-full rounded-2xl shadow-lg'
                            src='https://www.youtube.com/embed/1WeclLvDz04'
                            title='YouTube video'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='space-y-6 lg:space-y-10'>
                        <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold lg:max-w-5xl'>
                            Global Talent, Exceptional Teams: <br className='hidden lg:block' /> Crafting the Future of Remote Work with Precision and Passion
                        </h1>
                        <p className='lg:max-w-5xl'>
                            At Remote Office, we recognise the critical importance of assembling the perfect team,
                            a blend of exceptional talents and unwavering dedication. Our global search targets
                            individuals who possess not only the necessary skills but also the ambition and drive
                            to collaborate with leading companies worldwide. Our Platform as a Service transcends
                            traditional matchmaking. It intricately aligns companies with candidates, fostering
                            synergies that thrive in a remote work environment. Beyond mere connections, we
                            empower teams by providing key insights and strategic guidance, ensuring that every
                            remote team realises its full potential in achieving business-critical objectives.
                        </p>

                        <div className='grid md:grid-cols-2 lg:grid-cols-1 place-items-center lg:place-items-start'>
                            <div className='w-full max-w-2xl my-10 grid grid-cols-2 gap-4 place-items-start'>
                                <div className='w-full h-full p-4 lg:p-8 space-y-4 rounded-3xl bg-muted-hover'>
                                    <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>3x</h1>
                                    <h2 className='font-bold text-xl'>Faster Onboarding</h2>
                                </div>
                                <div className='w-full h-full p-4 lg:p-8 space-y-4 rounded-3xl bg-muted-hover'>
                                    <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>20K+</h1>
                                    <h2 className='font-bold text-xl'>Verified Professionals</h2>
                                </div>
                                <div className='w-full h-full p-4 lg:p-8 space-y-4 rounded-3xl bg-muted-hover'>
                                    <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>8+</h1>
                                    <h2 className='font-bold text-xl'>Nationalities</h2>
                                </div>
                                <div className='w-full h-full p-4 lg:p-8 space-y-4 rounded-3xl bg-muted-hover'>
                                    <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold'>99%</h1>
                                    <h2 className='font-bold text-xl'>Success Rate</h2>
                                </div>
                            </div>
                            <div className='hidden lg:hidden w-full md:flex items-end justify-end'>
                                <img src={images.about.clock} alt="clock" className='w-64 h-auto' />
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex items-end justify-end'>
                        <img src={images.about.clock} alt="clock" className='w-96 h-auto' />
                    </div>
                </div>

                <div className='space-y-20 pb-20'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-center'>Our Team Members</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                        {teamMembers.map((member, index) => (
                            <div key={index}>
                                {/* image */}
                                <div className='relative'>
                                    <div><img src={member.image} alt="team_1" className='h-72 object-cover rounded-3xl overflow-hidden' /></div>
                                    <div className={cn(
                                        'absolute bottom-0 -z-10 w-full h-44 rounded-3xl',
                                        index % 2 === 0
                                            ? 'bg-gradient-to-t from-lime-500 to-muted-hover'
                                            : 'bg-gradient-to-t from-accent to-accent'
                                    )} />
                                </div>
                                {/* details */}
                                <div>
                                    <p className="text-xl font-bold">{member.name}</p>
                                    <p className="text-sm text-muted-foreground uppercase font-medium opacity-50">{member.role}</p>
                                    <p className="text-sm mt-2">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Testimonials />

            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-20 mb-20'>
                <div className='rounded-3xl bg-muted-hover px-10 pt-10 lg:px-20 lg:pt-20 space-y-10'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center font-semibold'>Let's discover your team</h1>
                    <p className='text-center font-semibold'>
                        At Remote Office, we understand that the right team is the cornerstone of business growth. That's why we've transformed team building into an art, effortlessly guiding you through finding the perfect fit. Imagine shaping your ideal team from anywhere, with the expertise of a virtual HR partner at your fingertips. Our platform isn't just about team creation; it's a strategic ally in your journey to scale and succeed. Engage with our obligation-free tool and experience the power of tailored team-building, designed to address your unique business needs.
                    </p>
                    <Button className={'px-8 py-3 font-bold'}>Get Started</Button>
                    <img src={images.about.team_map} alt="team_map" className='w-full h-auto max-w-3xl mx-auto' />
                </div>
            </div>
        </section>
    )
}
