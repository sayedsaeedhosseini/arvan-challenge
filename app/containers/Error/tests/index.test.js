/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import Error from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <Error />
      </IntlProvider>,
    );
    expect(queryByText()).not.toBeNull();
  });
});
