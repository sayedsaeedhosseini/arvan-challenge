import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const UnlockedIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="24"
    viewBox="0 0 20 24"
    customStyle={props.customStyle}
  >
    <g id="unlocked" transform="translate(-2)">
      <path
        id="Rectangle_3"
        d="M0 0h18v12H0z"
        className="cls-1"
        data-name="Rectangle 3"
        transform="translate(3 11)"
        fill="none"
        stroke="#929292"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
      <circle
        id="Ellipse_3"
        cx="2"
        cy="2"
        r="2"
        className="cls-1"
        data-name="Ellipse 3"
        transform="translate(10 15)"
        fill="none"
        stroke="#929292"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
      <path
        id="Path_15"
        d="M17 6a4.951 4.951 0 0 0-4.9-5H12a4.951 4.951 0 0 0-5 4.9V11"
        className="cls-1"
        data-name="Path 15"
        fill="none"
        stroke="#929292"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
    </g>
  </Svg>
);

UnlockedIcon.propTypes = {
  customStyle: PropTypes.array,
};

UnlockedIcon.defaultProps = {
  customStyle: [],
};

export default UnlockedIcon;
