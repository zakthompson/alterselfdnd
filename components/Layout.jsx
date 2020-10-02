import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ background, title, header, description, children }) => {
  const { src, type, position, crop } = background;
  return (
    <div className="relative w-full h-full">
      <Head title={title} />
      <div className="absolute inset-0 flex flex-col overflow-auto">
        <header className="relative flex flex-col h-screen-2/3">
          {background.src && (
            <Image
              bg
              src={src}
              type={type}
              position={position}
              crop={crop}
              alt="Background"
              fade
            />
          )}
          <Nav />
          <div className="flex w-full flex-1 flex-col items-center p-3 z-10 md:mt-32">
            <h1>{header}</h1>
            <h4>{description}</h4>
          </div>
        </header>
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
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  background: {},
  description: null,
};

export default Layout;
