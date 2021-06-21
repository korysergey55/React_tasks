import React, { Component } from "react";

import HeaderList from "./headerList/HeaderList";

import sprite from "../../icons/header/symbol-defs.svg";
import { HeaderContainer } from "./HeaderStyled";
import Modal from "../modal/Modal";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  setModalState = () =>
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  goHome = () => {
    this.props.history.push("/");
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <HeaderContainer>
        <svg className='headerIcon' onClick={this.goHome}>
          <use href={sprite + "#icon-home"} />
        </svg>
        {width < breakPoint ? (
          <svg className='headerIcon' onClick={this.setModalState}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        ) : (
          <HeaderList />
        )}
        {isModalOpen && (
          <Modal hideModal={this.setModalState}>
            <HeaderList hideModal={this.setModalState} />
          </Modal>
        )}
      </HeaderContainer>
    );
  }
}

export default withRouter(Header);
