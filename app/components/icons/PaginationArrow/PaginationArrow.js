import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const PaginationArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="11"
    customStyle={props.customStyle}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M5.782 6.041L1.257 10.77a.715.715 0 0 1-1.043 0 .796.796 0 0 1 0-1.089l4.004-4.184L.215 1.311a.794.794 0 0 1 0-1.089.714.714 0 0 1 1.042 0l4.525 4.729a.788.788 0 0 1 .216.546.787.787 0 0 1-.216.544z"
    />
  </Svg>
);

PaginationArrow.propTypes = {
  customStyle: PropTypes.array,
  color: PropTypes.string,
};

PaginationArrow.defaultProps = {
  customStyle: [],
  color: '#434343',
};

export default PaginationArrow;
