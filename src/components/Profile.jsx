import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ProfileTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const ProfileName = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProfileBio = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>About Me</ProfileTitle>
      <ProfileImage src="https://via.placeholder.com/200" alt="Profile" />
      <ProfileName>John Doe</ProfileName>
      <ProfileBio>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a
        malesuada nulla. Nulla facilisi. Proin lobortis velit in enim sagittis
        laoreet. Sed luctus massa dolor, et convallis purus euismod id. Integer
        posuere, lacus ac malesuada ultrices, lorem elit efficitur justo, sed
        pulvinar ipsum risus sed metus.
      </ProfileBio>
    </ProfileContainer>
  );
};

export default Profile;
