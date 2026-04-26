import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import NotFound from './sections/NotFound';

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as (time: number) => void);
    };
  }, []);

  return (
    <div
      style={{
        background: '#06060A',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Helmet>
        <title>Robert — AI Systems Architect & Full-Stack Developer</title>
        <meta name="description" content="I design and automate intelligent systems that think, learn, and scale. AI automation, full-stack development, systems architecture, and API integrations." />
        <link rel="canonical" href="https://robert-portfolio.vercel.app/" />
        <meta property="og:url" content="https://robert-portfolio.vercel.app/" />
      </Helmet>

      <Navigation />

      <main id="main-content">
        <Hero />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
