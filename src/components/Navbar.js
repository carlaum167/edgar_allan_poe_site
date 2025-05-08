import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/biography">Biografia</Link>
      <Link to="/works">Obras</Link>
      <Link to="/gallery">Galeria</Link>
    </nav>
  );
}

export default Navbar;