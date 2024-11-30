'use client'

import images from "@/configs/img.config";
import React, { useState } from "react";
import Button from "../common/Button";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { SiFacebook, SiLinkedin, SiYoutube } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const sections = [
        {
            title: "Popular Hires",
            links: ["Developers", "Marketers", "Designers", "Support Agents"],
        },
        {
            title: "Company",
            links: ["About", "Blogs", "Career"],
        },
        {
            title: "Trust Centre",
            links: [
                "Become an Ambassador",
                "Become a Partner",
                "Privacy Policy",
                "Cookie Statement",
            ],
        },
    ];

    return (
        <footer className="w-full h-full bg-primary text-background">
            <div className="w-full h-full max-w-8xl mx-auto px-4 md:px-8 lg:px-20 py-20">
                <div className="grid lg:grid-cols-9 gap-10">
                    {/* Left Section */}
                    <div className="space-y-10 lg:col-span-4 grid">
                        <img
                            src={images.footer.logo}
                            alt="logo"
                            className="h-8 md:h-10"
                        />
                        <div className="text-center space-y-4 bg-muted-hover text-foreground p-4 rounded-[18px] w-full lg:max-w-sm">
                            <img
                                src={images.footer.discord}
                                alt="discord"
                                className="object-cover lg:h-40 w-full rounded-[10px]"
                            />
                            <p className="font-semibold">Join our community:</p>
                            <p className="text-xs font-semibold">
                                Join our community of talents from across the globe to get
                                access to new job opportunities, ideas, and collaborate with
                                like-minded individuals.
                            </p>
                            <Button className="flex items-center font-bold space-x-2 px-6 py-2">
                                <span>Join</span>
                                <HiOutlineArrowSmRight />
                            </Button>
                        </div>
                        <div className="lg:row-start-2 text-2xl flex items-center justify-center lg:justify-start space-x-10 text-muted-hover">
                            <SiYoutube />
                            <SiFacebook />
                            <SiLinkedin />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="space-y-16 lg:col-span-5">
                        <p className="text-sm lg:text-base">
                            Remote Office is an end-to-end remoteOps platform that helps you
                            build and manage global remote teams. We provide you with access
                            to top-vetted talents, handle compliance and HR issues, and offer
                            strategic consultation and support to optimize your team's
                            performance and productivity. Whether you want to supercharge
                            your existing team or build your dream team from scratch, we have
                            the solution. Join us today and discover the benefits of working
                            with a Remote Office.
                        </p>

                        {/* Links Section */}
                        <div className="hidden lg:grid grid-cols-3 gap-10">
                            {sections.map((section, index) => (
                                <div key={index} className="text-sm space-y-2">
                                    <h3 className="text-lg">{section.title}</h3>
                                    {section.links ? (
                                        <div className="space-y-2">
                                            {section.links.map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href="#"
                                                    className="block hover:underline hover:text-muted-hover opacity-70 hover:opacity-100"
                                                >
                                                    {link}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        section.content
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Accordion for Mobile View */}
                        <div className="lg:hidden">
                            {sections.map((section, index) => (
                                <div key={index} className="mb-6">
                                    <button
                                        className="w-full flex justify-between items-center text-lg font-semibold text-left border-b border-gray-500"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {section.title}
                                        <span className="text-muted">
                                            {openAccordion === index ? "-" : "+"}
                                        </span>
                                    </button>
                                    <div
                                        className={`mt-2 space-y-2 overflow-hidden transition-all duration-300 ${openAccordion === index ? "max-h-screen" : "max-h-0"
                                            }`}
                                    >
                                        {section.links ? (
                                            section.links.map((link, idx) => (
                                                <Link
                                                    key={idx}
                                                    href="#"
                                                    className="block text-sm hover:underline hover:text-muted-hover opacity-70 hover:opacity-100 pl-4"
                                                >
                                                    {link}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="text-sm pl-4">{section.content}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='text-sm lg:space-y-2 space-x-20 lg:space-x-0 flex lg:flex-col'>
                            <h3 className='text-lg'>Contact</h3>
                            <div className='space-y-2'>
                                <p className='opacity-70'>Suite No. 1445 17 Gould Road, Herston, QLD 4006, Australia</p>
                                <Link href={'#'} className='block hover:underline hover:text-muted-hover opacity-70 hover:opacity-100'>Ph: +610755289947</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="p-4 bg-black flex items-center justify-center text-xs">
                <p>©2024 Remote Office</p>
            </div>
        </footer>
    );
}
