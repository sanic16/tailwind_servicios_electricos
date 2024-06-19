import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Productive from "@/sections/Productive";
import Testimonials from "@/sections/Testimonials";
import NewsLetter from "@/sections/NewsLetter";
import Footer from "@/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electroser",
  description:
    "Servicios de electricidad en general, instalaciones, reparaciones, mantenimiento, etc.",
  keywords:
    "electricidad, electricista, instalaciones, reparaciones, mantenimiento, electrios, electroser",
  openGraph: {
    title: "Electroser - Servicios de electricidad en general",
    description:
      "Servicios de electricidad en general, instalaciones, reparaciones, mantenimiento, etc.",
    images: [
      {
        hostname: "julius-assets-gt.s3.amazonaws.com/electroser",
        url: "https://julius-assets-gt.s3.amazonaws.com/electroser",
        width: 1920,
        height: 1280,
      },
    ],
  },
  twitter: {
    title: "Electroser - Servicios de electricidad en general",
    images: [
      {
        hostname: "julius-assets-gt.s3.amazonaws.com/electroser",
        url: "https://julius-assets-gt.s3.amazonaws.com/electroser",
        width: 1920,
        height: 1280,
      },
    ],
  },
};

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
