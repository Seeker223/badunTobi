'use client';

import { useState } from 'react';

const projectFilters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Design', value: 'web' },
  { label: 'MernStack', value: 'mern' },
  { label: 'AI/ML', value: 'ai' },
  { label: 'Mobile Dev', value: 'mobile' }
];

const projectItems = [
  {
    category: 'web',
    image: '/assets/techedu.jpg',
    title: 'Tech Edu Platform',
    description: 'A responsive educational platform for tech courses with interactive UI, user authentication, and course management system.',
    github: 'https://github.com/seeker223/Frontend_edutech',
    demo: 'https://seeker223.github.io/Frontend_edutech/'
  },
  {
    category: 'web',
    image: '/assets/freelancer.jpg',
    title: 'Freelancer Portfolio',
    description: 'A professional portfolio website for freelance designers with CMS integration, contact form, and project showcase.',
    github: 'https://github.com/seeker223/dorcas_portfolio',
    demo: 'https://seeker223.github.io/dorcas_portfolio/'
  },
  {
    category: 'web',
    image: '/assets/Christmas.jpg',
    title: 'Christmas Website',
    description: 'A festive holiday website with animations, interactive elements, countdown timer, and wishlist features.',
    github: 'https://github.com/seeker223/Frontend_Christmas',
    demo: 'https://seeker223.github.io/Frontend_Christmas/'
  },
  {
    category: 'mobile',
    image: '/assets/hender_xender.png',
    title: 'Social Networking App',
    description: 'Android Platform Reactnative App',
    github: '#',
    demo: '#'
  },
  {
    category: 'mobile',
    image: '/assets/biggidata home.jpg',
    title: 'React Native VTU app',
    description: 'Billing, Airtime and Data reselling app',
    github: '#',
    demo: 'https://biggidata.com.ng'
  },
  {
    category: 'mern',
    image: '/assets/badunChatApp.png',
    title: 'Chat App',
    description: 'MernStack whatsapp-Like Chatting app',
    github: '#',
    demo: '#'
  },
  {
    category: 'mern',
    image: '/assets/needforsoftwares.png',
    title: 'Mern-fullstack Website',
    description: 'NeedForsoftwares, WebTechnology Site',
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? projectItems : projectItems.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" aria-label="Projects portfolio">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="project-type" role="tablist" aria-label="Project filter buttons">
        {projectFilters.map((filter) => (
          <div
            key={filter.value}
            className={`pbtn ${activeFilter === filter.value ? 'active' : ''}`}
            role="tab"
            aria-selected={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </div>
        ))}
      </div>
      <div className="experience-details-container">
        <div className="about-containers">
          {filtered.map((project) => (
            <div className="details-container color-container" key={project.title}>
              <div className="article-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.category.toUpperCase().split('').map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className="btn-container">
                <button className="btn btn-color-2" onClick={() => window.open(project.github, '_blank')}>
                  <i className="fab fa-github" /> GitHub
                </button>
                <button className="btn btn-color-2" onClick={() => window.open(project.demo, '_blank')}>
                  <i className="fas fa-external-link-alt" /> Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.hash = '#work'} />
    </section>
  );
}
