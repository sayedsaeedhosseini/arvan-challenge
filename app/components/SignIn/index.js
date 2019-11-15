import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import ChiliLogo from '../ChiliLogo';
import Footer from '../Footer';
import { dispatchUserInfo } from '../../utils/api-helpers/user';
import MaterialTextInput from '../MaterialTextInput/MaterianTextInput';
import PhoneIcon from '../icons/PhoneIcon/PhoneIcon';
import UnlockedIcon from '../icons/UnlockedIcon/UnlockedIcon';
import { extractQueryParams } from '../../utils/helpers';
import { history } from '../../store';
import customMediaQuery from '../../style/custom-query';

const Root = styled.div`
  max-width: 55.5rem;
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 15px 40px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${customMediaQuery.aboveSmallestTablet} {
    && {
      padding: 30px 68px;
    }
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 4rem;
  width: 90%;
`;

const inputCustomStyle = css`
  border: none;
  border-bottom: 1px solid #b9b9b9;
  border-radius: unset;
  background-color: #fff;
`;

const rootCustomStyle = css`
  border: none;
  border-radius: unset;
  :first-of-type {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h2`
  margin: 1.2rem 0 3.2rem 0;
  font-size: 22px;
  color: #434343;
  font-family: IRANSansLight;
  font-weight: 600;
  text-align: center;
`;

const BoxTitle = styled.h3`
  margin-bottom: 3rem;
  font-size: 20px;
  color: #434343;
  text-align: center;
`;

const ButtonContainer = styled.div`
  button {
    text-align: center;
    width: 164px;
  }
`;

const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16.5rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  background-color: #1cbd2f;
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const Error = styled.p`
  color: red;
  font-size: 1.3rem;
`;

const LoadingSection = styled.div`
  margin-left: 1rem;
`;

function renderLoading() {
  return (
    <LoadingSection>
      <Loader type="TailSpin" color="#fff" height={15} width={15} timeout={0} />
    </LoadingSection>
  );
}

async function handleLogin(setMessageError, email, password, dispatch) {
  setMessageError(null);
  if (!email || !password) {
    setMessageError('لطفا نام کاربری و رمز عبور را وارد نمایید.');
    return null;
  }
  const mobileValidationRegex = /^(\+\d{1,3}[- ]?)?\d{11}$/;
  if (!mobileValidationRegex.test(email)) {
    const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValidationRegex.test(email)) {
      setMessageError('لطفا ایمیل / شماره موبایل خود را صحیح وارد کنید.');
      return null;
    }
  }
  const userInfo = { email, password };
  await dispatchUserInfo(dispatch, userInfo);
  return null;
}

function SignIn(props) {
  const { dispatch, user } = props;
  const { loading, succeed, error, data } = user;
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const queryParams = extractQueryParams(window.location.href);

  if (!loading && succeed && data !== null) {
    if (queryParams.redirectUrl) {
      history.push(queryParams.redirectUrl);
      return null;
    }
    history.push('/restaurant-list');
  }

  return (
    <Root>
      <ChiliLogo />
      <Title>به چیلیوری خوش آمدید!</Title>
      <Content>
        <BoxTitle>ورود به پنل</BoxTitle>
        <InputWrapper>
          <MaterialTextInput
            rootCustomStyle={rootCustomStyle}
            inputCustomStyle={inputCustomStyle}
            label="شماره موبایل یا ایمیل"
            onChange={value => {
              setEmail(value);
            }}
            icon={<PhoneIcon />}
          />
          <MaterialTextInput
            type="password"
            rootCustomStyle={rootCustomStyle}
            inputCustomStyle={inputCustomStyle}
            label="رمز عبور"
            onChange={value => {
              setPassword(value);
            }}
            icon={<UnlockedIcon />}
          />
        </InputWrapper>
        <ButtonContainer>
          <Submit
            onClick={() =>
              handleLogin(setMessageError, email, password, dispatch)
            }
            type="button"
          >
            {loading && renderLoading()}
            ورود
          </Submit>
        </ButtonContainer>
        <Error>
          {messageError || (error && email && password && user.data.message_en)}
        </Error>
      </Content>
      <Footer />
    </Root>
  );
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape(),
};

const mapStateToProps = state => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(SignIn);
