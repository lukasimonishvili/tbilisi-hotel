import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Container from "./container";

import LogoImage from "../assets/img/logo.svg";

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
`;

const BurgerItem = styled.div`
  background-color: black;
  width: ${(props) => (props.size === "large" ? "100%" : "21px")};
  height: 2px;
`;

const Lang = styled.div`
  margin-left: 76px;
  font-size: 2rem;
  line-height: 2.7rem;
  color: black;
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
  border: 0.5px solid black;
  color: black;
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
  margin-left: auto;
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

  return (
    <React.Fragment>
      <Container type="header">
        <Wrapper>
          <LeftWrapper>
            <Burger
              onClick={() => {
                setVisible(true);
              }}
            >
              <BurgerItem size="large" />
              <BurgerItem size="small" />
              <BurgerItem size="large" />
              <BurgerItem size="small" />
            </Burger>
            <Lang>EN</Lang>
          </LeftWrapper>
          <Link to="/">
            <Logo alt="" src={LogoImage} />
          </Link>
          <BookNow>BOOK NOW</BookNow>
        </Wrapper>
      </Container>
      <Navigation visible={visible}>
        <Container>
          <Close
            onClick={() => {
              setVisible(false);
            }}
          >
            <div></div>
            <div></div>
          </Close>
          <List>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/about">About us</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/gallery">Gallery</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/Rooms">Rooms</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/Restaurants">Restaurants</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/wine">Wine Garage</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/location">Location</Link>
            </ListItem>
            <ListItem
              onClick={() => {
                setVisible(false);
              }}
            >
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </Container>
      </Navigation>
    </React.Fragment>
  );
};

export default Header;
