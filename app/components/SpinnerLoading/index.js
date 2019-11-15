import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const LoadingSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Text = styled.span`
  margin-top: 15px;
  font-size: 1.2rem;
  color: #aaa;
  font-weight: bold;
`;

const handleColor = color => {
  if (color === 'light') {
    return '#ddd';
  }
  if (color === 'dark') {
    return '#999';
  }
  return color;
};

const Loading = props => (
  <LoadingSection>
    <Loader
      type="TailSpin"
      color={handleColor(props.color)}
      height={25}
      width={25}
      timeout={0}
    />
    {props.text && <Text>{props.text}</Text>}
  </LoadingSection>
);

Loading.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Loading;
