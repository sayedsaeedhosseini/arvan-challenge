import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
  ${props => props.ltr && 'left: auto; right: 1rem; text-align: left;'}
`;

const IconCircleCross = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width="20"
    height="20"
    customStyle={props.customStyle}
    ltr={props.ltr}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M9 1.5A7.493 7.493 0 0 0 1.5 9c0 4.148 3.353 7.5 7.5 7.5 4.148 0 7.5-3.352 7.5-7.5 0-4.147-3.352-7.5-7.5-7.5zm3.75 10.193l-1.057 1.057L9 10.057 6.308 12.75 5.25 11.693 7.942 9 5.25 6.308 6.308 5.25 9 7.942l2.693-2.692 1.057 1.058L10.057 9l2.693 2.693z"
      />
      <path d="M0 0h18v18H0z" />
    </g>
  </Svg>
);

IconCircleCross.propTypes = {
  customStyle: PropTypes.array,
  ltr: PropTypes.bool,
};

IconCircleCross.defaultProps = {
  customStyle: [],
  ltr: false,
};

export default IconCircleCross;
