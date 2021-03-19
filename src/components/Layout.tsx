import React from 'react';
import LayoutBox from 'styles/components/LayoutBox';
import Header from 'components/Main/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutBox>
      <Header/>
      {children}
    </LayoutBox>
  );
}

export default Layout;
