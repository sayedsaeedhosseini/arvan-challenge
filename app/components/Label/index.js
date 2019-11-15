/**
 *
 * Label
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import ProTypes from 'prop-types';

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <label className={this.props.classes}>{this.props.text}</label>;
  }
}
Label.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
};
export default Label;
