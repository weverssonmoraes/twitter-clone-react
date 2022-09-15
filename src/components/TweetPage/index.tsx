import React from 'react';

import { 
  Container,
  Retweeted,
  PinIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styled';

const TweetPage: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <PinIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Weversson Moraes</strong>
            <span>@weversson_moraes</span>
            <Dot />
            <time>15 de set</time>
          </Header>

          <Description>
            Hello World 
          </Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon />
              672
            </Status>
            <Status>
              <RetweetIcon />
              1134
            </Status>
            <Status>
              <LikeIcon />
              12765
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default TweetPage;