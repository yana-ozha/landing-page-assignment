
import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function App() {
  useEffect(() => {
    gsap.from('.hero-text', { opacity: 0, y: 20, duration: 1 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="hero-text text-4xl font-bold">Welcome to My Landing Page</h1>
    </div>
  );
}
