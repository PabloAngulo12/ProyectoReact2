import React from 'react';
import Menu from './Menu';

function Header() {
  console.log('Header is rendering');
  return (
    <header className="App-header p-4">
      <h1 className="text-white text-3xl">Mis Halo favoritos</h1>
      <Menu />
    </header>
  );
}

export default Header;
