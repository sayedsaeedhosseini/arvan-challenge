import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const IconPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32.5"
    height="32.5"
    customStyle={props.customStyle}
  >
    <path
      fill="#434343"
      fillRule="evenOdd"
      d="M22.5 17.5h-5v5h-3v-5h-5v-3h5v-5h3v5h5v3z"
    />
  </Svg>
);

IconPlus.propTypes = {
  customStyle: PropTypes.array,
};

IconPlus.defaultProps = {
  customStyle: [],
};

export default IconPlus;
