import React from "react";
import styled from "styled-components";
import Container from "../shared/container";

const Title = styled.h2`
  padding-top: 130px;
  text-align: center;
  font-family: "Playfair Display";
  font-weight: bold;
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 130px;
`;

const Image = styled.div`
  width: 500px;
  height: ${(props) => (props.resolution === "small" ? "378px" : "685px")};
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:last-child {
    margin-left: 60px;
  }
`;

const Text = styled.span`
  margin-right: 160px;
  padding-bottom: 30px;
  max-width: 272px;
  font-size: 2.6rem;
  line-height: 4.6rem;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Playfair Display";
  position: relative;
`;

const SubTitle = styled.h4`
  width: 739px;
  position: absolute;
  color: black;
  font-size: 13.3rem;
  line-height: 17.7rem;
  font-family: "Playfair Display";
  left: 0;
  top: -50px;
  transform: translateY(-100%);

  & span {
    padding-left: 30px;
    color: white;
  }
`;

const Exploring = (props) => {
  const data = props.data;

  return (
    <Container>
      <Title>Exploring</Title>
      <Wrapper>
        <Text>
          {data.description}
          <SubTitle>
            Tbilisi <span>hotel</span>
          </SubTitle>
        </Text>
        <Image
          image={
            data.images[0]
              ? data.images[0].url
              : require("../assets/img/exp-1.png")
          }
          resolution={data.images[0] ? data.images[0].resolution : "large"}
        ></Image>
        <Image
          image={
            data.images[1]
              ? data.images[1].url
              : require("../assets/img/exp-2.png")
          }
          resolution={data.images[1] ? data.images[1].resolution : "small"}
        ></Image>
      </Wrapper>
    </Container>
  );
};

export default Exploring;
