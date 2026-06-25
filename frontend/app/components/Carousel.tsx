'use client';

import { useEffect, useMemo, useState } from 'react';

const slides = [
  { title: 'Modern Web Application', subtitle: 'React & Node.js Fullstack Project' },
  { title: 'AI Integration Project', subtitle: 'Machine Learning & Deep Learning' },
  { title: 'DevOps Implementation', subtitle: 'CI/CD Pipeline & Containerization' },
  { title: 'Mobile Responsive Design', subtitle: 'Cross-platform Development' },
  { title: 'Database Architecture', subtitle: 'MongoDB No-SQL, Vector database' },
  { title: 'Agentic Development', subtitle: 'Claude Code, Antigravity, Gemini Cli' },
  { title: 'NeedForSoftwares', subtitle: 'Why I started a Tech Startup' },
  { title: 'Hender Xender', subtitle: 'New Social Media Networking App' },
  { title: 'Africa Tech Ecosystem', subtitle: 'How I Imagine Africa Tech Growth' }
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalMs = 5000;

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="flow1">
      <h2 className="carousel-title">Blogs</h2>
      <div id="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className={`slider ${index === currentIndex ? 'active' : ''}`} key={slide.title}>
            <img src="/assets/IMG_20250131_075108_777-removebg-preview.png" alt={slide.title} />
            <div className="slider-caption">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} aria-label="Previous slide">
          <i className="fas fa-chevron-left" />
        </button>
        <button className="carousel-btn" onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} aria-label="Next slide">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div key={index} className={`indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}
