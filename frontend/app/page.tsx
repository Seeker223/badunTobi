'use client';

import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Projects } from './components/Projects';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;
      if (window.scrollY > 100) {
        (nav as HTMLElement).style.background = 'rgba(255, 255, 255, 0.95)';
        (nav as HTMLElement).style.backdropFilter = 'blur(10px)';
        (nav as HTMLElement).style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
      } else {
        (nav as HTMLElement).style.background = 'white';
        (nav as HTMLElement).style.backdropFilter = 'none';
        (nav as HTMLElement).style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <Nav />
      <section id="profile" aria-label="Profile and introduction">
        <div className="hero">
          <div className="section__pic-container">
            <img src="/assets/4haxa4.jpg" alt="Badun Tobi profile picture" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Badun Oluwatobi</h1>
            <p className="section__text__p2">CEO & FOUNDER NeedForSoftwares</p>
            <p className="section__text__p3">DevOps, AI & Fullstack Developer</p>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={() => window.open('/assets/Resume.pdf')}>
                CV Resume
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.hash = '#contact'}>
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <img src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://linkedin.com/in/badun-oluwatobi', '_blank')} />
              <img src="/assets/github.png" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/seeker223', '_blank')} />
              <img src="/assets/twitter-x-seeklogo.png" alt="My Twitter profile" className="icon" onClick={() => window.open('https://twitter.com/', '_blank')} />
            </div>
          </div>
        </div>
      </section>
      <section id="workflow">
        <h1 className="bold info-me">
          despite AI Bubble, Developers are still needed in todays Era.
          <br />
          on the Safer side Build A Product, Own it, Sell it. Because thats what Ai cant take from you
        </h1>
      </section>
      <Carousel />
      <AboutSection />
      <ExperienceSection />
      <Projects />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
