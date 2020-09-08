import React from 'react';
import Button from './Button';
import styles from '../styles/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h2>A 5th-Edition Dungeons &amp; Dragons adventure.</h2>
        <p>
          Hang out with the community and watch the narrative unfold in
          real-time. Or, read through new chapters as they&apos;re released in
          our archive.
        </p>
        <div className={styles.buttons}>
          <Button
            to="https://discord.gg/NhvtRvH"
            label="Join Us on Discord"
            color="#7289DA"
            external
          />
          <Button to="/archive" label="Read the Archive" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
