import Styled from 'styled-components';
import customMediaQuery from '../../style/custom-query';

const FooterParagraph = Styled.p`
  color:#929292;
  font-size: 1.2rem;
  text-align: center;
  line-height: 2rem;
  font-weight: 100;
  margin-bottom: 10px;
  @media ${customMediaQuery.aboveSmallestPhablet} {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
export default FooterParagraph;
