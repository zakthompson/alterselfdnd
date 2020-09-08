/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Image.module.scss';

const Image = ({ bg, src, type, alt, position, crop, noBlur, fade }) => (
  <div
    className={styles.imageWrap}
    style={{
      position: bg ? 'absolute' : 'relative',
    }}
  >
    {!noBlur && (
      <img
        className={styles.placeholder}
        src={require(`../assets/images/${src}?lqip`)}
        alt={alt}
        style={{
          objectPosition: position || 'center',
        }}
      />
    )}
    <picture
      className={styles.image}
      style={{
        top: crop.top ? `-${crop.top}%` : 0,
        right: crop.right ? `-${crop.right}%` : 0,
        bottom: crop.bottom ? `-${crop.bottom}%` : 0,
        left: crop.left ? `-${crop.left}%` : 0,
      }}
    >
      <source
        srcSet={require(`../assets/images/${src}?webp`)}
        type="image/webp"
      />
      <source srcSet={require(`../assets/images/${src}`)} type={type} />
      <img
        src={require(`../assets/images/${src}`)}
        alt={alt}
        loading="lazy"
        style={{
          objectPosition: position || 'center',
        }}
      />
    </picture>
    {bg && <div className={`${styles.overlay} ${fade ? styles.fade : ''}`} />}
  </div>
);

Image.propTypes = {
  bg: PropTypes.bool,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  position: PropTypes.string,
  crop: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
  noBlur: PropTypes.bool,
  fade: PropTypes.bool,
};

Image.defaultProps = {
  bg: false,
  position: null,
  crop: {},
  noBlur: false,
  fade: false,
};

export default Image;
