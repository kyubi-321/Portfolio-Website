import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #333;
  color: #ffffff;
`;

const FooterText = styled.p`
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2021 My Portfolio Website. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
