import React from 'react';
import IndexWrapper, { IntroduceBox } from 'styles/pages/IndexWrapper';
import { mainImage } from 'resources/renderImages';
import { mainIntroduceWord } from 'resources/renderWords';

const Home = () => {
  const introduceWords = mainIntroduceWord();

  return (
    <IndexWrapper>
      <IntroduceBox>
        <section className="IntroduceBox-Title">
          <h1>{introduceWords.title_1}<br/>{introduceWords.title_2}</h1>
          <p>{introduceWords.content}</p>
        </section>
        <img className="IntroduceBox-Image"
          src={mainImage()}
          />
      </IntroduceBox>
    </IndexWrapper>
  );
};

export default Home;