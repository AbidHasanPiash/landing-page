import React from 'react'
import Button from '@/components/common/Button'
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import images from '@/configs/img.config';

export default function WhyRemote() {
    return (
        <section className='w-full h-full lg:py-28 bg-muted-hover text-foreground'>
            <div className="w-full h-full max-w-8xl mx-auto">
                <div className="w-full h-full px-4 md:px-8 lg:px-20 grid lg:grid-cols-3 gap-10 place-items-center">
                    <div className='lg:col-span-2'>
                        
                        <div className='grid grid-cols-5 font-semibold'>
                            <div className='px-4 py-6 bg-background/80 rounded-tl-lg mb-0.5 mt-4'></div>
                            <div className='px-4 py-6 bg-background/80 mb-0.5 mt-4'>Freelance Market</div>
                            <div className='px-4 py-6 bg-background rounded-t-lg flex items-center justify-center'>
                                <img src={images.logo} alt="logo" className='pt-4'/>
                            </div>
                            <div className='px-4 py-6 bg-background/80 mb-0.5 mt-4'>In-house</div>
                            <div className='px-4 py-6 bg-background/80 rounded-tr-lg mb-0.5 mt-4'>Agencies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Level of Expertise</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Low</div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'>Vetted Top Experts</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Varies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Dedicated Employee</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500'/></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiCheckCircle className='text-xl text-green-500'/></div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Varies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Fee</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>$$</div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'>$$</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>$$$$</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>$$$$</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Client Service Team</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Varies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Performance Evaluation</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Outlined Solutions</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Varies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Sprint/Goal Management</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Varies</div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Tax & Legal Compliance Management</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            
                            <div className='px-4 py-6 bg-background/80 my-0.5'>Managed IT Support</div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background  flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 flex items-center justify-center my-0.5'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 my-0.5'><FiXCircle className='text-xl text-rose-500' /></div>
                            
                            <div className='px-4 py-6 bg-background/80 rounded-bl-lg mt-0.5 mb-4'>vHR</div>
                            <div className='px-4 py-6 bg-background/40 mt-0.5 mb-4 flex items-center justify-center'><FiXCircle className='text-xl text-rose-500' /></div>
                            <div className='px-4 py-6 bg-background rounded-b-lg flex items-center justify-center'><FiCheckCircle className='text-2xl text-lime-500'/></div>
                            <div className='px-4 py-6 bg-background/40 mt-0.5 mb-4 flex items-center justify-center'>Varies</div>
                            <div className='px-4 py-6 bg-background/80 rounded-br-lg mt-0.5 mb-4'><FiXCircle className='text-xl text-rose-500' /></div>
                        </div>

                    </div>
                    <div className='space-y-4'>
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            Why
                            <br className='hidden lg:block' />
                            Remote
                            <br className='hidden lg:block' />
                            Office?
                        </h1>
                        <p className='lg:max-w-xs text-sm'>
                            Remote Office helps you hire and manage top global talents. 
                            You can find, onboard, pay, and manage your remote workers 
                            using our platform. Remote Office also supports you with insights 
                            and feedback to optimise your remote team. We are your vHR for 
                            building and managing high-performing remote teams.
                        </p>
                        <Button className={'px-6 py-2 font-bold'}>
                            Get started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
