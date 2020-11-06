/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function BackToTop({ container }) {
  const [offset, setOffset] = useState(0);

  function scrollToTop() {
    container.current.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    function handleScroll(e) {
      setOffset(e.target.scrollTop);
    }

    if (container) {
      const ref = container.current;
      ref.addEventListener('scroll', handleScroll);

      return () => {
        ref.removeEventListener('scroll', handleScroll);
      };
    }
    return () => {};
  }, [container]);

  return (
    <div
      className={`fixed transition-opacity duration-500 top-button ${
        offset > 1000 ? 'opacity-75' : 'opacity-0'
      }`}
    >
      <Button
        onClick={() => scrollToTop(container)}
        color="#000000"
        label="Back to Top"
      />
    </div>
  );
}

BackToTop.propTypes = {
  container: PropTypes.shape({
    current: PropTypes.any,
  }),
};

BackToTop.defaultProps = {
  container: null,
};
