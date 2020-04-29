import React from "react";
import styled from "styled-components";

import Container from "../shared/container";
import TextSpinner from "../shared/textSpinner";

import CoverImage from "../assets/img/about-cover.png";
import shape from "../assets/img/about-shape.svg";
import about from "../assets/img/about.png";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 345px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: black;
  font-weight: bold;
`;

const Cover = styled.div`
  width: 100%;
  height: 656px;
  margin-top: 108px;
  background-image: url(${CoverImage});
  background-size: cover;
  background-position: center;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  right: 108px;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const CoverInfo = styled.div`
  width: 74%;
  margin: 0 auto;
  margin-top: -107px;
  margin-bottom: 170px;
  box-shadow: 0 17px 29px rgba(0, 0, 0, 0.04);
  padding: 107px 0;
  background-color: white;
  position: relative;
`;

const CoverTitle = styled.h4`
  width: 100%;
  padding: 0 88px;
  color: #000;
  font-size: 5.4rem;
  line-height: 7.2rem;
  font-weight: bold;
`;

const CoverSubTitle = styled.h6`
  width: 100%;
  padding: 0 88px;
  color: rgba(0, 0, 0, 0.16);
  font-size: 2.2rem;
  line-height: 3rem;
  margin-bottom: 53px;
`;

const CoverTextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const CoverText = styled.p`
  width: 50%;
  padding: 0 88px;
  padding-top: 62px;
  border-top: 1px solid transparent;
  border-color: ${(props) =>
    props.border ? "rgba(145, 113, 43, .34)" : "transparent"};
  color: rgba(0, 0, 0, 0.6);
  font-size: 2.2rem;
  line-height: 3rem;
`;

const DoubleTitle = styled.h2`
  position: relative;
  line-height: 19.3rem;
  font-size: 14.5rem;
  color: rgba(0, 0, 0, 0.06);
  display: inline-block;
  margin: 0 auto;
  user-select: none;

  &::before {
    content: "Our Goal";
    position: absolute;
    top: 50%;
    left: -27px;
    color: black;
    line-height: 5.3rem;
    font-size: 4rem;
    font-weight: bold;
  }
`;

const Content = styled.div`
  position: relative;
  width: calc(100% - 140px);
  display: flex;
  align-items: flex-start;
  margin-top: 96px;
  margin-bottom: 460px;
`;

const BottomImage = styled.img`
  width: 710.88px;
  height: 839.8px;
`;

const ContetTextWapper = styled.div`
  width: calc(100% - 710.88px);
`;

const ContextText = styled.p`
  padding: 35px 126px 35px 55px;
  font-size: 2.2rem;
  line-height: 3rem;
  color: rgba(0, 0, 0, 0.6);
`;

const Since = styled.span`
  display: block;
  margin-top: 145px;
  font-size: 2.6rem;
  line-height: 3.5rem;
  color: black;
  width: 100%;
  text-align: end;
  padding-right: 24px;
`;

const Shaper = styled.div`
  width: 1093.57px;
  height: 1093.57px;
  background-image: url(${shape});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: -50%;
  transform: translateY(50%);
  right: -705px;
`;

const AboutPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>About Us</Title>
        <Cover />
        <CoverInfo>
          <SpinnerWrapper>
            <TextSpinner />
          </SpinnerWrapper>
          <CoverTitle>Tbilisee</CoverTitle>
          <CoverSubTitle>Hotel</CoverSubTitle>
          <CoverTextWrapper>
            <CoverText border={true}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
            </CoverText>
            <CoverText border={false}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,{" "}
            </CoverText>
          </CoverTextWrapper>
        </CoverInfo>
        <div style={{ textAlign: "center" }}>
          <DoubleTitle>Goal</DoubleTitle>
        </div>
      </Container>
      <div style={{ position: "relative", overflowX: "hidden" }}>
        <Shaper />
        <Content>
          <BottomImage alt="" src={about} />
          <ContetTextWapper>
            <ContextText>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature
            </ContextText>
            <ContextText>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature
            </ContextText>
            <ContextText>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur,Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature
            </ContextText>
            <Since>Since 2016</Since>
          </ContetTextWapper>
        </Content>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
