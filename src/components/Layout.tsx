import React from 'react';
import LayoutBox from 'styles/components/LayoutBox';
// import Header from 'Components/Main/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutBox>
      {children}
    </LayoutBox>
  );
}

export default Layout;
