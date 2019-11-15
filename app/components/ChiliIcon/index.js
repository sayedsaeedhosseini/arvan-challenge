/**
 *
 * ChiliIcon
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.label`
  color: #929292;
  font-size: 20px;
  bottom: 0;
  right: 0;
  padding-bottom: 8px;
`;
class ChiliIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Icon className={this.props.classes} />;
  }
}
ChiliIcon.propType = {
  classes: PropTypes.string,
};
export default ChiliIcon;
