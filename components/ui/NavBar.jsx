'use client';
import React, { useState, useEffect } from 'react';
import images from '@/configs/img.config';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '../common/Button';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion'; // Importing framer-motion for animations
import { HiChevronDown, HiOutlineMenu } from 'react-icons/hi';

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
                        <SubMenu item={item} />
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


function SubMenu({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Parent Menu Item */}
            <Link
                href={item.href || '#'}
                className="text-gray-800 hover:text-lime-500 flex items-center space-x-2"
            >
                <span>{item.label}</span>
                <motion.span
                    className="transition-transform duration-100"
                    animate={{ rotate: isHovered ? 180 : 0 }}
                >
                    <HiChevronDown />
                </motion.span>
            </Link>

            {/* Submenu with Framer Motion Animation */}
            <AnimatePresence>
                {isHovered && (
                    <motion.ul
                        className="absolute top-full left-0 rounded-lg text-nowrap bg-white shadow-lg p-4 space-y-2"
                        initial={{ opacity: 0, y: -10 }} // Start hidden with a slight upward position
                        animate={{ opacity: 1, y: 0 }} // Fade in and slide down
                        exit={{ opacity: 0, y: -10 }} // Fade out and slide up
                        transition={{ duration: 0.3 }} // Smooth transition
                    >
                        {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                                <Link
                                    href={subItem.href}
                                    className="text-gray-800 hover:text-lime-500"
                                >
                                    {subItem.label}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}


// Mobile Navigation Component
function MobileNav({ menu }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // Track active submenu

    const toggleSubMenu = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle submenu visibility
    };

    return (
        <div>
            <button
                className="self-end text-xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <HiOutlineMenu />
            </button>
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-50 bg-accent flex flex-col p-4 space-y-6"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex items-center justify-between'>
                        <img src={images.footer.logo} alt="logo" className="h-8 md:h-10" />
                        {/* Close Button */}
                        <button
                            className="self-end text-xl font-bold text-background"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    <div className='bg-background rounded-3xl text-foreground p-6'>
                        {/* Menu Items */}
                        <ul>
                            {menu.map((item, index) => (
                                <li key={index} className='py-4 border-b border-primary'>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                className="w-full text-left font-semibold text-lg flex items-center space-x-2"
                                                onClick={() => toggleSubMenu(index)}
                                            >
                                                <span>{item.label}</span>
                                                <span><HiChevronDown /></span>
                                            </button>
                                            {/* Accordion for Submenu */}
                                            <motion.ul
                                                className={`mt-2 space-y-2 ${activeIndex === index ? 'block' : 'hidden'
                                                    }`}
                                                initial={{ height: 0 }}
                                                animate={{ height: activeIndex === index ? 'auto' : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.href || '#'}
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href || '#'}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-lg font-semibold hover:text-lime-300"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Footer Button */}
                        <div className="mt-8">
                            <Button className="px-6 py-3" onClick={() => setIsMenuOpen(false)}>Get started</Button>
                            <div className='mt-6 space-y-2'>
                                <p className='font-semibold'>Build and Manage Global HR Operations</p>
                                <p className='text-xs'>
                                    Remote Office is an end-to-end remoteOps platform that helps you build
                                    and manage global remote teams. We provide you with access to top-vetted
                                    talents, handle compliance and HR issues, and offer strategic consultation
                                    and support to optimise your team's performance and productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
