import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import RateStar from './RateStar';
import RateNumber from './RateNumber';
import CircleProgressBar from '../CircleProgressBar';
import customMediaQuery from '../../style/custom-query';

const Wrapper = styled.div`
  text-align: center;
`;

const Name = styled.span`
  font-size: 1.6rem;
  color: #434343;
  font-weight: bold;
  padding: 1.7rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    flex-direction: column;
  }
`;

const Status = styled.p`
  font-size: 1.3rem;
  color: #ef4355;
  padding-right: 1rem;
  margin-top: 0.3rem;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    padding: 0;
  }
  ${props => props.isActive && 'color: #1cbd2f;'}
`;

function RestaurantInfo({ ratingData, restaurantDetails }) {
  return (
    <Wrapper>
      <Logo
        active={{ value: restaurantDetails.status === 1 }}
        LogoSource={restaurantDetails.profile}
      />
      <Name>
        <p>{restaurantDetails.name}</p>
        <Status isActive={restaurantDetails.status === 1}>
          {restaurantDetails.status === 1 ? '(فعال است)' : '(غیر فعال است)'}
        </Status>
      </Name>
      <CircleProgressBar data={ratingData.rateCount.overallRateData.rates} />
      <RateStar rate={ratingData.rate} />
      <RateNumber rate={ratingData.rate} />
    </Wrapper>
  );
}

RestaurantInfo.propTypes = {
  ratingData: PropTypes.shape().isRequired,
  restaurantDetails: PropTypes.shape().isRequired,
};

export default RestaurantInfo;
