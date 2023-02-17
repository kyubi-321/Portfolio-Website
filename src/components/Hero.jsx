import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroP = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  background-color: #0077ff;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #0077ff;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src='images/hero-bg.jpg' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to my website</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet tellus rutrum, ornare nibh et, volutpat nisi.
        </HeroP>
        <HeroButton>Learn More</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
