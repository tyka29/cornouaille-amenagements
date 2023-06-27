import React from 'react';
import '../style/components/Amenagement.scss';

function SpaAmendment() {
  return (
    <div className="spa-container">
    <div className="text-container">
      <h2>Aménagement de spa en massaranduba</h2>
      <p>
        Le massaranduba appartient à la famille des Sapotacées et provient d’Amérique du Sud et centrale.
        C’est un bois résistant et très coloré. Il résiste naturellement à la putréfaction, aux insectes et aux moisissures.
        Il ne requiert pas de traitement. Si on le souhaite, on peut lui appliquer une couche d’huile ou un saturateur.
      
        Si vous aussi vous avez un projet terrasse ou de rénovation de votre terrasse,
        notre équipe est à votre écoute pour vous conseiller et vous accompagner jusqu’à la fin de votre projet.
        Il n’est jamais trop tôt pour commencer à planifier et concrétiser votre projet.
      </p>
      <a className="contact-link" href="/contact">Contactez-nous</a>
    </div>
    <div className="image-container">
    <img src="spa.jpg" alt="Spa" />
  </div>
    </div>
  );
}

export default SpaAmendment;
