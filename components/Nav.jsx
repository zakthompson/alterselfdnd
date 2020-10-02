import React from 'react';
import Link from 'next/link';
import Image from './Image';

const Nav = () => (
  <nav className="flex items-stretch justify-center h-16 md:h-24 py-2 md:py-5 z-10 nav-fade">
    <Link href="/">
      <a className="w-40 md:w-48">
        <Image src="logo.png" type="image/png" alt="Logo" noBlur />
      </a>
    </Link>
  </nav>
);

export default Nav;
