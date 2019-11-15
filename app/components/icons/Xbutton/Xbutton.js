import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const XButton = props => (
  <Svg
    viewBox="0 0 130 130"
    xmlns="http://www.w3.org/2000/svg"
    customStyle={props.customStyle}
  >
    <path d="M73.5 64L126 11.5c2.6-2.6 2.6-6.9 0-9.5-2.6-2.6-6.9-2.6-9.5 0L64 54.5 11.5 2C8.9-.7 4.6-.7 2 2s-2.6 6.9 0 9.5L54.5 64 2 116.5c-2.6 2.6-2.6 6.9 0 9.5 2.6 2.6 6.9 2.6 9.5 0L64 73.5l52.5 52.5c2.6 2.6 6.9 2.6 9.5 0 2.6-2.6 2.6-6.9 0-9.5L73.5 64z" />
  </Svg>
);

XButton.propTypes = {
  customStyle: PropTypes.array,
};

XButton.defaultProps = {
  customStyle: [],
};

export default XButton;
