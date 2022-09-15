import React from 'react';

import { 
  Container, 
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  CalendarIcon,
  Followage,
  EditButton,
  Feed
} from './styled';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Weversson Moraes</h1>
        <h2>@weversson_moraes</h2>

        <p>Developer at <a href="#">@Weversson</a></p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junho de 2004 
          </li>
          <li>
            <CalendarIcon />
            Ingressou em Janeiro de 2021
          </li>
        </ul>

        <Followage>
          <span>
            <strong>241</strong> Seguindo 
          </span>
          <span>
            <strong>2,2 mi </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;