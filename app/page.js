import Blog from "@/components/home/Blog";
import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import QuickLook from "@/components/home/QuickLook";
import Service from "@/components/home/Service";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import WhyRemote from "@/components/home/WhyRemote";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <Blog/>
      <Service/>
      <Team/>
      <QuickLook/>
      <WhyRemote/>
      <Testimonials/>
    </div>
  );
}
