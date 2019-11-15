import React from 'react';
import Container from '../MainContainer';
import styled from 'styled-components';

const Root = styled.footer`
  width: 100%;
  padding: 20px 0;
  background-color: #e7e7e7;
  color: #434343;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  text-align: center;
`;

const MainFooter = () => (
  <Root>
    <Container>
      <Text>&copy; آبان ماه ۱۳۹۸. برای اپ پوشه انجام شد. </Text>
    </Container>
  </Root>
);

export default MainFooter;
