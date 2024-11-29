'use client';
import React, { useState, useEffect } from 'react';
import images from '@/configs/img.config';
import useMediaQuery from '@/hooks/useMediaQuery';
import Button from '../common/Button';

export default function NavBar() {
    const { isMobile, isTab, isDesktop } = useMediaQuery();

    // Menu Data
    const menu = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
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

// Desktop Navigation Component
function DesktopNav({ menu }) {
    return (
        <ul className="flex items-center gap-8">
            {menu.map((item, index) => (
                <li key={index}>
                    <a href={item.href} className="text-gray-800 hover:text-primary">
                        {item.label}
                    </a>
                </li>
            ))}
            <Button className={'px-8 py-3 font-bold'}>Contact</Button>
        </ul>
    );
}

// Mobile Navigation Component
function MobileNav({ menu }) {
    return (
        <div>
            mobile
        </div>
    );
}
