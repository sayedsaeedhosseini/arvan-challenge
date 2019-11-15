import React from 'react';
import PhoneIcon from './PhoneIcon';
import FooterParagraph from './FooterParagraph';
import Wrapper from './Wrapper';

const Footer = () => (
  <Wrapper>
    <PhoneIcon className="chilivery-login-contactus" />
    <FooterParagraph>
      برای ورود به پنل رستوران ابتدا از طریق واحد پشتیبانی چیلیوری ثبت‌نام کنید.
    </FooterParagraph>
    <FooterParagraph>واحد پشتیبانی: ۰۲۱-۴۲۰۹۱۰۰۰</FooterParagraph>
  </Wrapper>
);

export default Footer;
