import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const SadFaceIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    customStyle={props.customStyle}
  >
    <path
      fill="#9D9D9D"
      fillRule="evenOdd"
      d="M25.418 25.687a14.626 14.626 0 0 1-10.444 4.354A14.624 14.624 0 0 1 4.53 25.687 14.811 14.811 0 0 1 .204 15.178c0-3.971 1.536-7.703 4.326-10.511A14.628 14.628 0 0 1 14.974.313a14.63 14.63 0 0 1 10.444 4.354 14.818 14.818 0 0 1 4.326 10.511c0 3.969-1.537 7.702-4.326 10.509zM14.974 2.41c-6.996 0-12.688 5.727-12.688 12.768 0 7.039 5.692 12.766 12.688 12.766s12.687-5.727 12.687-12.766c0-7.041-5.691-12.768-12.687-12.768zm6.068 9.31c0 .887-.713 1.605-1.595 1.605-.624 0-1.149-.369-1.412-.894l-.9.394-.83-1.923 5.455-2.383.829 1.923-1.657.724c.064.174.11.358.11.554zm-1.089 8.785l-9.367 2.784-.589-2.011 9.365-2.784.591 2.011zm-8.437-8.122a1.59 1.59 0 0 1-1.444.942 1.6 1.6 0 0 1-1.595-1.605c0-.193.047-.373.109-.545l-1.619-.667.789-1.94 5.503 2.267-.789 1.941-.954-.393z"
    />
  </Svg>
);

SadFaceIcon.propTypes = {
  customStyle: PropTypes.array,
};

SadFaceIcon.defaultProps = {
  customStyle: [],
};

export default SadFaceIcon;
