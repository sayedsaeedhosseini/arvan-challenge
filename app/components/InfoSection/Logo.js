import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    border-radius: 8px;
    background: #ffffff;
    padding: 4px;
    box-shadow: 0 5px 15px -3px rgba(0,0,0,0.1);
    width:100px;
    height:100px;
    margin-bottom:13px;
    position:relative;
    display: block;
    margin: 0 auto;
`;
const Image = Styled.img`
    width:100%;
    height:100%;
    border-radius:6px;
`;
const Circle = Styled.span`
    position:absolute;
    right: -6px;
    top: -2px;
    width: 23px;
    height: 23px;
    border-radius:25px;
    border:4px solid #f5f5f5;
    background-color:#1CBD2F;
`;
function Logo(props) {
  return (
    <Wrapper>
      {props.active.value ? <Circle /> : null}
      <Image src={props.LogoSource} />
    </Wrapper>
  );
}
export default Logo;
