import React from 'react';
import FullscreenLayout from '../components/FullscreenLayout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <FullscreenLayout
      background={{
        src: 'homehero.jpg',
        type: 'image/jpg',
        position: '35% 0',
        crop: { top: 30 },
      }}
      title="Alter Self"
    >
      <Hero />
    </FullscreenLayout>
  );
}
