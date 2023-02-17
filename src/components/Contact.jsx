import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ContactInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  border: none;
`;

const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  border: none;
`;

const ContactButton = styled.button`
  background-color: #0080ff;
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0066cc;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <ContactInput type="text" placeholder="Name" />
        <ContactInput type="email" placeholder="Email" />
        <ContactTextarea placeholder="Message" rows={5} />
        <ContactButton>Send Message</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
