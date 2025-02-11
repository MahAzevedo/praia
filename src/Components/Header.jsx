import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../Assets/logo.jpeg';

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            {/* <Link className={styles.logo} to="/" aria-label="Praia"> 
                <Logo />
            </Link>   */}
            <Link> 
              <NavLink>
                Praia
                {/* <img src={Logo} alt="Logo da Praia" /> */}
                {/* trocar logo */}
              </NavLink>
            </Link>
          <h1>Praia</h1>
          <p>Hospedagem</p>  
        </nav>
    </header>
  );
};

export default Header;
