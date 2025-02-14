import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../Assets/logo.jpeg?react';  funcionando ok

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link className={styles.logo}>    
                Logo - Praia
            </Link>
            <Link className={styles.login}>
                Login | Entrar
            </Link>
        </nav>
    </header>
  );
};

export default Header;
