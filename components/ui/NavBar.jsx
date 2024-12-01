'use client';
import React, { useState, useEffect } from 'react';
import images from '@/configs/img.config';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '../common/Button';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

export default function NavBar() {
    const { isMobile, isTab, isDesktop } = useMediaQuery();

    // Menu Data
    const menu = [
        { label: 'Home', href: '/' },
        {
            label: 'Teams', submenu: [
                { label: 'Technology', href: '/team/technology' },
                { label: 'Marketing', href: '/team/marketing' },
                { label: 'Creative Studio', href: '/team/creative-studio' },
                { label: 'CX/Customer Support', href: '/team/back-office' }
            ]
        },
        { label: 'About', href: '/about' },
        { label: 'Blogs', href: '/blog' },
        { label: 'Career', href: '/career' },
    ];

    // Track whether the component has mounted to handle client-side rendering
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="w-full sticky top-0 z-40 h-14 md:h-20 bg-background">
            <div className="w-full h-full max-w-8xl mx-auto items-center">
                <div className="w-full h-full px-4 md:px-8 lg:px-20 flex items-center justify-between">
                    {/* Main Logo */}
                    <img src={images.logo} alt="logo" className="h-8 md:h-10" />

                    {/* Responsive Layout for Desktop and Mobile */}
                    {(mounted && (isMobile || isTab)) && <MobileNav menu={menu} />}
                    {(mounted && isDesktop) && <DesktopNav menu={menu} />}
                </div>
            </div>
        </nav>
    );
}

// Desktop Navigation Component with Framer Motion
function DesktopNav({ menu }) {
    return (
        <ul className="flex items-center gap-8">
            {menu.map((item, index) => (
                <motion.li
                    key={index}
                    className="group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }} // Delay each item animation
                >
                    {item.submenu ? (
                        <div className="relative">
                            <Link href={item.href || '#'} className="text-gray-800 hover:text-lime-500">
                                {item.label}
                            </Link>
                            <ul className="absolute top-full left-0 bg-white shadow-lg p-4 space-y-2 hidden group-hover:block">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link href={subItem.href} className="text-gray-800 hover:text-lime-500">
                                            {subItem.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <Link href={item.href} className="text-gray-800 hover:text-lime-500">
                            {item.label}
                        </Link>
                    )}
                </motion.li>
            ))}
            <motion.div
                className="px-8 py-3 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: menu.length * 0.1 }}
            >
                <Button className={'px-8 py-3 font-bold'}>Get Started</Button>
            </motion.div>
        </ul>
    );
}

// Mobile Navigation Component with Framer Motion
function MobileNav({ menu }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <button
                className="md:hidden text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Menu
            </button>
            {isMenuOpen && (
                <motion.div
                    className="absolute top-0 left-0 right-0 w-full p-4 bg-accent shadow-lg"
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    // transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className="w-full h-full px-4 md:px-8 lg:px-20 flex items-center justify-between">
                        {/* Main Logo */}
                        <img src={images.footer.logo} alt="logo" className="h-8 md:h-10" />

                        <button
                            className="md:hidden text-gray-800"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            close
                        </button>
                    </div>
                    <ul className="space-y-4 p-4 bg-background rounded-2xl mt-6">
                        {menu.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.submenu ? (
                                    <div>
                                        <Link href={item.href || '#'} className="text-gray-800 hover:text-lime-500">
                                            {item.label}
                                        </Link>
                                        <ul className="space-y-2 pl-4">
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href={subItem.href} className="text-gray-800 hover:text-lime-500">
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Link href={item.href} className="text-gray-800 hover:text-lime-500">
                                        {item.label}
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                        <Button className="w-full py-3 mt-4">Contact</Button>
                        <div className='mt-6 space-y-2'>
                            <p className='font-semibold'>Build and Manage Global HR Operations</p>
                            <p className='text-xs'>
                                Remote Office is an end-to-end remoteOps platform that helps you build 
                                and manage global remote teams. We provide you with access to top-vetted 
                                talents, handle compliance and HR issues, and offer strategic consultation 
                                and support to optimise your team's performance and productivity.
                            </p>
                        </div>
                    </ul>
                </motion.div>
            )}
        </div>
    );
}
