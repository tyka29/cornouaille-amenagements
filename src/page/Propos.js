import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/components/Footer.scss';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner'

const FooterPage = () => {
  const handleEmailClick = () => {
    const emailLink = 'mailto:mnicolas29@hotmail.com';
    window.open(emailLink);
  };

  return (
      <footer>
    <Navbar />
    <Banner />
    <div className="container">
        <div className="row-container">
          <div className="col-md-12">
            <div id="propos">
              <h4>Qui sommes nous?</h4>
              <p>
              
Cornouaille Aménagements est une entreprise de maçonnerie générale basée à Concarneau.

Déplacements Finistère Sud et jusqu’à Hennebont dans le Morbihan

              </p>
              <p>
                Une idée, une envie ? Nous vous accompagnons dans vos projets :
              </p>
              <ul>
                <li>🔆 Piscines</li>
                <li>🔆 Terrasse</li>
                <li>🔆 Extension</li>
                <li>🔆 Menuiseries extérieures</li>
                <li>🔆 Aménagements extérieurs (clôtures, allées, jardinières…)</li>
              </ul>
              <p>
                Contactez-nous pour étudier ensemble les possibilités qui s’offrent à vous.
              </p>
              <ul>
                <li>✏️ Devis gratuit</li>
                <li>✏️ Un suivi personnalisé</li>
                <li>✏️ Des matériaux de qualité</li>
                <li>✏️ Les meilleures garanties possibles dans chaque domaine</li>
              </ul>
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
                  <a href="mailto:mnicolas29@hotmail.com" onClick={handleEmailClick} className="contact-link">
                    Contactez-nous
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <p className="text-up">Cornouaille Aménagements Concarneau - Entreprise de construction, créateur de projets</p>
          <div className="col-md-6">
            <h4>Follow us on:</h4>
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
            © Cornouaille Aménagements - {new Date().getFullYear()} - Tous droits réservés. Site créé par Tyka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
