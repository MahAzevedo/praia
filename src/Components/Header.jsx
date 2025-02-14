import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
// import Logo from '../Assets/logo.jpeg?react';  funcionando ok

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
             {/* <Link className={styles.logo} to="/" aria-label="Praia"> 
                <Logo />
            </Link>    */}
            <Link> 
              <NavLink>
                Logo
                {/* <img src={Logo} alt="Logo da Praia" /> */}
                {/* trocar logo */}
              </NavLink>
            </Link>
            <Link>Login</Link>

        </nav>
    </header>
  );
};

export default Header;
