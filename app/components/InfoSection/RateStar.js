import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { englishToFarsiNumber } from '../../utils/number';

const Wrapper = styled.div`
  padding-bottom: 1.7rem;
  border-bottom: 0.1rem solid #dcdcdc;
  width: 30rem;
  margin: 0 auto;
`;

const StarHolder = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0.5rem 1.5rem 0 rgba(209, 209, 209, 0.1);
  border-radius: 1rem;
  padding: 0.7rem 0.7rem 0 0.7rem;
`;

const Star = styled.div`
  width: 3.4rem;
  height: 3.5rem;
  border-radius: 0.8rem;
  padding: 0.7rem 0.5rem !important;
  margin-left: 0.6rem;
  color: #ffffff;
  overflow: hidden;
  text-align: center;
  background-color: #dcdcdc;
  position: relative;
`;

const StarBackground = styled.span`
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 0;
  background-color: #f8ac34;
  position: absolute;
`;

const Icon = styled.span`
  font-size: 1.6rem;
  position: relative;
`;

const RateNumberWrapper = styled.div`
  float: left;
  padding-top: 0.5rem;
`;

const RateUserNum = styled.span`
  font-size: 1.4rem;
  color: #787878;
  padding: 0 0.5rem;
`;

const RateNumber = styled.span`
  font-size: 1.9rem;
  font-weight: bold;
`;

function generateStarsCounter(rate) {
  const { overall } = rate;
  const decimalPart = overall % 1;
  const numericPart = Math.floor(overall);
  const result = [];
  for (let i = 0; i < numericPart; i += 1) {
    result.push({ percent: 1, id: i });
  }
  if (decimalPart > 0) {
    result.push({
      percent: parseFloat(decimalPart.toFixed(1)),
      id: result.length,
    });
  }
  return result;
}

function renderStarts(rate) {
  const startsCount = generateStarsCounter(rate);
  return startsCount.map(star => (
    <Star className="inline-block" key={star.id}>
      <StarBackground style={{ width: `${star.percent.toFixed(1) * 100}%` }} />
      <Icon className="chilivery-dashboard-rate" />
    </Star>
  ));
}

function RateStars({ rate }) {
  return (
    <Wrapper>
      <StarHolder>
        {renderStarts(rate)}
        <RateNumberWrapper className="inline-block">
          <RateNumber>{englishToFarsiNumber(rate.overall)}</RateNumber>
          <RateUserNum>({englishToFarsiNumber(rate.count)})</RateUserNum>
        </RateNumberWrapper>
      </StarHolder>
    </Wrapper>
  );
}

RateStars.propTypes = {
  rate: PropTypes.shape().isRequired,
};

export default RateStars;
