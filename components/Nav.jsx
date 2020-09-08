import React from 'react';
import Link from 'next/link';
import Image from './Image';
import styles from '../styles/Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a>
        <Image src="logo.png" alt="Logo" />
      </a>
    </Link>
  </nav>
);

export default Nav;
