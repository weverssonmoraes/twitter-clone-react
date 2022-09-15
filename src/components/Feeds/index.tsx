import React from 'react';

import TweetPage from '../TweetPage';

import { Container, Tabs, Tweets } from './styled';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>Tweets</Tabs>

      <Tweets>
        <TweetPage />
        <TweetPage />
        <TweetPage />
        <TweetPage />
        <TweetPage />
      </Tweets>
    </Container>
  );
}

export default Feed;