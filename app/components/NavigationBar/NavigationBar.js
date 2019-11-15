import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { scrollToElement } from '../../utils/scrollToHelper';
import './NavigationBar.css';
import NavigationBarDesktop from '../NavigationBarDesktop';
import NavigationBarMobile from '../NavigationBarMobile';

const scrollToCategory = (categoryId, offset) => {
  scrollToElement(`#${categoryId}`, { offset });
};

const NavigationBarWrapper = styled.div`
  width: 100%;
`;

const NavigationBar = props => (
  <NavigationBarWrapper>
    <NavigationBarDesktop
      onScroll={id => {
        scrollToCategory(id, props.offset);
      }}
      items={props.items}
      listHeader={props.listHeader}
    />
    <NavigationBarMobile
      onScroll={id => {
        scrollToCategory(id, props.offset);
      }}
      items={props.items}
      listHeader={props.listHeader}
    />
  </NavigationBarWrapper>
);

NavigationBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  listHeader: PropTypes.string,
  offset: PropTypes.number,
};

NavigationBar.defaultProps = {
  listHeader: '',
  offset: 0,
};

export default NavigationBar;
