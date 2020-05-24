import React, { useEffect, useState } from "react";
import styled from "styled-components";
import shortId from "shortid";
import { Link } from "@reach/router";

const Main = styled.section`
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 1640px;
  margin: 0 auto;
  margin-top: 325px;

  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Title = styled.h2`
  font-size: 7.3rem;
  line-height: 9.7rem;
  font-size: "Playfair Display";
  margin-bottom: 66px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 675px;
  position: relative;
`;

const Slider = styled.div`
  height: 100%;
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => "translateX(" + -props.slide * 100 + "%)"};
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  position: relative;

  & img {
    width: 70%;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${(props) =>
      props.index === props.active
        ? "50%"
        : props.i > props.active
        ? "0"
        : "auto"};
    right: ${(props) => (props.index < props.active ? "0" : "auto")};
    transform: ${(props) =>
      props.index === props.active ? "translateX(-50%)" : "translateX(0)"};
  }
`;

const Controllers = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 100px;
`;

const Prev = styled.div`
  font-size: 2rem;
  line-height: 7.2rem;
  font-family: "Playfair Display";
  font-weight: bold;
  color: #bdbdbd;

  & span {
    cursor: pointer;

    &:first-child {
      color: ${(props) => (props.disabled ? "inherit" : "black")};
    }

    &:last-child {
      color: ${(props) => (props.active ? "black" : "inherit")};
    }
  }
`;

const Next = styled.div`
  font-size: 2rem;
  line-height: 7.2rem;
  font-family: "Playfair Display";
  font-weight: bold;
  color: #bdbdbd;

  & span {
    cursor: pointer;

    &:last-child {
      color: ${(props) => (props.disabled ? "inherit" : "black")};
    }

    &:first-child {
      color: ${(props) => (props.active ? "black" : "inherit")};
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;

  & h4 {
    color: black;
    font-size: 5.4rem;
    line-height: 7.2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  & > div {
    display: flex;
    align-items: center;

    & a,
    & span {
      font-size: "Playfair Display";
      font-size: 2.1rem;
      line-height: 2.8rem;
      color: black;
      font-weight: normal;
      cursor: pointer;
    }

    & div {
      width: 1px;
      height: 30px;
      opacity: 0.26;
      background-color: black;
      margin: 0 24px;
    }
  }
`;

const Rooms = (props) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("garder-view");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let result = [];
    let pData = props.data;

    for (let i = 0; i < Object.keys(pData).length; i++) {
      let key = Object.keys(pData)[i];
      result.push({
        title: key,
        "garder-view": pData[key]["garder-view"],
        "city-view": pData[key]["city-view"],
      });
    }
    setData(result);
  }, []);

  function changeType(type) {
    setType(type);
  }

  function nextSlide() {
    if (activeSlide < data.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  }

  function prevSlide() {
    if (activeSlide) {
      setActiveSlide(activeSlide - 1);
    }
  }

  return (
    <Main>
      <Container>
        <Title>Rooms</Title>
        <Wrapper>
          <Slider slide={activeSlide}>
            {data.map((s, i) => (
              <Slide key={shortId.generate()} index={i} active={activeSlide}>
                <img src={s[type]} alt="" />
              </Slide>
            ))}
          </Slider>
        </Wrapper>
        <Controllers>
          <Prev disabled={!activeSlide} active={type === "garder-view"}>
            <span onClick={prevSlide}>PREV</span> /{" "}
            <span
              onClick={() => {
                changeType("garder-view");
              }}
            >
              GARDEN VIEW
            </span>
          </Prev>
          <Info>
            <h4>{data.length ? data[activeSlide].title : ""}</h4>
            <div>
              <Link to="/rooms">SEE MORE</Link>
              <div></div>
              <span>BOOK NOW</span>
            </div>
          </Info>
          <Next
            disabled={activeSlide === data.length - 1}
            active={type === "city-view"}
          >
            <span
              onClick={() => {
                changeType("city-view");
              }}
            >
              CITY VIEW
            </span>{" "}
            / <span onClick={nextSlide}>NEXT</span>
          </Next>
        </Controllers>
      </Container>
    </Main>
  );
};

export default Rooms;
