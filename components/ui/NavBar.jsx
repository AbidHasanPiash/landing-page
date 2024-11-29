'use client';
import React from 'react';
import images from '@/configs/img.config';
import useMediaQuery from '@/hooks/useMediaQuery';

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

    return (
        <nav className="w-full h-14 md:h-20 bg-background">
            <div className="w-full h-full max-w-8xl mx-auto items-center">
                <div className="w-full h-full px-4 md:px-8 lg:px-20 flex items-center justify-between">
                    {/* Main Logo */}
                    <img src={images.logo} alt="logo" className="h-8 md:h-10" />

                    {/* Responsive Layout for Desktop and Mobile */}
                    {(isMobile || isTab) && <MobileNav menu={menu} />}
                    {isDesktop && <DesktopNav menu={menu} />}
                </div>
            </div>
        </nav>
    );
}

// Desktop Navigation Component
function DesktopNav({ menu }) {
    return (
        <ul className="flex gap-8">
            {menu.map((item, index) => (
                <li key={index}>
                    <a href={item.href} className="text-gray-800 hover:text-primary">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// Mobile Navigation Component
function MobileNav({ menu }) {
    return (
        <div className="relative">
            <button className="text-gray-800">☰</button>
            <ul className="absolute top-12 right-0 bg-white border shadow-lg rounded-md w-40">
                {menu.map((item, index) => (
                    <li key={index} className="border-b last:border-none">
                        <a href={item.href} className="block px-4 py-2 hover:bg-gray-100">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
