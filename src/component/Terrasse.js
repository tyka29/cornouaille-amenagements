import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/components/Terrasse.scss';

function Terrasse() {
  return (
    <div className="terrasse-container">
      <div className="image-container">
        <img src="terrasse.jpg" alt="Terrasse" />
      </div>
      <div className="text-container">
        <h2>Envie de profiter d’une jolie terrasse dès l’arrivée des beaux jours ?</h2>
        <p>
          Pour en profiter pleinement dès que possible, nous vous conseillons de réfléchir à votre projet maintenant ! En effet, en fonction de la terrasse que vous choisirez de réaliser, un temps de réalisation sera nécessaire. Disponibilités du professionnel, autorisations, travaux (…).
          La période est importante également ; nous recommandons de réaliser ce genre de travaux en automne ou au printemps par rapport aux températures qui restent idéales pour travailler le sol et l’aménager ainsi que pour les matériaux utilisés pour sa réalisation.
          Vous l’aurez compris, un projet terrasse se pense à l’avance ! Si vous envisagez de vous prélasser cet été sur la vôtre, nous vous recommandons de préparer dès maintenant votre projet, de préférence avec un professionnel, qui saura vous conseiller et vous accompagner dans l'ensemble des démarches.
        </p>
        <a className="contact-link" href="/contact">Contactez-nous
        <NavLink to="/contact" activeClassName="active">
        </NavLink></a>
      </div>
    </div>
  );
}

export default Terrasse;
