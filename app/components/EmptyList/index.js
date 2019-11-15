import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const EmptyWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EmptyText = styled.span`
  font-size: 2rem;
  color: ${props => props.color};
  font-weight: bold;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      font-size: 3rem;
    }
  }
`;

const EmptyList = props => (
  <EmptyWrap>
    <EmptyText color={props.color}>{props.text}</EmptyText>
  </EmptyWrap>
);

EmptyList.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

EmptyList.defaultProps = {
  text: '',
  color: '#ddd',
};

export default EmptyList;
