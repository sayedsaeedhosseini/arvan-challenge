import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const PhoneIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="24"
    viewBox="0 0 18 24"
    customStyle={props.customStyle}
  >
    <g id="phone-button" transform="translate(-3)">
      <path
        fill="none"
        stroke="#929292"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2px"
        id="Path_14"
        d="M6 1h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
        className="cls-1"
        data-name="Path 14"
      />
      <circle
        fill="#929292"
        id="Ellipse_2"
        cx="1"
        cy="1"
        r="1"
        className="cls-2"
        data-name="Ellipse 2"
        transform="translate(11 18)"
      />
    </g>
  </Svg>
);

PhoneIcon.propTypes = {
  customStyle: PropTypes.array,
};

PhoneIcon.defaultProps = {
  customStyle: [],
};

export default PhoneIcon;
