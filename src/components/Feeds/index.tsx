import React from 'react';

import { Container, Tabs, Tweets, Tweet } from './styled';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>Tweets</Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;