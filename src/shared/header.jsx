import React from "react";
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

const Header = (props) => {
  return (
    <Container type="header">
      <Wrapper>
        <LeftWrapper>
          <Burger>
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
  );
};

export default Header;
