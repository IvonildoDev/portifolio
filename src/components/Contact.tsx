import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, insira sua mensagem';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="section-contact" id="contato">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Entre em Contato</span>
          <h2 className="section-title">
            Vamos <span>Conversar</span>
          </h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:ivonildodev@gmail.com">ivonildodev@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fab fa-linkedin-in"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ivonildo-lima-lima-219659375" target="_blank" rel="noopener noreferrer">
                  Ivonildo Lima
                </a>
              </div>
            </div>

            <div className="contact-text">
              <p>
                Estou sempre aberto a novas oportunidades e projetos. Se você tem uma ideia ou precisa de um
                desenvolvedor web para o seu projeto, não hesite em entrar em contato!
              </p>
              <div className="contact-social">
                <a href="https://www.linkedin.com/in/ivonildo-lima-lima-219659375" target="_blank" rel="noopener noreferrer" className="social-circle">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:ivonildodev@gmail.com" className="social-circle">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderColor: errors.name ? 'red' : '' }}
                />
                {errors.name && <small className="error-message" style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.name}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderColor: errors.email ? 'red' : '' }}
                />
                {errors.email && <small className="error-message" style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.email}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderColor: errors.message ? 'red' : '' }}
                ></textarea>
                {errors.message && <small className="error-message" style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.message}</small>}
              </div>
              <button 
                type="submit" 
                className="btn-submit"
                style={isSubmitted ? { backgroundColor: '#4CAF50' } : {}}
              >
                {isSubmitted ? (
                  <>
                    <i className="fas fa-check"></i> Enviado!
                  </>
                ) : (
                  <>
                    Enviar Mensagem <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
