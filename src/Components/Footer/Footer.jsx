import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.footer}></div>
      <p>Renata Bahiense - aluguel de casa para hospedagem.</p>
      <p>Instagram</p>
      <p>Contato: 9999-9999</p>
    </footer>
  );
};

export default Footer;
