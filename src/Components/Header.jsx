import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Banner from './Banner';
// import LogoMarca from '../Assets/logo.png?react';
// import Logo from '../Assets/logo.jpeg?react'; 

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav}>
            <li className={styles.nav}>
            {/* <img className={styles.photoLogo} src={LogoMarca} alt="Foto da Logo"/> */}
              <NavLink to="/" className={styles.logo}>
                <h1 className={styles.logo}>
                   - Renata Bahiense - 
                </h1>
                <h2 className={styles.logo}>
                   - aluguel de casa para temporada - 
                </h2>
              </NavLink>
            </li>
            <li className={styles.nav}>
              <NavLink to="/" className={styles.nav}>
                Casa
              </NavLink>
            </li>
            <li className={styles.nav}>
              <NavLink to="/" className={styles.nav}>
                Sobre
              </NavLink>
            </li>
            <li className={styles.nav}>
              <NavLink to="/" className={styles.nav}>
                Atrações turísticas
              </NavLink>
            </li>
            <li className={styles.nav}>
              <NavLink to="/" className={styles.nav}>
                Mapa
              </NavLink>
            </li>
            <li className={styles.nav}>
              <NavLink to="/" className={styles.nav}>
                Contato
              </NavLink>
            </li>
          </ul> 
        </nav>
      {/* <Banner /> */}
    </header>
  );
};

export default Header;
