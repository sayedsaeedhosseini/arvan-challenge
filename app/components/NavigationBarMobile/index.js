import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import customMediaQuery from '../../style/custom-query';

const NavBarWrapper = styled.div`
  margin: auto;
  width: auto;
  max-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${customMediaQuery.aboveSmallestDesktop} {
    display: none;
  }
`;

const NavigationSection = styled.div`
  width: 16rem;
  margin: auto;
  height: auto;
  max-height: 4rem;
  box-shadow: 0 0.3rem 2.6rem 0 rgba(183, 183, 183, 0.58);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -8rem;
  z-index: 0;
  background-color: #f89f41;
  transition: all 0.5s;
  border-radius: 2rem;
  ${prop =>
    prop.isOpen &&
    'width: 100%; max-height: 32rem; left: 0; background-color: #ffffff; border-radius: 0.7rem; margin-left: 0; z-index: 1; overflow-y: auto;'}
`;

const NavBarButton = styled.button`
  width: 16rem;
  height: 4rem;
  background-color: #f89f41;
  border-radius: 2rem;
  box-shadow: 0 3rem 2.6rem 0 rgba(167, 167, 167, 0.58);
  font-size: 1.3rem;
  color: #fff;
  font-weight: 500;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
  :focus {
    outline: none;
  }
  ${prop =>
    prop.isOpen &&
    'background-color: #fff; box-shadow: none; transition: all 0.6s;'}
`;

const CloseButton = styled.button`
  color: #f89f41;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 2rem 0 2.5rem;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

// const NavigationTitle = styled.p`
//   border-bottom: 0.1rem solid #dcdcdc;
//   text-align: right;
//   font-size: 1.6rem;
//   color: #434343;
// `;

const Navigator = styled.button`
  font-size: 1.4rem;
  color: #929292;
  background-color: inherit;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;

function NavigationBarMobile(props) {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const showNavBar = () => {
    setNavBarOpen(!navBarOpen);
  };
  return (
    <NavBarWrapper>
      <NavBarButton isOpen={navBarOpen} type="button" onClick={showNavBar}>
        {props.listHeader}
      </NavBarButton>
      <NavigationSection isOpen={navBarOpen}>
        <CloseButton type="button" onClick={showNavBar}>
          بستن
        </CloseButton>
        {/* {props.listHeader && ( */}
        {/*  <NavigationTitle>{props.listHeader}</NavigationTitle> */}
        {/* )} */}
        <Scrollspy
          className="call-to-action-wrapper"
          currentClassName="is-current"
          items={props.items.map(item => item.id)}
        >
          {props.items.map(item => (
            <Navigator
              onClick={() => props.onScroll(item.id)}
              key={item.id}
              type="button"
            >
              {item.title}
            </Navigator>
          ))}
        </Scrollspy>
      </NavigationSection>
    </NavBarWrapper>
  );
}

NavigationBarMobile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  listHeader: PropTypes.string,
  onScroll: PropTypes.func,
};

NavigationBarMobile.defaultProps = {
  listHeader: '',
  onScroll: () => {},
};
export default memo(NavigationBarMobile);
