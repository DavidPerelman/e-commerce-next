import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main style={{ marginTop: '3.5rem' }}>{children}</main>
    </div>
  );
};

export default Layout;
