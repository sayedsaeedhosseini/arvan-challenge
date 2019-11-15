import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import RestaurantList from '../RestaurantList';
import Error from '../Error';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function Router() {
  return (
    <AppWrapper>
      <Helmet defaultTitle="Note List | Sayed Saeed Hosseini" />
      <Switch>
        <Route exact path="/" component={RestaurantList} />
        <Route exact path="/restaurant-list" component={RestaurantList} />
        <Route path="/*" component={Error} />
      </Switch>
    </AppWrapper>
  );
}
