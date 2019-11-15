import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const HappyFaceIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    customStyle={props.customStyle}
  >
    <path
      fill="#9E9E9E"
      fillRule="evenOdd"
      d="M25.448 25.67a14.628 14.628 0 0 1-10.445 4.353A14.629 14.629 0 0 1 4.559 25.67 14.81 14.81 0 0 1 .233 15.162c0-3.97 1.537-7.702 4.326-10.509A14.629 14.629 0 0 1 15.003.3c3.946 0 7.656 1.546 10.445 4.353a14.81 14.81 0 0 1 4.326 10.509c0 3.97-1.536 7.702-4.326 10.508zM15.003 2.397c-6.995 0-12.686 5.726-12.686 12.765 0 7.038 5.691 12.765 12.686 12.765 6.996 0 12.687-5.727 12.687-12.765 0-7.039-5.691-12.765-12.687-12.765zm4.816 19.837a7.945 7.945 0 0 1-4.816 1.61 7.947 7.947 0 0 1-4.793-1.594 8.039 8.039 0 0 1-2.872-4.045l1.985-.635a5.941 5.941 0 0 0 5.68 4.178 5.935 5.935 0 0 0 5.693-4.218l1.991.621a8.16 8.16 0 0 1-2.868 4.083zm-.343-8.924a1.6 1.6 0 0 1-1.594-1.605 1.6 1.6 0 0 1 1.594-1.605 1.6 1.6 0 0 1 1.597 1.605 1.6 1.6 0 0 1-1.597 1.605zm-9.374 0a1.6 1.6 0 0 1-1.595-1.605 1.6 1.6 0 0 1 1.595-1.605 1.6 1.6 0 0 1 1.595 1.605 1.6 1.6 0 0 1-1.595 1.605z"
    />
  </Svg>
);

HappyFaceIcon.propTypes = {
  customStyle: PropTypes.array,
};

HappyFaceIcon.defaultProps = {
  customStyle: [],
};

export default HappyFaceIcon;
