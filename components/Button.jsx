import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.scss';

const Button = ({ to, label, external, color, textColor }) => {
  const buttonNode = (
    <div
      role="button"
      className={styles.button}
      style={{
        backgroundColor: color,
        color: textColor,
        border: color ? `0.2rem solid ${color}` : '0.2rem solid #FFFFFF',
      }}
    >
      {label}
    </div>
  );

  return (
    <>
      {external && (
        <a href={to} target="_blank" rel="noreferrer">
          {buttonNode}
        </a>
      )}
      {!external && (
        <Link href={to}>
          <a>{buttonNode}</a>
        </Link>
      )}
    </>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  external: false,
  color: null,
  textColor: '#FFFFFF',
};

export default Button;
