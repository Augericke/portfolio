import React from 'react';

// const styles = require('./layout.module.scss');

type LayoutProps = {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        {React.cloneElement(children)}
      </main>
    </>
  );
};

export default Layout;
