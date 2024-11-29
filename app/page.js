import Blog from "@/components/home/Blog";
import Brand from "@/components/home/Brand";
import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <Blog/>
      <HorizontalScroll/>
    </div>
  );
}
