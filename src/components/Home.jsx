import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const HomeText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const HomeButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #333;
    border: 2px solid #333;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to My Portfolio Website</HomeTitle>
      <HomeText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
        malesuada nulla. Nulla facilisi. Proin lobortis velit in enim sagittis
        laoreet.
      </HomeText>
      <HomeButton>Learn More</HomeButton>
    </HomeContainer>
  );
};

export default Home;
