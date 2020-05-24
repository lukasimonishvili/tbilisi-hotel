import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import TextSpinner from "../shared/textSpinner";

const Container = styled.div`
  width: 1780px;
  margin-top: 350px;

  @media screen and (max-width: 1810px) {
    width: 100%;
    padding-right: 30px;
  }
`;

const TopSide = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > div:last-child {
    width: 31.8%;
  }
`;

const Large = styled.div`
  width: 41.9%;
  height: 909px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Medium = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    transform: translate(-100%, 100%);
    left: 0;
    bottom: 0;
    width: 383px;
    height: 415px;
    background-image: url(${(props) => props.small});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Title = styled.h2`
  margin-bottom: 130px;
  font-family: "Playfair Display";
  font-size: 13.3rem;
  line-height: 17.7rem;
`;

const Text = styled.p`
  max-width: 271px;
  font-size: 2.6rem;
  line-height: 3.5rem;
  font-family: "Playfair Display";
  padding-bottom: 150px;
  color: rgba(0, 0, 0, 0.6);
`;

const BottomSide = styled.div`
  width: 100%;
  padding-top: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SpinnerWrapper = styled.div`
  width: 280px;
  height: 280px;
  margin-left: 140px;
`;

const More = styled(Link)`
  font-size: 5.4rem;
  color: black;
  font-family: "Playfair Display";
  line-height: 9.35rem;
  border-bottom: 1px solid black;
  margin-right: 70px;
`;

const Gallery = (props) => {
  const data = props.data;

  return (
    <Container>
      <TopSide>
        <Large
          src={
            data.images[0]
              ? data.images[0]
              : require("../assets/img/gallery-1.png")
          }
        />
        <Text>{data.description}</Text>
        <div>
          <Title>Gallery</Title>
          <Medium
            src={
              data.images[1]
                ? data.images[1]
                : require("../assets/img/gallery-2.png")
            }
            small={
              data.images[2]
                ? data.images[2]
                : require("../assets/img/gallery-3.png")
            }
          />
        </div>
      </TopSide>
      <BottomSide>
        <SpinnerWrapper>
          <TextSpinner />
        </SpinnerWrapper>
        <More to="/gallery">See More</More>
      </BottomSide>
    </Container>
  );
};

export default Gallery;
