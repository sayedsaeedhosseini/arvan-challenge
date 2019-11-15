import React from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../MainContainer';
import MainHeader from '../Header';
import MainFooter from '../MainFooter';

const MainLayout = props => (
  <MainContainer>
    <MainHeader />
    {props.children}
    <MainFooter />
  </MainContainer>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
