import React from 'react';
import '../style/components/Piscine.scss';

function Piscine() {
  return (
    <div className="piscine-container">
      <div className="text-container">
        <h2 className="title">La conception et le design sont des éléments essentiels lors de la création d'une piscine.</h2>
        <p>
          La conception et le design jouent un rôle crucial dans la création d'une piscine, car ils déterminent à la fois l'esthétique et la fonctionnalité de l'espace aquatique. Voici quelques points importants à considérer lors de la conception et du design d'une piscine :
        </p>
        <ul>
          <li>Taille et forme : Déterminez la taille et la forme de la piscine en fonction de l'espace disponible, de vos besoins et de vos préférences.</li>
          <li>Profondeur : Réfléchissez à la profondeur de la piscine en fonction de son utilisation prévue.</li>
          <li>Matériaux : Choisissez attentivement les matériaux pour la structure de la piscine, le revêtement intérieur et les margelles.</li>
          <li>Éléments de design : Pensez aux éléments tels que cascades, fontaines, éclairages subaquatiques, etc.</li>
          <li>Paysagement : Intégrez le paysagement pour créer une harmonie entre la piscine et votre jardin.</li>
          <li>Sécurité : Assurez-vous de prendre en compte les mesures de sécurité appropriées.</li>
        </ul>
        <p>
          Lorsque vous envisagez un projet de piscine, il est toujours recommandé de travailler avec des professionnels expérimentés. Leur expertise vous aidera à concevoir et à réaliser une piscine qui répond à vos attentes, à votre style de vie et à vos contraintes budgétaires. N'hésitez pas à faire appel à notre équipe, nous serons ravis de vous conseiller et de vous accompagner dans la réalisation de votre projet de piscine.
        </p>
        <a className="contact-link" href="/contact">Contactez-nous</a>
      </div>
      <div className="image-container">
        <img src="piscine.jpg" alt="Piscine" />
      </div>
    </div>
  );
}

export default Piscine;
