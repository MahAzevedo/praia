import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Praia - Site para hospedagem.</p>
      <p>Instagram</p>
      <p>Contato: 9999-9999</p>
      <img src="/Assets/img-instagram.jpeg" alt="Logo do Instagram" /> 
    </footer>
  );
};

export default Footer;
