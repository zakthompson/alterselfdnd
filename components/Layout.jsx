import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({ background, title, children }) => {
  const { src, type, position, crop } = background;
  return (
    <div className={styles.root}>
      <Head title={title} />
      {background && (
        <Image bg src={src} type={type} position={position} crop={crop} />
      )}
      <div className={styles.container}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    position: PropTypes.string,
    crop: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
  }),
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  background: null,
};

export default Layout;
