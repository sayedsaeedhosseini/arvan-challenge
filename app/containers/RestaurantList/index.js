import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Container from '../../components/MainContainer';
import customMediaQuery from '../../style/custom-query';
import MainLayout from '../../components/MainLayout';

const Root = styled.div`
  width: 100%;
  padding-top: 5rem;
  @media ${customMediaQuery.aboveSmallestPhablet} {
    && {
      padding-top: 12rem;
    }
  }
`;

// async function onUserLogOutClicked() {
//   const logOutRespond = await userLogOut();
//   if (logOutRespond.ok) {
//     if (logOutRespond.data.status) {
//       localStorage.clear();
//       window.location.href = '/login';
//     }
//   } else {
//     if (logOutRespond.status === 401) {
//       localStorage.clear();
//       window.location.href = '/login';
//     }
//     console.error('مشکلی پیش آمده است لطفا مجدد اقدام نمایید.');
//   }
// }

export const RestaurantList = props => (
  <MainLayout>
    <Root>
      <Container>
        <Helmet defaultTitle="Note List | Sayed Saeed Hosseini" />
        asdas
      </Container>
    </Root>
  </MainLayout>
);

RestaurantList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

RestaurantList.defaultProp = {};

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(RestaurantList);
