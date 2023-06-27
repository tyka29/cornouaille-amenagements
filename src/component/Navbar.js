import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/components/Navbar.scss';

function Navig() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="../../logo2.png" alt="logo Cornouaille Aménagements" />
        </div>
      </NavLink>
      <div className="navbar__links">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/offer" activeClassName="active">
          Nous rejoindre
        </NavLink>
        <NavLink className="about" to="/propos" activeClassName="active">
          À propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navig;
