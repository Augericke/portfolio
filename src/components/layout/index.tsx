import React from 'react';
import NavBar from '../library/navBar';
import Footer from '../library/footer';

type LayoutProps = {
  children: React.ReactElement;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-primary transition-colors transition-all duration-300 ease-in-out dark:bg-primaryDark">
      <NavBar />
      <main>{React.cloneElement(children)}</main>
      <Footer />
    </div>
  );
};

export default Layout;
