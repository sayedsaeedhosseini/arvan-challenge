import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../MainContainer';
import customMediaQuery from '../../style/custom-query';

const Root = styled.header`
  width: 100%;
  overflow: hidden;
  display: flex:
  align-items: center;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      height: 6.6rem;
      background-color:#FFFFFF;
      box-shadow: 0 0.1rem 3rem -0.7rem rgba(0,0,0,0.06);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const LogoContainer = styled.a`
  width: 16rem;
  height: 70%;
  overflow: hidden;
  ${props => props.isHidden && 'display:none;'}
  &:hover {
    text-decoration: none;
  }
`;

const TextMenu = styled.button`
  font-size: 1.4rem;
  color: #929292;
  cursor: pointer;
  background: transparent;
  margin-left: 1rem;
  span {
    margin-left: 1rem;
    font-size: 1.2rem;
    vertical-align: middle;
  }
  @media ${customMediaQuery.aboveSmallestTablet} {
    color: #434343;
    font-size: 1.3rem;
    margin-right: 0;
    && {
      span {
        margin-left: 1rem;
        font-size: 2.2rem;
        vertical-align: middle;
      }
    }
  }
`;

const headerContainer = css`
  height: 100%;
`;

function Header() {
  return (
    <Root>
      <Container CustomStyle={headerContainer}>
        <Wrapper>
          <LogoContainer href="../restaurant-list">
          </LogoContainer>
          <TextMenu>
            <span className="chilivery-header-exit" />
            خروج
          </TextMenu>
        </Wrapper>
      </Container>
    </Root>
  );
}

export default Header;
