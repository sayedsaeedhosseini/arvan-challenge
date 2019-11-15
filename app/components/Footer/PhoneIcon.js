import Styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const Phone = Styled.span`
  color:#929292;
  font-size: 3rem;
  display: block;
  margin-bottom: 20px;
  @media ${customMediaQuery.aboveSmallestPhablet} {
    font-size: 4rem;
  }
`;
export default Phone;
