import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


// import Logo from '../Assets/logo.jpeg?react';
// import Logo from '../Assets/react.svg';
import Logo from '../Assets/logo.jpeg';
// import reactLogo from './assets/react.svg';

const Header = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            {/* <Link className={styles.logo} to="/" aria-label="Praia"> */}
            {/* <Logo /> */}
            {/* <img src={Logo} alt="Logo da Praia" /> */}
            <Link className={styles.logo} to="/" aria-label="Praia">
                <img src={Logo} alt="Logo da Praia" />
            </Link>
            {/* </Link> */}  
          <h1>Praia</h1>
          <p>Hospedagem</p>  
        </nav>
    </header>
  );
};

export default Header;
