import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const frontendSkills: Skill[] = [
    { name: 'HTML5', icon: 'fab fa-html5', level: 75 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 70 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 65 },
    { name: 'React', icon: 'fab fa-react', level: 50 },
    { name: 'TypeScript', icon: 'fas fa-code', level: 62 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 35 }
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', icon: 'fab fa-node-js', level:45 },
    { name: 'PHP', icon: 'fab fa-php', level: 50 },
    { name: 'MySQL', icon: 'fas fa-database', level: 40 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 45 },
    { name: 'Firebase', icon: 'fas fa-fire', level: 30 },
    { name: 'React Native', icon: 'fab fa-react', level: 55 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              (bar as HTMLElement).style.width = width + '%';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill) => (
      <div className="skill-item" key={skill.name}>
        <div className="skill-icon">
          <i className={skill.icon}></i>
        </div>
        <div className="skill-info">
          <h4>{skill.name}</h4>
          <div className="skill-progress">
            <div className="progress-bar" data-width={skill.level}></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section-skills" id="habilidades" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Minhas Competências</span>
          <h2 className="section-title">
            Conhecimentos & <span>Habilidades</span>
          </h2>
        </div>

        <div className="skills-content">
          <div className="skills-text">
            <p>
              Desenvolvimento de sites e aplicações web com foco em experiência do usuário, performance e
              responsividade. Especialista em criar interfaces modernas e intuitivas que se adaptam a qualquer
              dispositivo.
            </p>
          </div>

          <div className="skills-wrapper">
            <div className="skill-category">
              <h3>Front-end</h3>
              <div className="skills-grid">{renderSkills(frontendSkills)}</div>
            </div>

            <div className="skill-category">
              <h3>Back-end & Outros</h3>
              <div className="skills-grid">{renderSkills(backendSkills)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
