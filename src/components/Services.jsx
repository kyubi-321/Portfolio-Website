import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ServicesTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ServicesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ServicesListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Services</ServicesTitle>
      <ServicesList>
        <ServicesListItem>Web Design</ServicesListItem>
        <ServicesListItem>Web Development</ServicesListItem>
        <ServicesListItem>Mobile App Development</ServicesListItem>
        <ServicesListItem>SEO Optimization</ServicesListItem>
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;
