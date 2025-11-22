import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description?: string;
  features?: string;
  tech?: string;
  isMobileApp?: boolean;
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedApp, setSelectedApp] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Elohim Moda',
      category: 'website',
      image: '/src/assets/Elohim.PNG',
      link: '#'
    },
    {
      id: 2,
      title: 'Terto Lanches',
      category: 'website',
      image: '/src/assets/terto.PNG',
      link: '#'
    },
    {
      id: 3,
      title: 'Sistema Checklist',
      category: 'sistema',
      image: '/src/assets/checklist.PNG',
      link: '#'
    },
    {
      id: 4,
      title: 'Sistema Lavanderia',
      category: 'sistema',
      image: '/src/assets/lavanderia.PNG',
      link: '#'
    },
    {
      id: 5,
      title: 'Resumo de Filmes',
      category: 'website',
      image: '/src/assets/resumofilmes.PNG',
      link: '#'
    },
    {
      id: 6,
      title: 'Calculadora de Volume',
      category: 'website',
      image: '/src/assets/calcvol.png',
      link: '#'
    },
    {
      id: 7,
      title: 'Sistema SISCOP',
      category: 'sistema',
      image: '/src/assets/siscop.png',
      link: '#'
    },
    {
      id: 8,
      title: 'Finance App',
      category: 'app',
      image: '/src/assets/finance.jpeg',
      link: '#',
      description: 'Aplicativo de controle financeiro pessoal com gráficos e relatórios',
      features: 'Controle de receitas e despesas, Categorização automática, Gráficos interativos, Metas financeiras',
      tech: 'React Native, Firebase, Chart.js',
      isMobileApp: true
    },
    {
      id: 9,
      title: 'Rifa Digital',
      category: 'app',
      image: '/src/assets/rifa.jpeg',
      link: '#',
      description: 'Sistema completo de gerenciamento de rifas digitais',
      features: 'Criação de rifas, Pagamento integrado, Sorteio automático, Notificações push',
      tech: 'React Native, Node.js, MongoDB',
      isMobileApp: true
    },
    {
      id: 10,
      title: 'Slikline',
      category: 'app',
      image: '/src/assets/slikeline.jpeg',
      link: '#',
      description: 'Aplicativo de delivery e gestão de pedidos',
      features: 'Catálogo de produtos, Carrinho de compras, Rastreamento em tempo real, Sistema de avaliações',
      tech: 'React Native, Firebase, Google Maps API',
      isMobileApp: true
    },
    {
      id: 11,
      title: 'UCAQ',
      category: 'app',
      image: '/src/assets/ucaq.jpeg',
      link: '#',
      description: 'Plataforma educacional com recursos interativos',
      features: 'Aulas online, Material didático, Exercícios interativos, Avaliações online',
      tech: 'React Native, WebRTC, Firebase',
      isMobileApp: true
    },
    {
      id: 12,
      title: 'SCV Sistema',
      category: 'app',
      image: '/src/assets/Scv.jpeg',
      link: '#',
      description: 'Sistema de controle de vendas mobile',
      features: 'Gestão de clientes, Controle de estoque, Relatórios de vendas, Dashboard analítico',
      tech: 'React Native, Redux, REST API',
      isMobileApp: true
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const handleFilterClick = (filterValue: string) => {
    setFilter(filterValue);
  };

  const openModal = (item: PortfolioItem) => {
    if (item.isMobileApp) {
      setSelectedApp(item);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedApp(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="section-portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Meus Trabalhos</span>
          <h2 className="section-title">
            Projetos <span>Recentes</span>
          </h2>
        </div>

        <div className="portfolio-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${filter === 'website' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('website')}
          >
            Websites
          </button>
          <button 
            className={`filter-btn ${filter === 'app' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('app')}
          >
            Aplicativos
          </button>
          <button 
            className={`filter-btn ${filter === 'sistema' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('sistema')}
          >
            Sistemas
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div className="portfolio-item" data-category={item.category} key={item.id}>
              <div className="portfolio-card">
                <div className={`portfolio-preview ${item.isMobileApp ? 'mobile-app' : ''}`}>
                  <a 
                    href={item.link} 
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(item);
                    }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-overlay">
                      <span className="btn-view">Ver Detalhes</span>
                    </div>
                  </a>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-category">{item.category}</span>
                  <h3>
                    <a href={item.link} className="portfolio-link">
                      {item.title} <i className="fas fa-arrow-right"></i>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Modal */}
      {selectedApp && (
        <div className={`app-modal ${selectedApp ? 'show' : ''}`} onClick={closeModal}>
          <div className="app-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="app-modal-body">
              <div className="app-modal-image">
                <img src={selectedApp.image} alt={selectedApp.title} />
              </div>
              <div className="app-modal-info">
                <h3>{selectedApp.title}</h3>
                <p>{selectedApp.description}</p>
                <div className="app-modal-features">
                  <h4>Principais recursos:</h4>
                  <ul>
                    {selectedApp.features?.split(',').map((feature, index) => (
                      <li key={index}>{feature.trim()}</li>
                    ))}
                  </ul>
                </div>
                <div className="app-modal-tech">
                  <span>Tecnologias: {selectedApp.tech}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
