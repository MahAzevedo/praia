import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../Assets/logo.jpeg?react';  funcionando ok

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/" className={styles.logo}>
                Logo
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.logo}>
                Login | Entrar
              </NavLink>
            </li>
          </ul> 
        </nav>
    </header>
  );
};

export default Header;
