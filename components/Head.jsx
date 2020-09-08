import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import GoogleFonts from 'next-google-fonts';

const Head = ({ children, title }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:wght@400;600&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      {children}
    </NextHead>
  </>
);

Head.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Head.defaultProps = {
  children: null,
};

export default Head;
