import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner'
import Footer from '../component/Footer';
import '../style/components/ContactForm.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire de contact
    console.log('Formulaire soumis !');
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Réinitialiser les champs après soumission du formulaire
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-form-container">
      <Navbar />
      <Banner />
      <div className="card">
        <span className="title">Leave a Comment</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="group">
            <input
              placeholder="‎"
              type="text"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input
              placeholder="‎"
              type="email"
              id="email"
              name="email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea
              placeholder="‎"
              id="comment"
              name="comment"
              rows="5"
              required=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
