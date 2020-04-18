import React from "react";
import styled from "styled-components";
import Container from "../shared/container";

const StyledFooter = styled.footer`
  width: 100%;
  clear: both;
  padding-top: 39px;
  padding-bottom: 57px;
  background-color: #1d1111;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const Box = styled.div``;

const Title = styled.h5`
  font-size: 3.2rem;
  line-height: 4.3rem;
  color: white;
  font-weight: bold;
  color: white;
  margin-bottom: 60px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 2.2rem;
  line-height: 3rem;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Box>
            <Title>Address</Title>
            <Text>Betlemi str. 22</Text>
            <Text>Tbilisi, Georgia</Text>
          </Box>
          <Box>
            <Title>Phone</Title>
            <Text>+995 595 08 08 09</Text>
            <Text>+995 595 08 08 01</Text>
          </Box>
          <Box>
            <Title>Socials</Title>
            <Text>Facebook, Instagram, Linkedin</Text>
          </Box>
          <Box>
            <Title>Made by</Title>
            <Text>Onesoul.io</Text>
          </Box>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
