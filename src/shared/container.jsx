import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1640px;
  height: auto;
  margin: 0 auto;
  ${(props) =>
    props.type === "header"
      ? `
    position: absolute;
    top: 37px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  `
      : `position: static`}

  @media screen and (max-width: 1700px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Container = (props) => {
  return (
    <StyledContainer style={props.style ? props.style : {}} type={props.type}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;
