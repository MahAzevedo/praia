import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
        <li className={styles}>
              <NavLink to="/" className={styles}>
                <h1 className={styles}>
                   - Renata Bahiense - 
                </h1>
                <h2 className={styles}>
                   - aluguel de casa para temporada - 
                </h2>
              </NavLink>
            </li>
        </ul>
      </div>
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={styles}>
              <NavLink to="/" className={styles}>
                Casa
              </NavLink>
            </li>
            <li className={styles.navMenu}>
              <NavLink to="/" className={styles}>
                Sobre
              </NavLink>
            </li>
            <li className={styles}>
              <NavLink to="/" className={styles}>
                Turismo
              </NavLink>
            </li>
            <li className={styles}>
              <NavLink to="/" className={styles}>
                Mapa
              </NavLink>
            </li>
            <li className={styles}>
              <NavLink to="/" className={styles}>
                Contato
              </NavLink>
            </li>
          </ul> 
        </nav>
    </header>
  );
};

export default Header;
