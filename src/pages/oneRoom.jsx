import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";

import HeaderTheme from "../contexts/headerContext";
import Container from "../shared/container";

import leftArrowIcon from "../assets/img/p-arrow-left.svg";
import rightArrowIcon from "../assets/img/p-arrow-right.svg";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 282px;
  position: relative;
`;

const Circle = styled.div`
  width: 1364px;
  height: 1364px;
  border-radius: 50%;
  background-color: #f8f7f4;
  position: absolute;
  top: 125px;
  left: -640px;
  z-index: -1;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: black;
  font-weight: bold;
  padding-bottom: 41px;
`;

const CoverContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 188px;
`;

const CoverSlider = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  transform: ${(props) => `translateX(-${props.slide * 100}%)`};
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

const CoverControllers = styled.div`
  width: 620px;
  height: 104px;
  background-color: #f8f7f4;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  & div {
    &:nth-child(2) {
      width: 287px;
      height: 1px;
      position: relative;
      background-color: #cfcfcd;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        background: black;
        width: ${(props) => props.width + "%"};
        z-index: 2;
        transition: 0.3s;
      }
    }

    &:last-child {
      display: flex;
      align-items: center;

      & img {
        height: 14px;
        width: auto;
        opacity: 0.6;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }

        &:first-child {
          padding-right: 26px;
        }
      }
    }
  }

  & span {
    font-size: 23px;
    line-height: 31px;
    color: black;
  }
`;

const About = styled.div`
  width: 100%;
  color: black;
  padding-left: 26%;

  & h3 {
    font-size: 5rem;
    font-weight: bold;
    line-height: 6.7rem;
    padding-bottom: 65px;
  }

  & > p {
    font-size: 2.2rem;
    line-height: 4.6rem;
    padding-bottom: 117px;
    max-width: 794px;
  }
`;

const Style = styled.div`
  display: flex;
  align-items: flex-start;

  & > img {
    width: 413px;
    max-height: 372px;
    height: auto;
    flex-shrink: 0;
  }

  & > div {
    padding-left: 107px;

    & > p {
      font-size: 2.2rem;
      line-height: 4.6rem;
    }
  }
`;

const RoomInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-bottom: 144px;

  & > div {
    &:first-child {
      width: 26%;

      & > img {
        width: 100%;
        height: auto;
      }

      & > div {
        font-size: 6.3rem;
        line-height: 8.4rem;
        color: black;
        position: relative;
        margin-top: 88px;
        display: inline-block;

        &::after {
          content: "NIGHT";
          position: absolute;
          transform: translate(100%);
          top: -20px;
          right: -38px;
          font-size: 3rem;
          line-height: 4rem;
          padding-bottom: 13px;
          border-bottom: 1px solid #a89562;
        }
      }
    }

    &:last-child {
      padding-left: 413px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & img {
        width: 413px;
        max-height: 598px;
        height: auto;
        display: block;
        padding-bottom: 92px;
      }

      & button {
        line-height: 9rem;
        border: none;
        padding: 0 48px;
        font-size: 3rem;
        outline: transparent;
        color: white;
        background-color: #b9ad93;
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
`;

let allowAction = true;

const OneRoom = (props) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [slideIndex, setSlideIndex] = useState(1);

  function getData() {
    let result = {
      covers: [
        require("../assets/img/gallery-1.png"),
        require("../assets/img/gallery-2.png"),
        require("../assets/img/gallery-3.png"),
        require("../assets/img/about-cover.png"),
      ],
      about:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites Contrary to popular belief, Lorem ",
      style: {
        image: require("../assets/img/gallery-1.png"),
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ",
      },
      mood: {
        images: [
          require("../assets/img/gallery-1.png"),
          require("../assets/img/gallery-2.png"),
        ],
      },
      price: 560,
    };
    if (result.covers.length === 1) {
      setSlideIndex(0);
    }
    setData(result);
    setLoad(false);
  }

  function next() {
    if (allowAction) {
      allowAction = false;
      let element = document.getElementById("slider");
      element.style.transition = "transform 0.4s ease-in-out";
      setSlideIndex(slideIndex + 1);
    }
  }

  function prev() {
    if (allowAction) {
      allowAction = false;
      let element = document.getElementById("slider");
      element.style.transition = "transform 0.4s ease-in-out";
      setSlideIndex(slideIndex - 1);
    }
  }

  function triggerTransitionEnd(e) {
    let element = e.target;
    let slide = element.childNodes[slideIndex];

    if (slide.id === "lastClone") {
      element.style.transition = "none";
      setSlideIndex(data.covers.length);
    }

    if (slide.id === "firstClone") {
      element.style.transition = "none";
      setSlideIndex(1);
    }

    allowAction = true;
  }
  const setTheme = useContext(HeaderTheme);
  useEffect(() => {
    getData();
    setTheme("dark");
  }, [setTheme]);

  return (
    //   empty divs are important!!!!
    <Wrapper>
      <Circle />
      <Container>
        {load ? (
          <div>Loading...</div>
        ) : (
          <React.Fragment>
            <Title>{props.room.toUpperCase()}</Title>
            <CoverContainer>
              {data.covers.length < 2 ? (
                <React.Fragment></React.Fragment>
              ) : (
                <CoverControllers
                  width={
                    slideIndex < 1
                      ? "100"
                      : slideIndex > data.covers.length
                      ? 100 / data.covers.length
                      : (100 / data.covers.length) * slideIndex
                  }
                >
                  <span>
                    {slideIndex === 0 && data.covers.length < 10
                      ? "0"
                      : slideIndex < 10 && slideIndex
                      ? "0"
                      : slideIndex > data.covers.length
                      ? "0"
                      : ""}
                    {slideIndex > data.covers.length
                      ? 1
                      : slideIndex === 0
                      ? data.covers.length
                      : slideIndex}
                  </span>
                  <div></div>
                  <div>
                    <img src={leftArrowIcon} onClick={prev} alt="" />
                    <img src={rightArrowIcon} onClick={next} alt="" />
                  </div>
                </CoverControllers>
              )}
              <CoverSlider
                onTransitionEnd={triggerTransitionEnd}
                slide={slideIndex}
                id="slider"
              >
                {data.covers.length > 1 ? (
                  <Cover
                    image={data.covers[data.covers.length - 1]}
                    id="lastClone"
                  />
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                {data.covers.map((s) => (
                  <Cover key={shortId.generate()} image={s} />
                ))}
                {data.covers.length > 1 ? (
                  <Cover image={data.covers[0]} id="firstClone" />
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </CoverSlider>
            </CoverContainer>
            <About>
              <h3>About room</h3>
              <p>{data.about}</p>
              <Style>
                <img src={data.style.image} alt="" />
                <div>
                  <h3>Style</h3>
                  <p>{data.style.description}</p>
                </div>
              </Style>
            </About>
            <RoomInfo>
              <div>
                <img src={data.mood.images[0]} alt="" />
                <div>$ {data.price}</div>
              </div>
              <div>
                <img src={data.mood.images[1]} alt="" />
                <button>BOOK NOW</button>
              </div>
            </RoomInfo>
          </React.Fragment>
        )}
      </Container>
    </Wrapper>
  );
};

export default OneRoom;
