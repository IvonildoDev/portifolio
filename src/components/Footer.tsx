const Footer = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src="/src/assets/logo.png" alt="Ivonildo Lima - Web Developer" />
            </a>
            <p>Desenvolvedor Web</p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')}>Sobre</a></li>
                <li><a href="#habilidades" onClick={(e) => handleNavClick(e, '#habilidades')}>Habilidades</a></li>
                <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfólio</a></li>
                <li><a href="#contato" onClick={(e) => handleNavClick(e, '#contato')}>Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:ivonildodev@gmail.com">ivonildodev@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/ivonildo-lima-lima-219659375" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 Ivonildo Lima. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ivonildo-lima-lima-219659375" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:ivonildodev@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
