import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import BaseInputText from '../BaseTextInput/BaseTextInput';
import '../../style/variables.css';
import IconCircleCross from '../icons/CircleCross/CircleCross';

const HasError = css`
  font-size: 1.3rem;
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Disabled = css`
  color: var(--gray-700);
`;

const HasValue = css`
  top: -7rem;
  right: 0.2rem;
  font-size: 1.3rem;
  color: var(--gray-400);
`;

const Root = styled.div`
  position: relative;
  width: 100%;
  .group .clear {
    display: none;
  }

  .group.hasValue .clear {
    display: inline-block;
  }

  .group.hasDecorator .clear {
    display: none;
  }

  .group .input:focus .clear {
    display: inline-block;
  }
  ${props => props.rootCustomStyle};
`;

const BasicTextInput = styled(BaseInputText)`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  display: block;
  border: 0.1rem solid var(--gray-700);
  border-radius: var(--border-radius-base);
  width: 100%;
  height: 4.2rem;
  box-sizing: border-box;
  background-color: var(--gray-900);
  box-shadow: none;
  color: var(--gray-200);
  outline: none;
  &.ltr {
    direction: ltr;
    text-align: left;
  }
  ${props => props.disabled && Disabled}
  ${props => props.hasIcon && 'padding-right: 3.5rem;'}
  ${props => props.ltr && 'direction: ltr; text-align: left;'}
  ${props => props.inputCustomStyle};
`;

const Label = styled.label`
  color: var(--gray-650);
  font-size: 1.4rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  right: 1rem;
  margin: auto;
  transition: 0.2s ease all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  ${props => props.error && HasError}
  ${props => props.disabled && Disabled}
  ${props => props.inputHasValue && HasValue}
  ${props => props.hasIcon && 'right: 4rem;'}
`;

const Icon = styled.div`
  position: absolute;
  height: auto;
  right: 0.5rem;
  color: var(--gray-400) !important;
  margin: auto;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const ClearButton = css`
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 2rem !important;
  cursor: pointer;
  color: var(--gray-400) !important;
`;

const Decorator = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 0;
`;

const ErrorMsg = styled.div`
  color: var(--red);
  font-size: 1.2rem;
  margin-top: 0.5rem;
  display: none;
  position: absolute;
  bottom: -2.5rem;
  ${props => props.error && 'display: block;'}
`;

const Helper = styled.p`
  color: var(--gray-500);
  font-size: 1.2rem;
  ${props => props.disabled && Disabled}
`;

const MaterialTextInput = props => {
  const [inputValue, setInputValue] = useState(props.value);
  const [inputHasValue, setInputHasValue] = useState(props.value.length > 0);

  useEffect(() => {
    setInputValue(props.value);
    setInputHasValue(props.value.length > 0);
  }, [props.value]);

  const emptyTextField = () => {
    if (!props.controlled) {
      setInputValue('');
      handleChange('');
    } else {
      props.onChange('');
    }
    props.onChangeDebounced('');
  };

  const handleChange = value => {
    props.onChange(value);
    setInputHasValue(value.length > 0);
  };

  const {
    inputCustomStyle,
    label,
    icon,
    rootCustomStyle,
    error,
    errorMsg,
    ltr,
    value,
    controlled,
    helper,
    disabled,
    decoratorComponent,
    showClearButton,
    ...rest
  } = props;
  const hasIcon = icon !== null;
  return (
    <Root
      rootCustomStyle={props.rootCustomStyle}
      hasIcon
      error={error}
      disabled={disabled}
      inputHasValue={inputHasValue}
      decoratorComponent={decoratorComponent !== null}
    >
      {controlled ? (
        <BasicTextInput
          {...rest}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          ltr={ltr}
          hasIcon={hasIcon}
          inputCustomStyle={props.inputCustomStyle}
        />
      ) : (
        <BasicTextInput
          {...rest}
          value={inputValue}
          inputHasValue={inputHasValue}
          ltr={ltr}
          hasIcon={hasIcon}
          onChange={val => {
            handleChange(val);
            setInputValue(val);
          }}
          disabled={disabled}
          inputCustomStyle={props.inputCustomStyle}
        />
      )}
      <Label
        disabled={disabled}
        inputHasValue={inputHasValue}
        hasIcon={hasIcon}
        error={error}
      >
        {label}
      </Label>
      {hasIcon && <Icon>{icon}</Icon>}
      <div
        role="presentation"
        onClick={emptyTextField}
        style={{
          display: inputValue.length !== 0 && showClearButton ? 'flex' : 'none',
        }}
      >
        <IconCircleCross customStyle={ClearButton} ltr={ltr} />
      </div>
      {decoratorComponent && <Decorator>{decoratorComponent}</Decorator>}
      {error && errorMsg ? (
        <ErrorMsg error={error}>{error && errorMsg}</ErrorMsg>
      ) : (
        <Helper disabled={disabled}>{helper}</Helper>
      )}
    </Root>
  );
};

MaterialTextInput.defaultProps = {
  value: '',
  placeholder: '',
  inputCustomStyle: '',
  icon: null,
  onChange: () => {},
  onChangeDebounced: () => {},
  debounceRate: 300,
  rootCustomStyle: '',
  error: false,
  errorMsg: '',
  helper: '',
  ltr: false,
  controlled: false,
  disabled: false,
  decoratorComponent: null,
  showClearButton: true,
};

MaterialTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputCustomStyle: PropTypes.array,
  icon: PropTypes.node,
  onChangeDebounced: PropTypes.func,
  debounceRate: PropTypes.number,
  rootCustomStyle: PropTypes.array,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
  ltr: PropTypes.bool,
  controlled: PropTypes.bool,
  disabled: PropTypes.bool,
  decoratorComponent: PropTypes.node,
  showClearButton: PropTypes.bool,
};

export default MaterialTextInput;
