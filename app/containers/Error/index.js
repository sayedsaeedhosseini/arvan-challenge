import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from '../../components/MainContainer';
import '../../style/variables.css';
import MainLayout from '../../components/MainLayout';
import { englishToFarsiNumber } from '../../utils/number';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 40rem;
`;

const MessageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 40rem;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--gray-400);
  text-align: center;
  width: 100%;
`;

const Type = styled.p`
  font-size: 5.5rem;
  font-weight: bold;
  color: var(--gray-500);
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.5rem;
    height: 4.2rem;
    border-radius: 2.1rem;
    background-color: #1cbd2f;
    color: #fff;
    font-size: 1.4rem;
    margin-top: 2rem;
    &:hover {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const messagesMap = {
  404: {
    type: '404',
    message: 'صفحه مورد نظر یافت نشد',
    backLink: '/',
    backButtonMessage: 'برو لیست رستوران‌ها',
  },
  customize: {
    type: 'خطا!',
  },
};

function renderErrorMessage(type, customMessage, customBackLink) {
  if (type === 'customize') {
    return (
      <MessageSection>
        <Type>{englishToFarsiNumber(messagesMap[type].type)}</Type>
        <Message>{customMessage}</Message>
        <BackButton to={customBackLink}>برو به لیست رستوران‌ها</BackButton>
      </MessageSection>
    );
  }
  return (
    <MessageSection>
      <Type>{englishToFarsiNumber(messagesMap[type].type)}</Type>
      <Message>{messagesMap[type].message}</Message>
      <BackButton component={Link} to="/" variant="contained" color="primary">
        {messagesMap[type].backButtonMessage}
      </BackButton>
    </MessageSection>
  );
}

function renderHelmetTitle({ type, customMessage }) {
  if (type === '404') {
    return '۴۰۴ صفحه مورد نظر یافت نشد';
  }
  if (type === 'customize') {
    return customMessage;
  }
  return null;
}

const Error = props => {
  const { type, customMessage, customBackLink } = props;
  return (
    <MainLayout>
      <Root>
        <Helmet defaultTitle={renderHelmetTitle(props)} />
        <Container>
          {renderErrorMessage(type, customMessage, customBackLink)}
        </Container>
      </Root>
    </MainLayout>
  );
};

Error.propTypes = {
  type: PropTypes.oneOf(['404', 'customize']),
  customMessage: PropTypes.string,
  customBackLink: PropTypes.string,
};

Error.defaultProps = {
  type: '404',
  customMessage: 'متاسفانه مشکلی پیش آمده است.',
  customBackLink: '/',
};

export default Error;
