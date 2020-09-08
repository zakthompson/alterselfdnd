import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Layout
      background={{
        src: 'homehero.jpg',
        type: 'image/jpg',
        position: '35% 0',
        crop: { top: 30 },
      }}
      title="Alter Self"
    >
      <Hero />
    </Layout>
  );
}
