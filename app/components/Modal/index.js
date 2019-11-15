/** How to use in your Components

  ** First import it to your component
    import { css } from 'styled-components';

  ** Second use like below example
    const MyCss = css`
      color: red;
      font-size: 1rem;
    `;

  <Modal
    headerClassName={MyCss}
    childrenClassNAme={MyCss}
    style={MyCss}
  >
    This is modal
  </Modal>

*/

import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import IconClose from '../icons/Xbutton/Xbutton';
import './Modal.global.css';
import '../../style/variables.css';
import customMediaQuery from '../../style/custom-query';
import { convertCssArrayToObject } from '../../utils/helpers';

const Header = styled.div`
  // @media ${customMediaQuery.belowLargestPhablet} {
  //   font-size: 1.4rem;
  // }
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.6rem;
  margin: 0;
  font-weight: bold;
  font-size: 1.8rem;
  color: #434343;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
  background-color: #f5f5f5;
  && {
    ${props => props.customClassName};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Children = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: ${props => (props.allowOverFlow ? 'visible' : 'auto')};
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 100%;
  && {
    ${props => props.customClassName};
  }
`;

const IconCloseStyle = css`
  width: 2rem;
  height: 2rem;
  color: #929292;
`;

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onRequestClose: PropTypes.func,
    header: PropTypes.node,
    childrenClassName: PropTypes.arrayOf(PropTypes.string.isRequired),
    headerClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    allowOverFlow: PropTypes.bool,
    style: PropTypes.array,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    onRequestClose: () => {},
    header: null,
    childrenClassName: [],
    headerClassName: '',
    shouldCloseOnOverlayClick: true,
    allowOverFlow: false,
    style: null,
    isOpen: false,
  };

  static hasStyle(style) {
    if (style) {
      return convertCssArrayToObject(style);
    }
    return null;
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.customStyle = {
      content: {
        overflow: props.allowOverFlow ? 'visible' : 'hidden',
        ...Modal.hasStyle(props.style),
      },
    };
  }

  render() {
    const {
      children,
      onRequestClose,
      header,
      childrenClassName,
      headerClassName,
      shouldCloseOnOverlayClick,
      allowOverFlow,
      isOpen,
      ...rest
    } = this.props;
    return (
      <ReactModal
        {...rest}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        style={this.customStyle}
        isOpen={isOpen}
      >
        {header && (
          <Header customClassName={headerClassName}>
            <IconWrapper role="presentation" onClick={onRequestClose}>
              <IconClose customStyle={IconCloseStyle} />
            </IconWrapper>
            {header}
          </Header>
        )}
        <Children allowOverFlow customClassName={childrenClassName}>
          {children}
        </Children>
      </ReactModal>
    );
  }
}

export default Modal;
