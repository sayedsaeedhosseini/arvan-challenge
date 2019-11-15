import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const PaymentPeriodIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 21 21"
    customStyle={props.customStyle}
  >
    <g fill={props.color} id="payment" transform="translate(-.5 -.5)">
      <path
        id="Path_415"
        d="M8 3v-.667A1.333 1.333 0 0 1 9.333 1a1.333 1.333 0 0 1 1.333 1.333V3"
        className="cls-1"
        data-name="Path 415"
        transform="translate(-2.333)"
      />
      <path
        id="Path_416"
        d="M12 3v-.667A1.333 1.333 0 0 1 13.333 1a1.333 1.333 0 0 1 1.333 1.333V3"
        className="cls-1"
        data-name="Path 416"
        transform="translate(-3.667)"
      />
      <path
        id="Path_417"
        d="M16 3v-.667A1.333 1.333 0 0 1 17.333 1a1.333 1.333 0 0 1 1.333 1.333V3"
        className="cls-1"
        data-name="Path 417"
        transform="translate(-5)"
      />
      <path
        id="Path_418"
        d="M20 3v-.667A1.333 1.333 0 0 1 21.333 1a1.333 1.333 0 0 1 1.333 1.333V3"
        className="cls-1"
        data-name="Path 418"
        transform="translate(-6.333)"
      />
      <path
        id="Path_419"
        d="M12.5 16.333H1V7h20v9.333h-2.667"
        className="cls-1"
        data-name="Path 419"
        transform="translate(0 -2)"
      />
      <circle
        id="Ellipse_34"
        cx="2"
        cy="2"
        r="2"
        className="cls-1"
        data-name="Ellipse 34"
        transform="translate(9 7.667)"
      />
      <path
        id="Path_420"
        d="M8 18v.333a6.333 6.333 0 0 0 6.333 6.333 6.333 6.333 0 0 0 6.333-6.333V12A2.625 2.625 0 0 0 18 14.667v2c-2.055 0-4 1.445-4 3.333"
        className="cls-1"
        data-name="Path 420"
        transform="translate(-2.333 -3.667)"
      />
    </g>
  </Svg>
);

PaymentPeriodIcon.propTypes = {
  customStyle: PropTypes.array,
  color: PropTypes.string,
};

PaymentPeriodIcon.defaultProps = {
  customStyle: [],
  color: '#aaa',
};

export default PaymentPeriodIcon;
