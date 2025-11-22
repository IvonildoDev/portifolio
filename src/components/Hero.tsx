const Hero = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-banner">
      <div className="container">
        <div className="hero-content">
          <h1 className="animate-text">
            <span>Transformando</span> ideias em experiências digitais incríveis
          </h1>
          <p>Desenvolvedor Web especialista em criar interfaces modernas e funcionais que impressionam</p>
          <a href="#portfolio" className="btn-primary" onClick={(e) => handleNavClick(e, '#portfolio')}>
            Ver Projetos <i className="fas fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <img src="/src/assets/Ivonildo.jpg" alt="Ivonildo Lima - Desenvolvedor Web" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
