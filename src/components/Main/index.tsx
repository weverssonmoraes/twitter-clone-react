import React from 'react';

import ProfilePage from '../ProfilePage/index'

import { 
  Container,
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styled';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Weversson Moraes</strong>
          <span>758 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
          <HomeIcon className="active"/>
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu>
    </Container>
  );
}

export default Main;