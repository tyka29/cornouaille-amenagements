import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/components/Footer.scss';

const Footer = () => {
  const handleEmailClick = () => {
    const emailLink = 'mailto:mnicolas29@hotmail.com';
    window.open(emailLink);
  };

  return (
    <footer>
      <div className="container">
        <div className="row-container">
          <div className="col-md-12">
            <div id="propos">
              <div className='propos__title'>
              <h4>À propos</h4>
              </div>
              <div className='propos__text'>
              <p>
                Une idée, une envie ? Nous vous accompagnons dans vos projets:
                <br />
                🔆 Piscines
                <br />
                🔆 Terrasse
                <br />
                🔆 Extension
                <br />
                🔆 Menuiseries extérieures
                <br />
                🔆 Aménagements extérieurs (clôtures, allées, jardinières…)
                <br />
                <br />
                </p>
              <p>
                Contactez-nous pour étudier ensemble les possibilités qui s’offrent à vous.
                <br />
                <br />
                ✏️ Devis gratuit
                <br />
                ✏️ Un suivi personnalisé
                <br />
                ✏️ Des matériaux de qualité
                <br />
                ✏️ Les meilleures garanties possibles dans chaque domaine
              </p>
              </div>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <div className="col-md-6">
              <h4>Coordonnées</h4>
              <ul>
                <li>Téléphone : 06 03 11 56 80</li>
                <li>
                  Courriel :{' '}
                  <a href="mnicolas29@hotmail.com" onClick={handleEmailClick}><a className="contact-link" href="/contact">Contactez-nous</a></a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        <div className="footer__end">
          <div className="col-md-12">
            <p className="text-up">Cornouaille Aménagements Concarneau - Entreprise de construction, créateur de projets </p>
            
            <div className="col-md-6">
              <h4>Follow us on :</h4>
              <ul className="follow">
                <a href="https://www.facebook.com/profile.php?id=100054356869612">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
                <a href="https://www.linkedin.com/company/cornouaille-amenagements/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com/cornouaille_amenagements/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </ul>
            </div>

            <hr />
            <p className="text-center">
              Copyright © Cornouaille Aménagements -
              {new Date().getFullYear()}- Tous droits réservés. Site créé par Tyka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
