import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const PokerFaceIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    customStyle={props.customStyle}
  >
    <path
      fill="#9E9E9E"
      fillRule="evenOdd"
      d="M25.471 25.67a14.628 14.628 0 0 1-10.445 4.353A14.629 14.629 0 0 1 4.582 25.67 14.806 14.806 0 0 1 .255 15.162 14.81 14.81 0 0 1 4.582 4.653 14.629 14.629 0 0 1 15.026.3c3.946 0 7.656 1.546 10.445 4.353a14.81 14.81 0 0 1 4.326 10.509c0 3.97-1.536 7.702-4.326 10.508zM15.026 2.397C8.03 2.397 2.34 8.123 2.34 15.162c0 7.038 5.69 12.765 12.686 12.765 6.996 0 12.688-5.727 12.688-12.765 0-7.039-5.692-12.765-12.688-12.765zm4.473 10.913a1.6 1.6 0 0 1-1.594-1.605 1.6 1.6 0 0 1 1.594-1.605 1.6 1.6 0 0 1 1.596 1.605 1.6 1.6 0 0 1-1.596 1.605zm.41 8.605h-9.765v-2.096h9.765v2.096zm-9.784-8.605a1.6 1.6 0 0 1-1.596-1.605 1.6 1.6 0 0 1 1.596-1.605 1.6 1.6 0 0 1 1.594 1.605 1.6 1.6 0 0 1-1.594 1.605z"
    />
  </Svg>
);

PokerFaceIcon.propTypes = {
  customStyle: PropTypes.array,
};

PokerFaceIcon.defaultProps = {
  customStyle: [],
};

export default PokerFaceIcon;
