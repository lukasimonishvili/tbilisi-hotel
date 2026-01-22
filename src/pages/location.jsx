import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";
import HeaderTheme from "../contexts/headerContext";

import Container from "../shared/container";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 335px;
`;

const Title = styled.h2`
  text-align: center;
  padding-bottom: 83px;
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: #000;
  font-weight: bold;
`;

const Description = styled.p`
  max-width: 1096px;
  width: 100%;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
  font-family: "Italiana";
  padding-bottom: 206px;
`;

const Trips = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 339px;

  & > div {
    &:first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(${(props) => props.mainImage});
    }

    &:last-child {
      width: calc(50% - 39px);
      padding-top: 56px;

      & h4 {
        font-size: 8.6rem;
        line-height: 11.5rem;
        color: black;
        padding-bottom: 30px;
      }

      & p {
        font-size: 3rem;
        line-height: 4rem;
        color: black;
        max-width: 72%;
        padding-bottom: 55px;
      }

      & span {
        display: block;
        font-size: 3rem;
        line-height: 4rem;
        color: black;
        max-width: 72%;
        padding-bottom: 124px;
      }

      & > div {
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
`;

const SubLocations = styled.div`
  width: calc((100% - 140px) / 3);
  cursor: pointer;

  & h5 {
    font-size: 3rem;
    line-height: 4rem;
    color: black;
    padding-bottom: 23px;
  }

  & div {
    width: 100%;
    height: 339px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props) => props.image});
  }
`;

const Infos = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.side === "left" ? "row" : "row-reverse")};
  margin-bottom: 156px;

  & img {
    width: 46%;
    max-height: 958px;
    height: auto;
  }

  & div {
    width: 43%;
    padding-right: 69px;
    color: black;

    & h4 {
      font-size: 9.9rem;
      line-height: 13.2rem;
      font-weight: bold;
      padding-bottom: 102px;
    }

    & p {
      font-size: 3rem;
      line-height: 4rem;
    }
  }
`;

const Locations = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    let response = {
      title: "Urban & Unique",
      description: `Lorem ipsum is placeholder text commonly used in the graphic, print,
      and publishing industries for previewing layouts and visual mockups
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo`,
      trips: [
        {
          time: "69 min",
          locations: [
            {
              image: require("../assets/img/gallery-1.png"),
              title: "Narikala Fortress",
              description:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
            },
            {
              image: require("../assets/img/gallery-2.png"),
              title: "Betlemi str.",
              description:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
            },
            {
              image: require("../assets/img/gallery-3.png"),
              title: "Townhouse",
              description:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
            },
            {
              image: require("../assets/img/gallery-1.png"),
              title: "Mother of Georgia",
              description:
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
            },
          ],
        },
      ],
      information: [
        {
          image: require("../assets/img/gallery-1.png"),
          title: "Exploring",
          description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        },
        {
          image: require("../assets/img/gallery-2.png"),
          title: "Culture",
          description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
        },
      ],
    };

    setData(response);
    setLoading(false);
  }

  function activeteLocation(parentIndex, ChildInex) {
    let payload = { ...data };
    let arr = payload.trips[parentIndex].locations;
    let active = arr[0];
    let toActivate = arr[ChildInex];
    arr[0] = toActivate;
    arr[ChildInex] = active;
    payload.trips[parentIndex].locations = arr;
    setData(payload);
  }

  const setTheme = useContext(HeaderTheme);

  useEffect(() => {
    getData();
    setTheme("dark");
  }, [setTheme]);

  return (
    <Wrapper>
      {loading && !data ? (
        <div>Loading...</div>
      ) : (
        // empty divs are important!!!
        <Container>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          {data.trips.map((t, index) => (
            <Trips key={shortId.generate()} mainImage={t.locations[0].image}>
              <div></div>
              <div>
                <h4>{t.locations[0].title}</h4>
                <p>{t.locations[0].description}</p>
                <span>{t.time} trip</span>
                <div>
                  {t.locations.map((l, i) => {
                    return i === 0 ? (
                      <React.Fragment key={i}></React.Fragment>
                    ) : (
                      <SubLocations
                        onClick={() => {
                          activeteLocation(index, i);
                        }}
                        image={l.image}
                        key={shortId.generate()}
                      >
                        <h5>{l.title}</h5>
                        <div></div>
                      </SubLocations>
                    );
                  })}
                </div>
              </div>
            </Trips>
          ))}
          {data.information.map((i, index) => (
            <Infos
              key={shortId.generate()}
              side={index % 2 === 0 ? "left" : "right"}
            >
              <img src={i.image} alt="" />
              <div>
                <h4>{i.title}</h4>
                <p>{i.description}</p>
              </div>
            </Infos>
          ))}
        </Container>
      )}
    </Wrapper>
  );
};

export default Locations;
