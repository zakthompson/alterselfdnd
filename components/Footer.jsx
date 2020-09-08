import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div>&#169; 2020 Fire Inside Studios</div>
    <div>
      Artwork by{' '}
      <a
        href="https://tithi-luadthong.pixels.com/"
        target="_blank"
        rel="noreferrer"
      >
        Tithi Luadthong
      </a>
    </div>
  </footer>
);

export default Footer;
