import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import customMediaQuery from '../../style/custom-query';

const Wrapper = styled.div`
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      margin-bottom: 0rem;
      padding-top: 1.5rem;
      flex-direction: column;
      width: auto;
      ${props => props.isActive && 'border-bottom:4px solid #BC0024;'}
    }
  }
`;

const Name = styled.span`
  font-size: 1.4rem;
  color: #929292;
  display: flex;
  margin-right: 1rem;
  ${props => props.isActive && 'color: #BC0024; font-weight: 600;'}
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
        font-size: 1.3rem;
        padding-bottom: 0.8rem;
        margin-right: 0;
    }
  }
`;

const ItemIcon = styled.span`
  color: #929292;
  font-size: 1.2rem;
  ${props => props.isActive && 'color: #BC0024;'}
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
        font-size: 3.5rem;
        padding-bottom: 1rem;
    }
  }
`;

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value: active } = this.props.active;
    return (
      <Wrapper isActive={active}>
        <ItemIcon isActive={active} className={this.props.ItemIcon} />
        <Name isActive={active}>{this.props.ItemTitle}</Name>
      </Wrapper>
    );
  }
}

MenuItem.propTypes = {
  ItemIcon: PropTypes.string,
  ItemTitle: PropTypes.string,
  active: PropTypes.shape(),
};
export default MenuItem;
