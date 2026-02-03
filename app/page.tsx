'use client';

import { Hero } from '../components/Hero';
import { StatsBar } from '../components/Stats';
import { Services } from '../components/Services';
import { Technologies } from '../components/Technologies';
import { PortfolioEnhanced } from '../components/PortfolioEnhanced';
import { Team } from '../components/Team';
import { WhyUs } from '../components/WhyUs';
import { Testimonials } from '../components/Testimonials';
import { Product } from '../components/Product';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Technologies />
      <PortfolioEnhanced />
      <Team />
      <WhyUs />
      <Testimonials />
      <Product />
      <Contact />
      <Footer />
    </main>
  );
}
