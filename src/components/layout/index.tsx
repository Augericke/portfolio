import React from 'react';
import NavBar from '../library/navBar';
import Footer from '../library/footer';

type LayoutProps = {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-white dark:bg-black h-screen
                    transition duration-300'>
      <NavBar />
      <main>
        {React.cloneElement(children)}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
