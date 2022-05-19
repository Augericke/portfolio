import React from 'react';
import NavBar from '../library/navBar';
import Footer from '../library/footer';

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{React.cloneElement(children)}</main>
      <Footer />
    </>
  );
};

export default Layout;
