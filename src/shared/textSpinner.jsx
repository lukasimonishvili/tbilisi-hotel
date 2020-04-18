import React from "react";
import styled, { keyframes } from "styled-components";

import image from "../assets/img/textSpinner.svg";

const Animation = keyframes`
    0% {transform: rotate(0)}
    100% {transform: rotate(360deg)}
`;

const StyledSpinner = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  animation: ${Animation} 5s linear infinite;
`;

const TextSpinner = () => {
  return <StyledSpinner alt="" src={image} />;
};

export default TextSpinner;
