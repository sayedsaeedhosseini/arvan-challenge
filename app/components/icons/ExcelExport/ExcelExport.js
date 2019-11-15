import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Svg = styled.svg`
  ${props => props.customStyle};
`;

const ExcelExportIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    customStyle={props.customStyle}
  >
    <g fill={props.color} className="nc-icon-wrapper">
      <path d="M15 15H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h4v2H2v10h12V3h-3V1h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z" />
      <path d="M9 7V1H7v6H4l4 4 4-4z" data-color="color-2" />
    </g>
  </Svg>
);

ExcelExportIcon.propTypes = {
  customStyle: PropTypes.array,
  color: PropTypes.string,
};

ExcelExportIcon.defaultProps = {
  customStyle: [],
  color: '#188fff',
};

export default ExcelExportIcon;
