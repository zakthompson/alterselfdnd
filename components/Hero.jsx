import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="h-full flex items-center">
      <div className="p-3 md:-mt-72 hero-text">
        <h2>A 5th-Edition Dungeons &amp; Dragons adventure.</h2>
        <p>
          Hang out with the community and watch the narrative unfold in
          real-time. Or, read through new chapters as they&apos;re released in
          our archive.
        </p>
        <div>
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
