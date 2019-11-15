import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const stringLengthLimitation = 70;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  min-height: 6rem;
  border-bottom: 0.1rem solid #dcdcdc;
  background-color: #ffffff;
  padding: 1.5rem;
  &:nth-of-type(even) {
    background-color: #fafafa;
  }
  box-sizing: border-box;
  ${customMediaQuery.aboveSmallestTablet} {
    align-items: center;
  }
`;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align: items: center;
//   flex-wrap: nowrap;
//   width: 100%;
//   height: 6rem;
//   border-bottom: 0.1rem solid #dcdcdc;
//   background-color: #ffffff;
//   padding-left: 2.5rem;
//   padding-right: 2.5rem;
//   &:nth-of-type(even) {
//     background-color: #fafafa;
//   }
//   ${props => props.isExpanded && props.hasExpand && 'height: auto;'}
//   ${props => props.hasExpand && 'cursor: pointer;'}
// `;

const Title = styled.p`
  position: relative;
  font-size: 1.4rem;
  color: #434343;
  line-height: normal;
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
`;

const Value = styled(Title)`
  text-align: left;
  max-width: 55%;
  letter-spacing: -0.05rem;
  ${props => props.longSentenses && 'line-height: 2;'}
`;

// const Value = styled(Title)`
//   text-align: left;
//   max-width: 50%;
//   ${props =>
//   props.hasExpand &&
//   'overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-left: 2rem;'}
//   &::before {
//     ${props =>
//   props.hasExpand &&
//   'content: "\u2038"; position: absolute; left: 0rem; color: #929292; font-size: 2em; top: 50%; line-height: 2rem; margin-top: 0; transform: rotate(180deg);'}
//   }
//   ${props => props.hasExpand && props.isExpanded && 'overflow: visible; text-overflow: unset; white-space: normal;'}
// `;

function renderTableRow(data) {
  return data.map(row => (
    <Row key={row.key}>
      <Title>{row.key}</Title>
      <Value longSentenses={row.value.length > stringLengthLimitation}>
        {row.value}
      </Value>
    </Row>
  ));
}

function Info({ data }) {
  // const [isExpanded, setIsExpanded] = useState(false);
  return <Root>{renderTableRow(data)}</Root>;
}

Info.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Info;
