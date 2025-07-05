    // src/pages/HomePage.jsx

import React from 'react';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import { Link } from 'react-router-dom';
import react, { useState } from 'react';

function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Contacto />
    </>
  );
}

export default HomePage;