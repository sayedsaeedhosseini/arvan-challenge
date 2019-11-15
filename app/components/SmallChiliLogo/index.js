import React from 'react';
import Styled from 'styled-components';

const SmallLogo = Styled.div`
    width: 29rem;
    text-align: right;
  .chiliIcon{
    position: relative;
    font-size: 35px;
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid #dcdcdc;
    line-height:44px;
    span{
      font-size: 35px;
    }
`;
function smallChiliLogo() {
  return (
    <SmallLogo>
      <span className="chilivery-chilivery-logo chiliIcon">
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
        <span className="path4" />
        <span className="path5" />
        <span className="path6" />
        <span className="path7" />
        <span className="path8" />
        <span className="path9" />
        <span className="path10" />
        <span className="path11" />
        <span className="path12" />
      </span>
    </SmallLogo>
  );
}
export default smallChiliLogo;
