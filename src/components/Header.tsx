import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);

      // Highlight active navigation
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-active');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-active');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="header-top">
        <div className="container">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/ivonildo-lima-lima-219659375" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:ivonildodev@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#contato" className="contact-btn" onClick={(e) => handleNavClick(e, '#contato')}>
              Contate-me <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={logoImg} alt="Ivonildo Lima - Web Developer" />
            </a>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li>
                <a 
                  href="#sobre" 
                  className={activeSection === 'sobre' ? 'active' : ''} 
                  onClick={(e) => handleNavClick(e, '#sobre')}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#habilidades" 
                  className={activeSection === 'habilidades' ? 'active' : ''} 
                  onClick={(e) => handleNavClick(e, '#habilidades')}
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className={activeSection === 'portfolio' ? 'active' : ''} 
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className={activeSection === 'contato' ? 'active' : ''} 
                  onClick={(e) => handleNavClick(e, '#contato')}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </div>

      {isMenuOpen && <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
};

export default Header;
