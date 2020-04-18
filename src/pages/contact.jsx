import React from "react";
import styled from "styled-components";
import Container from "../shared/container";
import TextSpinner from "../shared/textSpinner";

import pin from "../assets/img/map-pin.svg";
import phone from "../assets/img/phone.svg";
import fax from "../assets/img/fax.svg";
import mail from "../assets/img/mail.svg";
import fb from "../assets/img/facebook.svg";
import ig from "../assets/img/instagram.svg";
import tw from "../assets/img/twitter.svg";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 345px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: black;
  font-weight: bold;
`;

const Form = styled.div`
  width: 100%;
  margin-top: 149px;
  position: relative;
`;

const FormInfo = styled.div`
  padding: 66px 85px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.08);
  background-color: #e1d098;
  position: absolute;
  top: 0;
  left: 50px;
  z-index: 2;
  cursor: context-menu;
`;

const TitleLight = styled.h4`
  font-size: 5.8rem;
  line-height: 8rem;
  color: white;
  font-weight: bold;
  border-bottom: 1px solid white;
`;

const InfoList = styled.ul`
  margin-top: 130px;
`;

const Info = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  & img {
    width: 45px;
    height: auto;
  }

  & span {
    line-height: 5.256rem;
    font-size: 3rem;
    color: white;
    padding-left: 30px;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-left: 33px;
    height: 29.11px;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const FormWrapper = styled.div`
  width: calc(100% - 130px);
  padding: 36px 96px 46px 0;
  background-color: #f9f9f9;
  margin-right: 50px;
  margin-top: 157px;
  margin-bottom: 340px;
  float: right;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const JustDiv = styled.div`
  width: calc(100% - 647px);
`;

const FormTitle = styled.h4`
  text-align: center;
  color: black;
  font-size: 5.8rem;
  line-height: 7.8rem;
  font-weight: bold;
  color: black;
`;

const InpWrapper = styled.div`
  width: 607.5px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 87px;
`;

const Input = styled.input`
  width: ${(props) => (props.size === "big" ? "100%" : "40$")};
  height: 35px;
  border: none;
  border-bottom: 1px solid #91712b;
  font-size: 20px;
  color: black;
  margin-bottom: 93px;
  outline: transparent;
  background-color: transparent;

  &::placeholder {
    color: #7c7c7c;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 285px;
  border: 1px solid #91712b;
  font-size: 20px;
  color: black;
  margin-bottom: 93px;
  outline: transparent;
  background-color: transparent;
  resize: none;
  padding: 15px;
  margin-bottom: 99px;

  &::placeholder {
    color: #7c7c7c;
  }
`;

const SubmitButton = styled.button`
  justify-self: flex-end;
  border: 1px solid #91712b;
  line-height: 5.5rem;
  font-size: 3.5rem;
  font-weight: bold;
  background-color: transparent;
  color: black;
  padding: 0 68px;
  cursor: pointer;
  margin-left: auto;
  outline: transparent;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  left: 166px;
`;

const ContactPage = () => {
  function onSubmit() {
    let inps = document.getElementById("inps");
    let payload = {};

    for (let i = 0; i < inps.childElementCount; i++) {
      let element = inps.childNodes[i];

      if (element.tagName === "BUTTON") {
        continue;
      }

      payload[element.name] = element.value;
    }

    console.log(payload);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contact us</Title>
        <Form>
          <FormInfo>
            <TitleLight>Contact us</TitleLight>
            <InfoList>
              <Info>
                <img src={pin} alt="" />
                <span>Aghmashenebeli 54</span>
              </Info>
              <Info>
                <img src={phone} alt="" />
                <span>+995 592 45 65 65</span>
              </Info>
              <Info>
                <img src={fax} alt="" />
                <span>Num_-0 45543345</span>
              </Info>
              <Info>
                <img src={mail} alt="" />
                <span>Ermalo_maghradze@gmail.com</span>
              </Info>
            </InfoList>
            <Socials>
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={tw} alt="" />
            </Socials>
          </FormInfo>
          <FormWrapper>
            <JustDiv>
              <FormTitle>Keep in touch</FormTitle>
              <InpWrapper id="inps">
                <Input name="name" placeholder="Name" size="small" />
                <Input name="surname" placeholder="Surname" size="small" />
                <Input name="phone" placeholder="Phone number" size="big" />
                <Input name="email" placeholder="E-mail" size="big" />
                <TextArea placeholder="Your text here" name="message" />
                <SubmitButton onClick={onSubmit}>Send</SubmitButton>
              </InpWrapper>
              <SpinnerWrapper>
                <TextSpinner />
              </SpinnerWrapper>
            </JustDiv>
          </FormWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
