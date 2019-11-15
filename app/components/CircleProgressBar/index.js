import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PokerFaceIcon from '../icons/PokerFaceIcon/PokerFaceIcon';
import HappyFaceIcon from '../icons/HappyFaceIcon/HappyFaceIcon';
import SadFaceIcon from '../icons/SadFaceIcon/SadFaceIcon';
import { englishToFarsiNumber } from '../../utils/number';

const Root = styled.div`
  width: 30rem;
  margin: 0 auto;
  padding-bottom: 2.5rem;
  display: flex;
`;

const Wrapper = styled.div`
  width: 33%;
  position: relative;
  height: 70px;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  text {
    transform: translateY(-0.5rem);
  }
`;

const PercentNumWrapper = styled.div`
  padding-top: 0.7rem;
  display: block;
  height: 2rem;
  width: 7rem;
`;

const PercentText = styled.span`
  color: #929292;
  font-size: 1.2rem;
`;

const FaceIconCustomStyle = css`
  position: absolute;
  top: 14%;
  right: 27%;
`;

function renderFace(rateType) {
  const rateFace = {
    1: <SadFaceIcon customStyle={FaceIconCustomStyle} />,
    2: <PokerFaceIcon customStyle={FaceIconCustomStyle} />,
    3: <HappyFaceIcon customStyle={FaceIconCustomStyle} />,
  };
  return rateFace[rateType];
}

function defineStrokeColor(rateType) {
  const rateColor = {
    1: '#ef4355',
    2: '#ffc301',
    3: '#2fc541',
  };
  return rateColor[rateType];
}

function defineTitle(rateType) {
  const rateColor = {
    1: 'ناراضی',
    2: 'معمولی',
    3: 'راضی',
  };
  return rateColor[rateType];
}

function renderCircle(data) {
  return Object.keys(data)
    .reverse()
    .map(key => {
      const rate = data[key];
      return (
        <Wrapper key={rate.type}>
          {renderFace(rate.type)}
          <CircularProgressbar
            value={rate.avg}
            styles={{
              path: {
                stroke: defineStrokeColor(rate.type),
                // Customize transition animation
                transition: 'all 5s',
                transform: 'rotate(0turn)',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#dedede',
                transform: 'rotate(0)',
                transformOrigin: 'center center',
              },
            }}
          />
          <PercentNumWrapper>
            <PercentText>
              {defineTitle(rate.type)} {`${englishToFarsiNumber(rate.avg)}%`}
            </PercentText>
          </PercentNumWrapper>
        </Wrapper>
      );
    });
}

function CircleProgressBar({ data }) {
  return <Root>{renderCircle(data)}</Root>;
}

CircleProgressBar.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default CircleProgressBar;
