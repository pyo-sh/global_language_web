import React from 'react';
import LayoutBox from 'styles/components/LayoutBox';
import Header from 'components/Main/Header';
import Footer from 'components/Main/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutBox>
      <Header/>
      {children}
      <Footer/>
    </LayoutBox>
  );
}

export default Layout;
