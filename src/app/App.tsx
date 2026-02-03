import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";
import { Partners } from "@/components/Partners";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Product } from "@/components/Product";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-[#1E40AF]/20 selection:text-[#1E40AF]">
      <Toaster position="top-center" richColors />
      
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Technologies />
        <Partners />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Product />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
