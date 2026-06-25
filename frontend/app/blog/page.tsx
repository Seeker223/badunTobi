'use client';

import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';

export default function BlogPage() {
  return (
    <main>
      <Nav />
      <section id="blog-section">
        <div className="blog-content">
          <p className="section__text__p1">Check Out My</p>
          <h1 className="title">Blog Posts</h1>
          <p>Featured blog content and technical articles coming soon...</p>
          <p className="subtitle">
            Stay tuned for insights on DevOps, AI/ML, and Full-stack development
          </p>
          <Link href="/" className="btn btn-color-1 blog-back-btn">
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
