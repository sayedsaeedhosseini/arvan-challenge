import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import SignIn from '../../components/SignIn';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export function Login() {
  return (
    <Root>
      <Helmet defaultTitle="چیلیوری |‌ ورود به پنل مالک رستوران" />
      <SignIn />
    </Root>
  );
}

const withConnect = connect(
  null,
  null,
);

export default withConnect(Login);
