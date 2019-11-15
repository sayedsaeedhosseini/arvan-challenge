import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'underscore';
import styled from 'styled-components';

const Input = styled.input``;
class BaseTextInput extends React.Component {
  static defaultProps = {
    onChange: () => {},
    onEnter: () => {},
    onChangeDebounced: () => {},
    debounceRate: 300,
  };

  static propTypes = {
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onChangeDebounced: PropTypes.func,
    debounceRate: PropTypes.number,
    value: PropTypes.any,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: this.props.value,
    };
  }

  onChangeDebounced = debounce(
    this.props.onChangeDebounced,
    this.props.debounceRate,
  );

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange = e => {
    const { value } = e.target;
    this.props.onChange(value);
    this.onChangeDebounced(value);
    this.setState({ value });
  };

  handleKeyDown = e => {
    const { which, keyCode } = e;
    const { value } = e.target;
    if (which === 13 || keyCode === 13) {
      this.props.onEnter(value);
    }
  };

  render() {
    const {
      onChangeDebounced,
      debounceRate,
      onEnter,
      value,
      ...rest
    } = this.props;
    return (
      <Input
        {...rest}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default BaseTextInput;
