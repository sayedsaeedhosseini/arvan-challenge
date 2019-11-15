import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';
import { englishToFarsiNumber } from '../../utils/number';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 3rem;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    max-width: 50%;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 2rem;
  width: 50%;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    padding: 3.2rem 4rem;
    width: 20rem;
  }
`;

const Number = styled.h2`
  font-size: 3.4rem;
  font-weight: bold;
  margin: 1rem 0;
  display: block;
  text-align: center;
  color: #434343;
`;

const Description = styled.span`
  font-size: 1.3rem;
  color: #929292;
`;

function BlockElement(count, description) {
  return (
    <div>
      <Number>{englishToFarsiNumber(count)}</Number>
      <Description>{description}</Description>
    </div>
  );
}

const StatisticInfo = ({ data }) => (
  <Root>
    <Wrapper className="border-left border-bottom">
      {BlockElement(data.total, 'تعداد کل سفارشات ثبت شده')}
    </Wrapper>
    <Wrapper className="border-bottom">
      {BlockElement(data.sendToUser, 'سفارشات ارسال شده به مشتری')}
    </Wrapper>
    <Wrapper className="border-bottom border-left">
      {BlockElement(data.getInRestaurant, 'سفارشات در رستوران')}
    </Wrapper>
    <Wrapper className="border-bottom">
      {BlockElement(data.today.count, 'تعداد سفارشات امروز')}
    </Wrapper>
    <Wrapper className="border-left">
      {BlockElement(data.currentWeek.count, 'تعداد سفارشات هفت روز گذشته')}
    </Wrapper>
    <Wrapper>
      {BlockElement(
        data.currentMonth ? data.currentMonth.count : '-',
        'تعداد سفارشات سی روز گذشته',
      )}
    </Wrapper>
  </Root>
);

StatisticInfo.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default StatisticInfo;
