import Blog from "@/components/home/Blog";
import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import QuickLook from "@/components/home/QuickLook";
import Team from "@/components/home/Team";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <Blog/>
      <HorizontalScroll/>
      <Team/>
      <QuickLook/>
    </div>
  );
}
