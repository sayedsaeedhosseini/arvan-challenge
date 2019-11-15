/** How to use in your styled-Components

  ** First import it to your component
    import customMediaQuery from '../../style/custom-query';

  ** Second use like below example
    const ItemIcon = Styled.span`
      @media ${customMediaQuery.aboveSmallestHd} {
      color: green;
    }

    color: purple;
    font-size: 35px;

    @media ${customMediaQuery.aboveSmallestDesktop} {
      && {
        color: green;
      }
    }
  `;

  Note: @media have to places in top of styled components or choose within &&.
*/

const size = {
  mobileMax: '480px',
  phabletMin: '481px',
  phabletMax: '768px',
  tabletMin: '769px',
  tabletMax: '1024px',
  desktopMin: '1025px',
  desktopMax: '1280px',
  hdMin: '1281px',
};

export default {
  belowLargestMobile: `(max-width: ${size.mobileMax})`,
  aboveSmallestPhablet: `(min-width: ${size.phabletMin})`,
  belowLargestPhablet: `(max-width: ${size.phabletMax})`,
  aboveSmallestTablet: `(min-width: ${size.tabletMin})`,
  belowLargestTablet: `(max-width: ${size.tabletMax})`,
  aboveSmallestDesktop: `(min-width: ${size.desktopMin})`,
  belowLargestDesktop: `(max-width: ${size.desktopMax})`,
  aboveSmallestHd: `(min-width: ${size.hdMin})`,
};
