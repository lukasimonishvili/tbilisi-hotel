import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";

import Container from "../shared/container";
import HeaderTheme from "../contexts/headerContext";

const Landing = () => {
  const setTheme = useContext(HeaderTheme);

  useEffect(() => {
    setTheme("light");
  }, []);

  return <div>laning works</div>;
};

export default Landing;
