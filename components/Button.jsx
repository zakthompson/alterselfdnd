import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({
  to,
  label,
  external,
  color,
  textColor,
  onClick,
  halfWidth,
}) => {
  const buttonNode = (
    <div
      role="button"
      className={`inline-block md:w-auto px-5 py-3 text-white rounded-md font-sans font-semibold mb-5 md:mb-0 md:mr-5 text-center hover-dim ${
        halfWidth ? 'w-1/2' : 'w-full'
      }`}
      style={{
        backgroundColor: color,
        color: textColor,
        border: color ? `0.2rem solid ${color}` : `0.2rem solid ${textColor}`,
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );

  return (
    <>
      {external && to && (
        <a href={to} target="_blank" rel="noreferrer">
          {buttonNode}
        </a>
      )}
      {!external && to && (
        <Link href={to}>
          <a>{buttonNode}</a>
        </Link>
      )}
      {onClick && <>{buttonNode}</>}
    </>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  halfWidth: PropTypes.bool,
};

Button.defaultProps = {
  to: null,
  external: false,
  color: null,
  textColor: '#FFFFFF',
  onClick: null,
  halfWidth: false,
};

export default Button;
