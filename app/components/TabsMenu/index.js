import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Items from './Item';
import MainContainer from '../MainContainer';
import customMediaQuery from '../../style/custom-query';

const Root = styled.nav`
  border-bottom: 0.1rem solid #dcdcdc;
  margin-top: 1rem;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  a {
    &:hover {
      text-decoration: none;
    }
  }
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      margin-bottom: 0;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  justify-content: space-evenly;
  flex-direction: column;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      flex-direction: row;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      width: auto;
    }
  }
`;

const Container = css`
  @media ${customMediaQuery.belowLargestPhablet} {
    && {
      padding: 0;
    }
  }
`;

function getTheRoutname(location) {
  const regexMatcher = /[^/]+(?=$|$)/g;
  if (regexMatcher.test(location.pathname)) {
    return location.pathname.match(regexMatcher).toString();
  }
  return '';
}

function TabsMenu(props) {
  const { location } = props;
  const tabName = getTheRoutname(location);
  return (
    <Root className="border-bottom-dc">
      <MainContainer CustomStyle={Container}>
        <Wrapper>
          <StyledLink to="dashboard">
            <Items
              ItemIcon="chilivery-menu-dashboard"
              ItemTitle="داشبورد"
              active={{ value: tabName === 'dashboard' || tabName === '' }}
            />
          </StyledLink>
          <StyledLink to="accounting-report">
            <Items
              ItemIcon="chilivery-menu-orders"
              ItemTitle="گزارش مالی"
              active={{ value: tabName === 'accounting-report' }}
            />
          </StyledLink>
          <StyledLink to="orders-report">
            <Items
              ItemIcon="chilivery-menu-report"
              ItemTitle="گزارش سفارش‌ها"
              active={{ value: tabName === 'orders-report' }}
            />
          </StyledLink>
          <StyledLink to="menu-management">
            <Items
              ItemIcon="chilivery-menu-menu"
              ItemTitle="مدیریت منو"
              active={{ value: tabName === 'menu-management' }}
            />
          </StyledLink>
          <Items
            ItemIcon="chilivery-menu-message"
            ItemTitle="نظرات و امتیازها"
            active={{ value: tabName === 'reviews' }}
          />
          <StyledLink to="info">
            <Items
              ItemIcon="chilivery-menu-info"
              ItemTitle="اطلاعات"
              active={{ value: tabName === 'info' }}
            />
          </StyledLink>
          <StyledLink to="delivery-zone">
            <Items
              ItemIcon="chilivery-menu-position"
              ItemTitle="محدوده سرویس‌دهی"
              active={{ value: tabName === 'delivery-zone' }}
            />
          </StyledLink>
        </Wrapper>
      </MainContainer>
    </Root>
  );
}

TabsMenu.propTypes = {
  location: PropTypes.object,
};

TabsMenu.defaultProps = {
  location: null,
};

export default TabsMenu;
