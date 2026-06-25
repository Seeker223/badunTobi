'use client';

const workItems = [
  {
    icon: 'fas fa-code',
    title: 'NeedFor\nSoftwares',
    role: 'Fullstack Developer',
    duration: '2025 - 2026',
    description: 'Founder NeedForSoftwares Developed and maintained web applications using MERN stack, implemented REST APIs, and collaborated with cross-functional teams.'
  },
  {
    icon: 'fas fa-code',
    title: 'Relearn',
    role: 'Platform Manager & Fullstack Developer',
    duration: '2024 - 2024',
    description: 'Supervise and Secure Platform Projects, WebTechnologies, Learning Management Systems, Manager of Relearn Academy'
  },
  {
    icon: 'fas fa-server',
    title: 'Freelancer',
    role: 'DevOps Engineer',
    duration: '2024 - 2025',
    description: 'Implemented CI/CD pipelines, containerized applications with Docker, and managed cloud infrastructure on AWS.'
  },
  {
    icon: 'fas fa-robot',
    title: 'Btech',
    role: 'AI Developer',
    duration: '2020 - 2021',
    description: 'Developed machine learning models for predictive analytics, implemented computer vision solutions, and optimized AI algorithms.'
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Btech',
    role: 'Frontend Developer',
    duration: '2021 - 2021',
    description: 'Created responsive web interfaces, implemented design systems, and optimized frontend performance for various client projects.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Nama(Nigeria AirSpace Management Agency)',
    role: 'Internship At Airtraffic Management',
    duration: '2022 - 2023',
    description: 'Maintenance of Air traffic management Softwares and air Navigation Infrastructure development'
  },
  {
    icon: 'fas fa-globe',
    title: 'Complete computers Technology',
    role: 'Web & Responsive Design',
    duration: '2021 - 2021',
    description: 'Started Web Design Learning, built web design starting projects, Created responsive web interfaces'
  }
];

export function WorkSection() {
  return (
    <section id="work" aria-label="Work experience history">
      <p className="section__text__p1">Professional Journey</p>
      <h1 className="title">Work Experience</h1>
      <div id="workedin">
        {workItems.map((item) => (
          <div className="work-item" key={item.title + item.duration}>
            <div className="work-icon">
              <i className={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p className="work-role">{item.role}</p>
            <p className="work-duration">{item.duration}</p>
            <p className="work-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
