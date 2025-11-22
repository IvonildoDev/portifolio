import { FormEvent, useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Newsletter logic here
    alert('Obrigado por se inscrever!');
    setEmail('');
  };

  return (
    <section className="section-newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Fique atualizado com minhas novidades</h2>
          <p>Assine minha newsletter para receber atualizações sobre novos projetos e artigos</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              Assinar <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
