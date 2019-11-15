/**
 *
 * LogoHolder
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LogoHolder() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

LogoHolder.propTypes = {};

export default LogoHolder;
