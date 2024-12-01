import Button from '@/components/common/Button';
import images from '@/configs/img.config';
import React from 'react'
import { FiGitBranch } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoShieldCheck } from "react-icons/go";
import { LuSearch } from "react-icons/lu";

export default function CareerPage() {
    const posts = [
        {
            icon: images.career.career_1,
            title: 'Virtual Assistant (Marketing)',
            tags: ['Full Time', 'Remote'],
            location: 'Full-time, Remote',
            department: 'Back Office',
            experience: '1-2 Years',
        },
        {
            icon: images.career.career_2,
            title: 'Full Stack Developer (Node.js & .NET)',
            tags: ['Full Time', 'Remote'],
            location: 'Full-time, Remote',
            department: 'Development',
            experience: '5-7 Years',
        },
        {
            icon: images.career.career_1,
            title: 'Estimator',
            tags: ['Full Time', 'Remote'],
            location: 'Full-time, Remote',
            department: 'Back Office',
            experience: '5-7 Years',
        },
        {
            icon: images.career.career_2,
            title: 'Unit Tester',
            tags: ['Full Time', 'Remote'],
            location: 'Full-time, Remote',
            department: 'Development',
            experience: '5-7 Years',
        },
        {
            icon: images.career.career_2,
            title: 'Full Stack Developer (React.js & PHP)',
            tags: ['Full Time', 'Remote'],
            location: 'Full-time, Remote',
            department: 'Development',
            experience: '5-7 Years',
        },
        {
            icon: images.career.career_3,
            title: 'Appointment Setter',
            tags: ['Full Time', 'Remote'],
            location: 'Part Time, Remote',
            department: 'Sales Enablement',
            experience: '3-4 Years',
        },
    ]
    return (
        <section>
            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-20 pb-20'>
                <div className='w-full text-center lg:px-32 mx-auto flex flex-col items-center justify-center py-10 space-y-6 lg:space-y-10'>
                    <h1 className='text-5xl lg:text-7xl font-bold'>Career At Remote Office</h1>
                    <p className='max-w-3xl mx-auto'>
                        As a team, we believe success is a product of the combined skills,
                        talents, and expertise of our people working together while learning,
                        growing, and innovating. If any of the jobs posted below looks
                        like your forte, do not hesitate to apply.
                    </p>
                </div>

                <div className='space-y-6 lg:space-y-10 max-w-5xl mx-auto'>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-center'> Current Openings </h1>
                    <div className='w-full max-w-xl mx-auto border rounded-md'>
                        <label className='flex items-center space-x-12 px-2 py-3'>
                            <LuSearch className='text-lime-300 text-3xl' />
                            <input type="text" name="" placeholder='Search hear...' className='border-none outline-none bg-transparent' />
                        </label>
                    </div>
                    <div className='grid gap-5'>
                        {posts.map((post, index) => (
                            <div key={index} className='flex justify-between space-x-2 border rounded-xl p-5'>
                                <img src={post.icon} alt={'icon-' + index} className='h-12 aspect-square' />

                                <div className='w-full space-y-3'>
                                    <h2 className='text-2xl font-semibold'>{post.title}</h2>
                                    <div className='flex items-center space-x-2'>
                                        {post.tags.map(tag => <div className='w-fit px-2 py-1 rounded-md bg-secondary/40'>{tag}</div>)}
                                    </div>
                                    <div className='flex items-center divide-x divide-gray-300'>
                                        <p className='flex items-center space-x-1 pr-2'>
                                            <span><HiOutlineLocationMarker /></span>
                                            <span>{post.location}</span>
                                        </p>
                                        <p className='flex items-center space-x-1 px-2'>
                                            <span><FiGitBranch /></span>
                                            <span>{post.department}</span>
                                        </p>
                                        <p className='flex items-center space-x-1 px-2'>
                                            <span><GoShieldCheck /></span>
                                            <span>{post.experience}</span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <Button className={'px-6 py-2 font-bold'}>Apply</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='max-w-8xl mx-auto w-full h-full px-4 md:px-8 lg:px-20 space-y-20 mb-20'>
                <div className='rounded-3xl bg-muted-hover px-10 pt-10 lg:px-20 lg:pt-20 space-y-10 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl lg:text-3xl xl:text-4xl text-center font-semibold'>Don't see a position for you?</h1>
                    <p className='text-center font-semibold'>
                        Remote Office is always looking for great talents. Go ahead and send an application! We'll contact you.
                    </p>
                    <Button className={'px-8 py-3 font-bold'}>Submit Application</Button>
                    <img src={images.about.team_map} alt="team_map" className='w-full h-auto max-w-3xl mx-auto' />
                </div>
            </div>
        </section>
    )
}
