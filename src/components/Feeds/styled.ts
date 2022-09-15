import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
`
export const Tabs = styled.div `
  margin-top: 5px;

  color: var(--twitter);
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding: 16px 0px;

  cursor: pointer;
  border-radius: 1px;
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`
export const Tweet = styled.div`

`