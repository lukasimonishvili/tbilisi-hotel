import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import shortId from "shortid";

import Container from "../shared/container";
import HeaderTheme from "../contexts/headerContext";

import RestaurantLogo from "../assets/img/see-logo.png";

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  margin-bottom: 160px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.65;
    z-index: 1;
  }

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const Story = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.side === "left" ? "row" : "row-reverse")};
  margin-bottom: 115px;

  & img {
    width: 45%;
    max-height: 920px;
    height: auto;
  }

  & div {
    padding-left: ${(props) => (props.side === "right" ? "86px" : "0")};
    padding-right: ${(props) => (props.side === "left" ? "86px" : "0")};
    text-align: center;
    color: black;
    max-width: 560px;

    & h4 {
      font-size: 5.5rem;
      line-height: 7.4rem;
      padding-bottom: 179px;
    }

    & p {
      font-size: 3.7rem;
      line-height: 4.9rem;
      opacity: 0.6;
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 80px;

  & > h2 {
    font-size: 4rem;
    line-height: 5.3rem;
    color: black;
    text-align: center;
    width: 100%;
    margin-bottom: 173px;

    &::after {
      content: "menu";
      font-size: 14.5rem;
      line-height: 19.3rem;
      opacity: 0.06;
      color: black;
      top: -9.6rem;
      left: 50%;
      position: absolute;
    }
  }

  & > div {
    width: calc(100% / 3);
    padding-right: 15px;
    margin-bottom: 120px;
    display: flex;
    align-items: center;

    & > img {
      width: 129.04px;
      height: 129.04px;
    }

    & > div {
      padding-left: 23px;
      color: black;

      & > h5 {
        font-size: 4.5rem;
        line-height: 6rem;
        padding-bottom: 25px;
      }

      & > p {
        font-size: 2.7rem;
        line-height: 3.6rem;
        opacity: 0.5;
      }
    }
  }
`;

const Chef = styled.div`
  width: 100%;
  margin-bottom: 98px;

  & > div {
    width: 100%;
    height: 673px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.image});
    margin-bottom: 29px;
  }

  & h3 {
    font-size: 3rem;
    line-height: 4.4rem;
    color: black;
    text-align: center;
    position: relative;
    font-weight: bold;
    margin-bottom: 94px;

    &::after {
      content: "chef";
      width: 188px;
      position: absolute;
      left: 50%;
      bottom: -9px;
      transform: translate(-50%, 100%);
      font-size: 1.8rem;
      line-height: 2.4rem;
      padding-bottom: 22px;
      border-bottom: 1px solid #91712b;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  p {
    max-width: 1037px;
    margin: 0 auto;
    text-align: center;
    color: black;
    font-size: 4.2rem;
    line-height: 4.6rem;
  }
`;

const Restaurants = () => {
  const setTheme = useContext(HeaderTheme);
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);

  function getData() {
    let result = {
      cover: require("../assets/img/restaurant.png"),
      storys: [
        {
          image: require("../assets/img/gallery-1.png"),
          title: "OUR GASTRONOMY",
          description:
            "Welcome to hotel Tbilisi , where the food changes with the season",
        },
        {
          image: require("../assets/img/gallery-2.png"),
          title: "DESSERT",
          description:
            "Welcome to hotel Tbilisi , where the food changes with the season",
        },
      ],
      menu: [
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
        {
          image: require("../assets/img/pizza.png"),
          title: "Pizza",
          city: "Venezia",
          country: "Italy",
        },
        {
          image: require("../assets/img/burger.png"),
          title: "Burger Menu",
          city: "New Yorck",
          country: "USA",
        },
        {
          image: require("../assets/img/mtsvadi.png"),
          title: "Mtsvadi",
          city: "Tbilisi",
          country: "Georgia",
        },
      ],
      chef: {
        cover: require("../assets/img/chef.png"),
        fullName: "Vakhtang Chabukiani",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      },
    };

    setData(result);
    setLoad(false);
  }

  useEffect(() => {
    setTheme("light");
    getData();
  }, [setTheme]);

  return load ? (
    <div>Loading</div>
  ) : (
    <React.Fragment>
      <Cover image={data.cover}>
        <img src={RestaurantLogo} alt="" />
      </Cover>
      <Container>
        {data.storys.map((s, i) => (
          <Story side={i % 2 === 0 ? "right" : "left"} key={shortId.generate()}>
            <img src={s.image} alt="" />
            <div>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          </Story>
        ))}
        <Menu>
          <h2>Menu</h2>
          {data.menu.map((f) => {
            return (
              <div key={shortId.generate()}>
                <img src={f.image} alt="" />
                <div>
                  <h5>{f.title}</h5>
                  <p>
                    {f.citiy}, {f.country}
                  </p>
                </div>
              </div>
            );
          })}
        </Menu>
        <Chef image={data.chef.cover}>
          <div></div>
          <h3>{data.chef.fullName}</h3>
          <p>{data.chef.description}</p>
        </Chef>
      </Container>
    </React.Fragment>
  );
};

export default Restaurants;
