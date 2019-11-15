import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import '../../style/variables.css';

const imageStyles = css`
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 0.6rem;
  margin-right: 1.8rem;
  margin-left: 1rem;
  border: none;
  outline: none;
`;

const ImageHolder = styled.img`
  ${imageStyles}
`;

const ImagePlaceHolder = styled.img`
  ${imageStyles}
  background-color: var(--gray-850);
`;

const RestaurantLogo = props =>
  props.isLoading ? (
    <ImagePlaceHolder />
  ) : (
    <ImageHolder src={props.imageSource} />
  );

RestaurantLogo.propTypes = {
  imageSource: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantLogo.defaultProps = {
  imageSource: null,
  isLoading: false,
};

export default RestaurantLogo;
