import ivonildoImg from '../assets/Ivonildo.jpg';

const About = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-about" id="sobre">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Sobre Mim</span>
          <h2 className="section-title">
            Conheça <span>minha história</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-video">
            <div className="profile-image">
              <img src={ivonildoImg} alt="Ivonildo Lima - Desenvolvedor Web" />
              <div className="experience-badge">
                <span className="number">1+</span>
                <span className="text">Ano de<br />Experiência</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3>Olá! Sou Ivonildo Lima</h3>
            <p className="highlight">
              Desenvolvedor Web apaixonado por transformar ideias em experiências digitais impressionantes.
            </p>
            <p>
              Com mais de 1 anos de experiência no desenvolvimento web, crio soluções que não apenas atendem às
              necessidades dos clientes, mas também proporcionam uma experiência excepcional para o usuário
              final. Minha abordagem combina design atraente com código limpo e eficiente.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-text">Projetos<br />Concluídos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">todos</span>
                <span className="stat-text">Clientes<br />Satisfeitos</span>
              </div>
            </div>
            <a href="#contato" className="btn-primary" onClick={(e) => handleNavClick(e, '#contato')}>
              Entre em contato <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
