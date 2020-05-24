import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  width: 100%;
  padding-left: calc(100% - 1780px);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 250px 0;

  @media screen and (max-width: 1810px) {
    padding-left: 30px;
  }
`;

const Wrapper = styled.div`
  width: 37%;
  font-family: "Playfair Display";
  text-align: center;

  & h2 {
    font-weight: bold;
    font-size: 8.4rem;
    line-height: 11.2rem;
    color: black;
  }

  & p {
    font-size: 2.6rem;
    line-height: 4.6rem;
    color: rgba(0, 0, 0, 0.6);
    padding: 100px 0;
    text-align: start;
  }

  & a {
    color: black;
    font-size: 5.4rem;
    line-height: 9rem;
    border-bottom: 1px solid #b9ad93;
  }
`;

const Large = styled.div`
  width: 24.3%;
  height: 781px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Small = styled.div`
  width: 24.3%;
  height: 517px;
  align-self: center;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Locations = (props) => {
  const data = props.data;
  return (
    <Container>
      <Wrapper>
        <h2>Neiborghood</h2>
        <p>{data.description}</p>
        <Link to="/location">View More</Link>
      </Wrapper>
      <Large image={data.images[0]} />
      <Small image={data.images[1]} />
    </Container>
  );
};

export default Locations;
