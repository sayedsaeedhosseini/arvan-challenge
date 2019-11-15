import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const NavBarWrapper = styled.div`
  @media ${customMediaQuery.belowLargestTablet} {
    display: none;
  }
`;

const NavigationTitle = styled.p`
  border-bottom: 1px solid #dcdcdc;
  text-align: right;
  font-size: 16px;
  color: #434343;
`;

const Navigator = styled.button`
  font-size: 1.4rem;
  color: #929292;
  background-color: inherit;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;

function NavigationBarDesktop(props) {
  return (
    <NavBarWrapper>
      <NavigationTitle>{props.listHeader}</NavigationTitle>
      <Scrollspy
        className="call-to-action-wrapper"
        currentClassName="is-current"
        items={props.items.map(item => item.id)}
      >
        {props.items.map(item => (
          <Navigator
            key={item.id}
            type="button"
            onClick={() => props.onScroll(item.id)}
          >
            {item.title}
          </Navigator>
        ))}
      </Scrollspy>
    </NavBarWrapper>
  );
}

NavigationBarDesktop.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  listHeader: PropTypes.string,
  onScroll: PropTypes.func,
};

NavigationBarDesktop.defaultProps = {
  listHeader: '',
  onScroll: () => {},
};

export default memo(NavigationBarDesktop);
