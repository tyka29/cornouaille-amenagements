import React from 'react';
import '../style/components/Banner.scss';
import TextCarousel from './TextCarousel';

function Navbar() {
  const carouselItems = [
    'Créateur de projets',
    'Maçonnerie générale',
    'Piscine',
    'Terrasse',
    'Extension / menuiseries extérieures',
    'Aménagement extérieur / allées',
    // Ajoutez d'autres éléments ici si nécessaire
  ];

  return (
    <nav className="banner">
      <img src="banner.png" alt="logo Cornouaille Amenagements" />
      <div className="text-overlay">
        <TextCarousel items={carouselItems} />
      </div>
    </nav>
  );
}

export default Navbar;
