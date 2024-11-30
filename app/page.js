import Blog from "@/components/home/Blog";
import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import QuickLook from "@/components/home/QuickLook";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import WhyRemote from "@/components/home/WhyRemote";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <Blog/>
      <HorizontalScroll/>
      <Team/>
      <QuickLook/>
      <WhyRemote/>
      <Testimonials/>
    </div>
  );
}
