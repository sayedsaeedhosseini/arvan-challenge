import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import Label from '../Label';
import ChiliIcon from '../ChiliIcon';

class InputAnimated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  myChangeHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const LabelClasses = classnames(this.props.lblClass, {
      'field-active': this.state.inputValue,
    });
    const iconClasses = classnames(this.props.chiliIcon, {
      'field--icon--active': this.state.inputValue,
    });
    return (
      <div className="relativeMatter block__element--input-animated">
        <Label classes={LabelClasses} text={this.props.text} />
        {this.props.chiliIcon ? <ChiliIcon classes={iconClasses} /> : null}
        <input
          className={this.props.inputClass}
          type={this.props.type}
          name={this.props.name}
          onChange={this.myChangeHandler}
          onClick={this.myChangeHandler}
        />
      </div>
    );
  }
}
InputAnimated.propTypes = {
  lblClass: PropTypes.string,
  chiliIcon: PropTypes.string,
  text: PropTypes.string,
  inputClass: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
export default InputAnimated;
