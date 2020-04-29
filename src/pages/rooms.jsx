import React, { useEffect, useState } from "react";
import styled from "styled-components";
import shortId from "shortid";
import { Link } from "@reach/router";

import Container from "../shared/container";
import CoverImage from "../assets/img/about-cover.png";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 280px;
`;

const Title = styled.h2`
  text-align: center;
  line-height: 11.2rem;
  font-size: 8.4rem;
  font-weight: bold;
  color: black;
  padding-bottom: 80px;
`;

const Cover = styled.div`
  width: 100%;
  height: 656px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${CoverImage});
  margin-bottom: 170px;
`;

const RoomsWrapper = styled.div`
  width: 100%;
  margin-bottom: 400px;
`;

const Room = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) => (props.side === "left" ? "row" : "row-reverse")};
  justify-content: flex-end;
  margin-bottom: 250px;

  &:last-child {
    margin-bottom: 0;
  }

  & div {
    &:first-child {
      position: absolute;
      top: ${(props) => (props.side === "left" ? "0" : "auto")};
      bottom: ${(props) => (props.side === "right" ? "0" : "auto")};
      left: ${(props) => (props.side === "left" ? "0" : "auto")};
      right: ${(props) => (props.side === "right" ? "0" : "auto")};
      width: 55%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(${(props) => props.image});
    }
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: ${(props) => (props.side === "left" ? "-40px" : "auto")};
    bottom: ${(props) => (props.side === "right" ? "-40px" : "auto")};
    left: ${(props) => (props.side === "left" ? "-40px" : "auto")};
    right: ${(props) => (props.side === "right" ? "-40px" : "auto")};
    width: 55%;
    height: 100%;
    border: 1px solid #a89562;
  }
`;

const RoomsInfo = styled.div`
  width: 35%;

  & h4 {
    font-size: 6.5rem;
    line-height: 8.6rem;
    font-weight: bold;
    padding-top: 16px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -25px;
      width: 50%;
      height: 1px;
      background-color: #a89562;
    }
  }

  & p {
    padding-top: 89px;
    font-size: 2.2rem;
    line-height: 4.6rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 87px;
  }

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
      font-size: 2.6rem;
      line-height: 3.5rem;
      color: black;
    }
  }
`;

const More = styled(Link)`
  margin-right: 49px;
  position: relative;
  font-size: 2rem;
  line-height: 2.7rem;
  color: black;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 30%;
    height: 1px;
    background-color: #a89562;
    transition: 0.3s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  function getRooms() {
    let result = [
      {
        image: require("../assets/img/gallery-1.png"),
        title: "Luxury",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites Contrary to popular",
        price: 560,
        id: 1,
      },
      {
        image: require("../assets/img/gallery-1.png"),
        title: "Mid-Range",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites Contrary to popular",
        price: 560,
        id: 2,
      },
      {
        image: require("../assets/img/gallery-1.png"),
        title: "Luxury",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites Contrary to popular",
        price: 560,
        id: 3,
      },
      {
        image: require("../assets/img/gallery-1.png"),
        title: "Mid-Range",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites Contrary to popular",
        price: 560,
        id: 4,
      },
    ];

    setRooms(result);
  }

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Rooms</Title>
        <Cover />
        <RoomsWrapper>
          {rooms.map((r, i) => {
            let side = i % 2 === 0 ? "left" : "right";
            return (
              <Room key={shortId.generate()} side={side} image={r.image}>
                <div></div>
                <RoomsInfo>
                  <h4>{r.title}</h4>
                  <p>{r.description}</p>
                  <div>
                    <span>{r.price + " $"}</span>
                    <More to={`/room/${r.id}`}>SEE MORE</More>
                  </div>
                </RoomsInfo>
              </Room>
            );
          })}
        </RoomsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Rooms;
