/**
 *
 * HeaderTitle
 *
 */

import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 18px;
  color: #434343;
  font-weight: bold;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 13px;
  margin: 0;
`;
const HeaderSection = props => <Title>{props.children}</Title>;

export default HeaderSection;
