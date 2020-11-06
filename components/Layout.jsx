import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Head from './Head';
import Nav from './Nav';
import Footer from './Footer';

export const LayoutContext = React.createContext({ container: null });

export default function Layout({
  background,
  title,
  header,
  description,
  children,
}) {
  const { src, type, position, crop } = background;
  const container = useRef(null);

  return (
    <div className="relative w-full h-full">
      <Head title={title} />
      <div
        ref={container}
        className="absolute inset-0 flex flex-col overflow-auto"
      >
        <header className="relative flex flex-col flex-shrink-0 h-screen-2/3">
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
          <div className="z-10 flex flex-col items-center flex-1 w-full p-3 mt-20 text-center md:mt-32">
            <h1>{header}</h1>
            <h4>{description}</h4>
          </div>
        </header>
        <LayoutContext.Provider value={{ container }}>
          <main className="pb-10 flex-grow">{children}</main>
        </LayoutContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

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
