import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Container from "./container";

import LogoImage from "../assets/img/logo.svg";
import LogoLight from "../assets/img/logo-light.svg";

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Burger = styled.div`
  width: 31px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
`;

const BurgerItem = styled.div`
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
  width: ${(props) => (props.size === "large" ? "100%" : "21px")};
  height: 2px;
`;

const Lang = styled.div`
  margin-left: 76px;
  font-size: 2rem;
  line-height: 2.7rem;
  color: ${(props) => (props.theme === "light" ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 152.3px;
  height: auto;
  cursor: pointer;
`;

const BookNow = styled.button`
  background-color: transparent;
  border: 0.5px solid
    ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "white" : "black")};
  font-weight: normal;
  padding: 0 23px;
  line-height: 4.4rem;
  font-size: 15px;
  cursor: pointer;
`;

const Navigation = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.86);
  position: fixed;
  left: 0;
  top: 0;
  transition: 0.3s;
  transform: ${(props) => (props.visible === true ? "scale(1)" : "scale(0)")};
  z-index: 100;
`;

const Close = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 90px;
  cursor: pointer;

  & div {
    width: 100%;
    height: 2px;
    background-color: white;

    &:first-child {
      transform: rotate3d(0, 0, 1, 45deg);
    }

    &:last-child {
      transform: rotate3d(0, 0, 1, -45deg);
    }
  }
`;

const List = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ListItem = styled.li`
  color: white;
  font-size: 3.6rem;
  line-height: 4.8rem;
  padding: 22px 0;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
  text-align: center;

  &:hover {
    border-color: white;
  }
`;

const Header = (props) => {
  const [visible, setVisible] = useState(false);

  function hideNavigation() {
    document.body.style.overflow = "auto";
    setVisible(false);
  }

  function showNavigation() {
    document.body.style.overflow = "hidden";
    setVisible(true);
  }

  return (
    <React.Fragment>
      <Container type="header">
        <Wrapper>
          <LeftWrapper>
            <Burger visible={!visible} onClick={showNavigation}>
              <BurgerItem theme={props.theme} size="large" />
              <BurgerItem theme={props.theme} size="small" />
              <BurgerItem theme={props.theme} size="large" />
              <BurgerItem theme={props.theme} size="small" />
            </Burger>
            <Lang theme={props.theme}>EN</Lang>
          </LeftWrapper>
          <Link to="/">
            <Logo
              alt=""
              src={props.theme === "light" ? LogoLight : LogoImage}
            />
          </Link>
          <BookNow theme={props.theme}>BOOK NOW</BookNow>
        </Wrapper>
      </Container>
      <Navigation visible={visible}>
        <Container>
          <Close onClick={hideNavigation}>
            <div></div>
            <div></div>
          </Close>
          <List>
            <ListItem onClick={hideNavigation}>
              <Link to="/about">About us</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/gallery">Gallery</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/rooms">Rooms</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/restaurants">Restaurants</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/wines">Wine Garage</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/location">Location</Link>
            </ListItem>
            <ListItem onClick={hideNavigation}>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </Container>
      </Navigation>
    </React.Fragment>
  );
};

export default Header;
