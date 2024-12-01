'use client';
import dynamic from 'next/dynamic';

// const Blog = dynamic(() => import('@/components/home/Blog'), { ssr: false });
// const Brand = dynamic(() => import('@/components/home/Brand'), { ssr: false });
// const Hero = dynamic(() => import('@/components/home/Hero'), { ssr: false });
// const QuickLook = dynamic(() => import('@/components/home/QuickLook'), { ssr: false });
// const Service = dynamic(() => import('@/components/home/Service'), { ssr: false });
const Team = dynamic(() => import('@/components/home/Team'), { ssr: false });
// const Testimonials = dynamic(() => import('@/components/home/Testimonials'), { ssr: false });
// const WhyRemote = dynamic(() => import('@/components/home/WhyRemote'), { ssr: false });

import Blog from "@/components/home/Blog";
import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import QuickLook from "@/components/home/QuickLook";
import Service from "@/components/home/Service";
// import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import WhyRemote from "@/components/home/WhyRemote";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <Blog />
      <Service />
      <Team />
      <QuickLook />
      <WhyRemote />
      <Testimonials />
    </div>
  );
}
