import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { StatsBar } from "@/app/components/Stats";
import { Services } from "@/app/components/Services";
import { Technologies } from "@/app/components/Technologies";
import { Partners } from "@/app/components/Partners";
import { Portfolio } from "@/app/components/Portfolio";
import { WhyUs } from "@/app/components/WhyUs";
import { Testimonials } from "@/app/components/Testimonials";
import { Product } from "@/app/components/Product";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

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
