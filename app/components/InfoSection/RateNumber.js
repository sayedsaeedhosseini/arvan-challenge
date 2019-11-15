import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { englishToFarsiNumber } from '../../utils/number';

const Root = styled.div`
  padding-top: 2rem;
  width: 30rem;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const Wrapper = styled.div`
  max-width: 30rem;
  width: 100%;
  height: 4.1rem;
  background-color: #fff;
  border-radius: 0.7rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  font-size: 1.4rem;
  color: #6f6f6f;
  padding-right: 1rem;
`;

const RateWrapper = styled.div`
  text-align: center;
  padding: 0 0.6rem;
  color: #fff;
  background: #97c21e;
  border-radius: 0.4rem;
  margin-left: 1rem;
`;

const RateNum = styled.span`
  font-size: 1.4rem;
  padding-left: 0.6rem;
`;

const RateIcon = styled.span`
  font-size: 1rem;
`;

function FoodQualityRate({ rate }) {
  return (
    <Root>
      <Wrapper>
        <Text>کیفیت غذا</Text>
        <RateWrapper>
          <RateIcon className="chilivery-dashboard-rate" />
          <RateNum>{englishToFarsiNumber(rate.foodQuality)}</RateNum>
        </RateWrapper>
      </Wrapper>
      <Wrapper>
        <Text>سرعت ارسال</Text>
        <RateWrapper>
          <RateIcon className="chilivery-dashboard-rate" />
          <RateNum>{englishToFarsiNumber(rate.deliverySpeed)}</RateNum>
        </RateWrapper>
      </Wrapper>
    </Root>
  );
}

FoodQualityRate.propTypes = {
  rate: PropTypes.shape().isRequired,
};

export default FoodQualityRate;
