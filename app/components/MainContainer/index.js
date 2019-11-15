import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const Root = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: inherit;
  flex-direction: inherit;
  box-sizing: border-box;
  @media ${customMediaQuery.aboveSmallestTablet} {
    padding: 0 1rem;
  }
  @media ${customMediaQuery.aboveSmallestHd} {
    && {
      width: 120rem;
      padding: 0 2rem;
      ${props => props.fluid && 'width: 100%'}
    }
  }
  && {
    ${props => props.CustomStyle}
  }
`;

function MainContainer({ children, fluid, CustomStyle }) {
  return (
    <Root fluid={fluid} CustomStyle={CustomStyle}>
      {children}
    </Root>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  CustomStyle: PropTypes.arrayOf(PropTypes.string),
};

MainContainer.defaultTypes = {
  fluid: false,
  CustomStyle: null,
};

export default MainContainer;
