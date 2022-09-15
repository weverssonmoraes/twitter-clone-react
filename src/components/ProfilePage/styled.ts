import styled, { css } from 'styled-components';
import Button from '../Button'
import Feeds from '../Feeds'
import { LocationOn, Cake, Calendar, BadgeCheck } from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Banner = styled.div`
  background: url("../public/Landscape-Color.jpg");
  background-size: cover;
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  position: relative;
`
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  
  border: 3.75px solid var(--primary);
  background: url('../public/mulher.jpg');
  background-size: cover;
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`
export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: 800;
    font-size: 19px;
  }

  > h2 {
    color: var(--gray);
    font-size: 15px;
    font-weight: 400;
  }

  > p {
    font-size: 15px;
    margin-top: 15px;
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      list-style: none;
      color: var(--gray);
      display: flex;
      align-items: center;
    }
  }
`

export const CheckIcon = styled(BadgeCheck)`
  width: 25px;
  height: 25px;
  fill: var(--white);
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
  margin-right: 5px;
`

export const LocationIcon = styled(LocationOn) `
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;
export const CalendarIcon = styled(Calendar)`
  ${iconCSS}
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 15px;
    }
  }
`

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`

export const Feed = styled(Feeds)`

`