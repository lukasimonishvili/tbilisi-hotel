import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";
import { Link } from "@reach/router";

import Container from "../shared/container";
import HeaderTheme from "../contexts/headerContext";

import Exploring from "../landing-components/exploring";
import Gallery from "../landing-components/gallery";
import Rooms from "../landing-components/rooms";
import Food from "../landing-components/food";
import Locations from "../landing-components/locations";

import wallImage from "../assets/img/wall.png";

const Header = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Wall = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 116px);
  background-image: url(${wallImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 200px;
`;

const WallBlur = styled.div`
  width: 100%;
  height: calc(100% - 116px);
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0f0604;
`;

const WallInfo = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  max-width: 35%;
  color: white;
  font-family: "Playfair Display";

  & h3 {
    color: white;
    font-size: 9.7rem;
    line-height: 13rem;
    font-weight: bold;
  }

  & a {
    pointer-events: initial;
    font-size: 1.5rem;
    line-height: 4.4rem;
    padding: 0 24px;
    border: 0.5px solid white;
    display: inline-block;
    margin-top: 46px;
  }
`;
const WallSliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 200px);
  pointer-events: none;
`;

const WallSlide = styled.div`
  height: 100%;
  display: flex;
  transform: ${(props) => "translateX(" + -props.slide * 100 + "%)"};
  transition: transform 0.4s ease-in-out;
`;

const Door = styled.div`
  position: relative;
  width: 1640px;
  height: 100%;
  flex-shrink: 0;

  & img {
    pointer-events: initial;
    width: 30%;
    height: calc(100% - 49px);
    position: absolute;
    top: 0;
    left: ${(props) =>
      props.index === props.active
        ? "50%"
        : props.index > props.active
        ? "0"
        : "auto"};
    right: ${(props) => (props.index < props.active ? "0" : "auto")};
    transform: ${(props) =>
      props.index === props.active ? "translateX(-50%)" : "translateX(0)"};
    cursor: pointer;
    /* box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.9); */
  }

  @media screen and (max-width: 1700px) {
    width: calc(100vw - 60px);
  }
`;

const Landing = () => {
  const setTheme = useContext(HeaderTheme);
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [activeWallSlide, setActiveWallSlideIndex] = useState(0);

  function getData() {
    setData({
      doors: [
        {
          image: require("../assets/img/door-1.png"),
          type: "Luxury",
        },
        {
          image: require("../assets/img/door-2.png"),
          type: "Mid-Range",
        },
        {
          image: require("../assets/img/door-3.png"),
          type: "Luxury",
        },
      ],
      exploring: {
        images: [
          { resolution: "large", url: require("../assets/img/gallery-1.png") },
          { resolution: "small", url: require("../assets/img/gallery-2.png") },
        ],
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      },
      gallery: {
        images: [
          require("../assets/img/gallery-1.png"),
          require("../assets/img/gallery-2.png"),
          require("../assets/img/gallery-3.png"),
        ],
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is",
      },
      rooms: {
        "mid-range": {
          "garder-view": require("../assets/img/gallery-1.png"),
          "city-view": require("../assets/img/exp-1.png"),
        },
        luxury: {
          "garder-view": require("../assets/img/gallery-2.png"),
          "city-view": require("../assets/img/exp-2.png"),
        },
        "large-range": {
          "garder-view": require("../assets/img/gallery-3.png"),
          "city-view": require("../assets/img/gallery-1.png"),
        },
      },
      "eats-drinks": {
        images: [
          require("../assets/img/f1.png"),
          require("../assets/img/f2.png"),
          require("../assets/img/f3.png"),
          require("../assets/img/f4.png"),
          require("../assets/img/f5.png"),
          require("../assets/img/f6.png"),
        ],
        description:
          "gallery-shi gadava dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting",
      },
      neiborghood: {
        images: [
          require("../assets/img/gallery-1.png"),
          require("../assets/img/gallery-2.png"),
        ],
        description:
          "gallery-shi gadava dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing ",
      },
    });
    setLoad(false);
  }

  useEffect(() => {
    setTheme("light");
    getData();
  }, [setTheme]);

  function changeWallSlide(i) {
    setActiveWallSlideIndex(i);
  }

  return load ? (
    <div>loading...</div>
  ) : (
    <React.Fragment>
      <Header>
        <WallBlur></WallBlur>
        <Wall>
          <Container style={{ position: "relative", height: "100%" }}>
            <WallInfo>
              <h3>You’re in the Right place</h3>
              {data.doors.length ? (
                <Link
                  to={"/room/" + data.doors[activeWallSlide].type.toLowerCase()}
                >
                  EXPLORE
                </Link>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </WallInfo>
            <WallSliderWrapper>
              <WallSlide slide={activeWallSlide}>
                {data.doors.map((door, i) => (
                  <Door
                    key={shortId.generate()}
                    active={activeWallSlide}
                    index={i}
                  >
                    <img
                      onClick={() => {
                        changeWallSlide(i);
                      }}
                      src={door.image}
                      alt=""
                    />
                  </Door>
                ))}
              </WallSlide>
            </WallSliderWrapper>
          </Container>
        </Wall>
      </Header>
      <Exploring data={data.exploring} />
      <Gallery data={data.gallery} />
      <Rooms data={data.rooms} />
      <Food data={data["eats-drinks"]} />
      <Locations data={data.neiborghood} />
    </React.Fragment>
  );
};

export default Landing;
