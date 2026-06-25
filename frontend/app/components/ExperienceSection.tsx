'use client';

export function ExperienceSection() {
  return (
    <section id="experience" aria-label="Professional experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[
                { title: 'HTML/CSS', label: 'Expert' },
                { title: 'JavaScript', label: 'Expert' },
                { title: 'React.js', label: 'Advanced' },
                { title: 'TypeScript', label: 'Intermediate' },
                { title: 'Tailwind CSS', label: 'Advanced' },
                { title: 'SASS/SCSS', label: 'Advanced' }
              ].map((item) => (
                <article key={item.title}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend & DevOps</h2>
            <div className="article-container">
              {[
                { title: 'Node.js', label: 'Expert' },
                { title: 'Python', label: 'Intermediate' },
                { title: 'MongoDB', label: 'Advanced' },
                { title: 'Docker', label: 'Intermediate' },
                { title: 'Git/GitHub', label: 'Expert' },
                { title: 'AWS', label: 'Intermediate' }
              ].map((item) => (
                <article key={item.title}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Mobile development</h2>
            <div className="article-container">
              {[
                { title: 'Reactnative', label: 'Expert' },
                { title: 'Expo Go', label: 'Expert' },
                { title: 'Android', label: 'Advanced' },
                { title: 'Ios', label: 'Intermediate' },
                { title: 'NativeWind', label: 'Expert' },
                { title: 'Api', label: 'Advance' }
              ].map((item) => (
                <article key={item.title}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">AI & Data Science</h2>
            <div className="article-container">
              {[
                { title: 'TensorFlow', label: 'Intermediate' },
                { title: 'PyTorch', label: 'Intermediate' },
                { title: 'Pandas', label: 'Advanced' },
                { title: 'NumPy', label: 'Advanced' },
                { title: 'OpenCV', label: 'Intermediate' },
                { title: 'Scikit-learn', label: 'Advanced' }
              ].map((item) => (
                <article key={item.title}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => (window.location.hash = '#projects')} />
    </section>
  );
}
