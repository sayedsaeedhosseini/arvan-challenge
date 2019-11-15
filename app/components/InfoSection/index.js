import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestaurantInfo from './RestaurantInfo';
import StatisticInfo from './StatisticInfo';
import customMediaQuery from '../../style/custom-query';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

const InfoSection = ({ statisticData, restaurantInfo }) => (
  <Root>
    <RestaurantInfo
      restaurantDetails={restaurantInfo}
      ratingData={statisticData}
    />
    <StatisticInfo data={statisticData} />
  </Root>
);

InfoSection.propTypes = {
  statisticData: PropTypes.shape().isRequired,
  restaurantInfo: PropTypes.shape().isRequired,
};

export default InfoSection;
