import React from 'react';
import IndexWrapper from 'styles/pages/IndexWrapper';

const Home = () => {
  return (
    <IndexWrapper>
      <img
        src={require("sources/images/weld.jpg")}
        alt="Main picture"
      />
    </IndexWrapper>
  );
};

export default Home;