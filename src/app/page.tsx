import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Productive from "@/sections/Productive";
import Testimonials from "@/sections/Testimonials";
import NewsLetter from "@/sections/NewsLetter";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
}
