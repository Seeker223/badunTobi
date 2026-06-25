'use client';

export function AboutSection() {
  return (
    <section id="about" aria-label="About Me">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="/assets/Snapchat-650724167_2.jpg" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="/assets/experience.png" alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>5+ years <br />Frontend Development</p>
              <p>4+ years <br />Backend Development</p>
              <p>3+ years <br />DevOps & AI</p>
            </div>
            <div className="details-container">
              <img src="/assets/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>National Diploma in Electrical and Electronics Engineering</p>
              <p>Certified Fullstack Web Developer</p>
              <p>AI & Machine Learning Specialization</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              <strong className="bold">Core Technical Skills:</strong>
            </p>
            <hr className="bold" />
            <p>
              A resilient developer and expert in code environments with extensive knowledge in <strong>Mern-fullstack development, Reactnative Mobile Development, Artificial Intelligence, and DevOps</strong>.
            </p>
            <div className="quote-container">
              <p>"Here I will share my previous and recent projects in my tech journey"</p>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => (window.location.hash = '#experience')} />
    </section>
  );
}
