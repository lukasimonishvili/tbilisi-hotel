import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";

import Container from "../shared/container";
import HeaderTheme from "../contexts/headerContext";

import shapeImage from "../assets/img/about-shape.svg";
import leftArrowIcon from "../assets/img/p-arrow-left.svg";
import rightArrowIcon from "../assets/img/p-arrow-right.svg";
import sliderArrowLeftIcon from "../assets/img/w-arrow-left.svg";
import sliderArrowRightIcon from "../assets/img/w-arrow-right.svg";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 420px;
  position: relative;
  z-index: 1;
`;

const Shape = styled.div`
  position: absolute;
  background-image: url(${shapeImage});
  background-size: cover;
  background-position: center;
  background-size: cover;
  left: 50%;
  top: -123px;
  transform: translateX(-50%);
  width: 1093.57px;
  height: 1093.57px;
  z-index: -2;
  pointer-events: none;
`;

const ActiveWineWrapper = styled.div`
  width: 100%;
  position: relative;

  & img {
    width: 502px;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  & h5 {
    text-align: center;
    padding-top: 78px;
    color: black;
    font-size: 3.1rem;
    line-height: 4.1rem;
    font-family: "Geometria";
    margin-bottom: 183px;
  }

  & h3 {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    z-index: -1;
    font-size: 12.1rem;
    color: black;
    opacity: 0.08;
    font-family: "Italiana";
  }
`;

const WineList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 53px;
  flex-wrap: wrap;
  position: relative;
  z-index: 20;
`;

const Title = styled.h3`
  width: 100%;
  padding-bottom: 118px;
  color: black;
  font-size: 5.2rem;
  line-height: 6.9rem;
  text-align: center;
  font-family: "Italiana";
`;

const WineWrapper = styled.div`
  width: calc((100% - 150px) / 3);
  background-color: ${(props) => (!props.active ? "transparent" : "#F8F8F7")};
  transition: 0.3s;
  margin-bottom: 110px;
  transition: 1s;
  font-family: "Geometria";
  cursor: pointer;

  & img {
    margin: 0 auto;
    margin-top: -38px;
  }

  & h6 {
    color: black;
    font-size: 2.7rem;
    line-height: 3.6rem;
    text-align: center;
    margin-top: 69px;
  }

  & span {
    display: block;
    text-align: center;
    color: black;
    padding: 14px 0;
    opacity: 0.4;
    font-size: 2.1rem;
    line-height: 3.6rem;
  }
`;

const Arrow = styled.img`
  margin-top: 10px;
  height: 14px;
  width: auto;
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 311px;
`;

const PaginationNumber = styled.span`
  font-size: 3rem;
  line-height: 5.3rem;
  color: black;
  opacity: ${(props) => (props.active ? "1" : "0.16")};
  padding: 0 16px;
  cursor: pointer;
`;

const SliderSection = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 135px;

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    width: 55%;
    height: 100%;
    border: 1px solid #a89562;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  width: 100%;
  display: flex;
  transform: ${(props) => `translateX(-${props.slide * 100}%)`};
`;

const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  & img {
    width: 55%;
    height: 673px;
    flex-shrink: 0;
  }

  & div {
    padding-left: 40px;
    color: black;

    & h4 {
      font-size: 7.2rem;
      line-height: 11.5rem;
      padding-bottom: 34px;
    }

    & p {
      font-size: 1.8rem;
      line-height: 3rem;
    }
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  display: flex;

  & div {
    width: 93px;
    height: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #91712b;
    cursor: pointer;
    opacity: 0.36;
    transition: 0.3s;
    user-select: none;

    &:hover {
      opacity: 0.57;
    }
  }
`;

let allowAction = true;

const Wines = () => {
  const [wines, setWines] = useState([]);
  const [activeWineIndex, setActiveWineIndex] = useState(-1);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [slider, setSlider] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  function getWineList(page) {
    let result = [];

    let wine1 = {
      image: require("../assets/img/wine-1.png"),
      title: "QVEVRIS RKATSITELI",
      year: 2014,
    };

    let wine2 = {
      image: require("../assets/img/wine-2.png"),
      title: "PAPARI WALLEY",
      year: 2017,
    };

    let wine3 = {
      image: require("../assets/img/wine-3.png"),
      title: "GOTSA",
      year: 1016,
    };

    for (let i = 0; i < 9; i++) {
      if (i % 2 === 0) {
        result.push(wine1);
        continue;
      }

      if (page % 2 === 0) {
        result.push(wine2);
      } else {
        result.push(wine3);
      }
    }

    setWines(result);
    setActivePage(page);
    let element = document.getElementById("wineList");
    element.scrollIntoView();
  }

  function setActiveWine(i) {
    setActiveWineIndex(i);
    let element = document.getElementById("activeWine");
    element.scrollIntoView();
  }

  function getSliderData() {
    let result = [
      {
        image: require("../assets/img/gallery-1.png"),
        title: "Tsinandali",
        description:
          "Tsinandali Estate is the cradle of classical winemaking of Georgia, the place where Georgian wine was first bottled. Saperavi of 1841 and other 19th century historical vintages are still preserved at Princely Oenotheque. In the collection starting from 1814, one can find Tsinandali, Saperavi, Chateau Lafitte, Chateau d’Yquem and other legends of the period. ",
      },
      {
        image: require("../assets/img/gallery-2.png"),
        title: "Sapheravi",
        description:
          "Tsinandali Estate is the cradle of classical winemaking of Georgia, the place where Georgian wine was first bottled. Saperavi of 1841 and other 19th century historical vintages are still preserved at Princely Oenotheque. In the collection starting from 1814, one can find Tsinandali, Saperavi, Chateau Lafitte, Chateau d’Yquem and other legends of the period. ",
      },
      {
        image: require("../assets/img/gallery-3.png"),
        title: "Khvanchkara",
        description:
          "Tsinandali Estate is the cradle of classical winemaking of Georgia, the place where Georgian wine was first bottled. Saperavi of 1841 and other 19th century historical vintages are still preserved at Princely Oenotheque. In the collection starting from 1814, one can find Tsinandali, Saperavi, Chateau Lafitte, Chateau d’Yquem and other legends of the period. ",
      },
    ];
    if (result.length < 2) {
      setSlideIndex(0);
    }
    setSlider(result);
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
      setSlideIndex(slider.length);
    }

    if (slide.id === "firstClone") {
      element.style.transition = "none";
      setSlideIndex(1);
    }

    allowAction = true;
  }

  const setTheme = useContext(HeaderTheme);
  useEffect(() => {
    getWineList(1);
    setPageCount(3);
    getSliderData();
    setTheme("dark");
  }, [setTheme]);

  return (
    <Wrapper>
      <Shape />
      <Container>
        <ActiveWineWrapper id="activeWine">
          {activeWineIndex > -1 ? (
            <React.Fragment>
              <img src={wines[activeWineIndex].image} alt="" />
              <h5>{wines[activeWineIndex].title}</h5>
              <h3>GEORGIAN WALLEY</h3>
            </React.Fragment>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </ActiveWineWrapper>
        <WineList id="wineList">
          <Title>Full Collection</Title>
          {wines.map((w, i) => {
            return (
              <WineWrapper
                onClick={() => {
                  setActiveWine(i);
                }}
                key={shortId.generate()}
                active={i === activeWineIndex}
              >
                <img src={w.image} alt="" />
                <h6>{w.title}</h6>
                <span>{w.year}</span>
              </WineWrapper>
            );
          })}
        </WineList>
        <PaginationWrapper>
          {activePage < 2 ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Arrow
              alt=""
              src={leftArrowIcon}
              onClick={() => {
                getWineList(activePage - 1);
              }}
            />
          )}

          {Array.from(Array(pageCount), (p, i) => {
            return (
              <PaginationNumber
                active={i + 1 === activePage}
                key={shortId.generate()}
                onClick={() => {
                  getWineList(i + 1);
                }}
              >
                {i + 1}
              </PaginationNumber>
            );
          })}
          {activePage === pageCount ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Arrow
              alt=""
              src={rightArrowIcon}
              onClick={() => {
                getWineList(activePage + 1);
              }}
            />
          )}
        </PaginationWrapper>
        {slider.length ? (
          <SliderSection>
            {slider.length > 1 ? (
              <ButtonsWrapper>
                <div onClick={prev}>
                  <img src={sliderArrowLeftIcon} alt="" />
                </div>
                <div onClick={next}>
                  <img src={sliderArrowRightIcon} alt="" />
                </div>
              </ButtonsWrapper>
            ) : (
              <React.Fragment></React.Fragment>
            )}

            <SliderContainer>
              <Slider
                slide={slideIndex}
                id="slider"
                onTransitionEnd={triggerTransitionEnd}
              >
                {slider.length > 1 ? (
                  <Slide id="lastClone">
                    <img src={slider[slider.length - 1].image} alt="" />
                    <div>
                      <h4>{slider[slider.length - 1].title}</h4>
                      <p>{slider[slider.length - 1].description}</p>
                    </div>
                  </Slide>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
                {slider.map((s) => {
                  return (
                    <Slide key={shortId.generate()}>
                      <img src={s.image} alt="" />
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.description}</p>
                      </div>
                    </Slide>
                  );
                })}
                {slider.length > 1 ? (
                  <Slide id="firstClone">
                    <img src={slider[0].image} alt="" />
                    <div>
                      <h4>{slider[0].title}</h4>
                      <p>{slider[0].description}</p>
                    </div>
                  </Slide>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </Slider>
            </SliderContainer>
          </SliderSection>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </Container>
    </Wrapper>
  );
};

export default Wines;
