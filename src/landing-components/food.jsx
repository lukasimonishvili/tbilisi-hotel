import React from "react";
import styled from "styled-components";
import shortId from "shortid";
import { Link } from "@reach/router";

const Container = styled.div`
  width: 1640px;
  margin: 0 auto;
  margin-top: 250px;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Wrapper = styled.div`
  width: 64.5%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  & > img {
    width: 48%;
    height: auto;
    padding-top: 105px;

    &:first-child {
      padding-top: 0;
    }

    &:nth-child(2n + 3) {
      margin-top: -70px;
    }
  }
`;

const Info = styled.div`
  top: 60px;
  left: calc(((100% - 1640px) / 2) + 70px);
  position: sticky;
  width: 23.3%;
  align-self: flex-start;
  font-family: "Playfair Display";

  & h2 {
    font-size: 8.4rem;
    line-height: 13.5rem;
    color: black;
    font-weight: bold;
    text-align: end;
    padding-bottom: 100px;
  }

  & p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 2.6rem;
    line-height: 3.5rem;
    padding-bottom: 100px;
  }

  & a {
    color: black;
    font-size: 5.4rem;
    line-height: 9rem;
    border-bottom: 1px solid #b9ad93;
  }
`;

const Food = (props) => {
  let data = props.data;

  return (
    <Container>
      <Info>
        <h2>
          Eats <br /> & Drinks
        </h2>
        <p>{data.description}</p>
        <Link to="/restaurants">See More</Link>
      </Info>
      <Wrapper>
        {data.images.map((food) => (
          <img key={shortId.generate()} alt="" src={food} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Food;
