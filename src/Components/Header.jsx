import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../Assets/logo.jpeg?react';  funcionando ok

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <h1>Renata Bahiense  </h1>
        {/* <h2>aluguel de casa para temporada</h2> */}
      </NavLink>

        <nav className={styles.nav}>
          <ul className={styles.headerUl}>
            <li className={styles.headerUl}>
              <NavLink to="/" className={styles.headerUl}>
                Casa
              </NavLink>
            </li>
            <li className={styles.headerUl}>
              <NavLink to="/" className={styles.headerUl}>
                Sobre
              </NavLink>
            </li>
            <li className={styles.headerUl}>
              <NavLink to="/" className={styles.headerUl}>
                Atrações turísticas
              </NavLink>
            </li>
            <li className={styles.headerUl}>
              <NavLink to="/" className={styles.headerUl}>
                Mapa
              </NavLink>
            </li>
            <li className={styles.headerUl}>
              <NavLink to="/" className={styles.headerUl}>
                Contato
              </NavLink>
            </li>
          </ul> 
        </nav>
    </header>
  );
};

export default Header;
