/**
 *
 * ImageHolder
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  padding: 4px;
  width: 90px;
  img {
    border-radius: 6px;
    width: 100%;
  }
`;

const ImageHolder = props => (
  <Wrapper>
    <img src={props.source} alt={props.alt} />
  </Wrapper>
);

ImageHolder.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageHolder;
