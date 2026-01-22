import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import shortId from "shortid";
import HeaderTheme from "../contexts/headerContext";

import Container from "../shared/container";

import leftArrowIcon from "../assets/img/p-arrow-left.svg";
import rightArrowIcon from "../assets/img/p-arrow-right.svg";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 288px;
`;

const Title = styled.h2`
  font-size: 8.4rem;
  line-height: 11.2rem;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 75px 0;
`;

const GalleryRow = styled.div`
  width: calc((100% - 32px) / 3);
`;

const GalleryImage = styled.div`
  width: 100%;
  height: ${(props) =>
    props.size === "large"
      ? "796px"
      : props.size === "medium"
      ? "549px"
      : props.size === "xl"
      ? "997px"
      : props.size === "xs"
      ? "473px"
      : "501px"};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.image});
  background-position: center;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Arrow = styled.img`
  margin-top: 10px;
  height: 14px;
  width: auto;
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 240px;
`;

const PaginationNumber = styled.span`
  font-size: 3rem;
  line-height: 5.3rem;
  color: black;
  opacity: ${(props) => (props.active ? "1" : "0.16")};
  padding: 0 16px;
  cursor: pointer;
`;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(0);

  function getImages(page) {
    let result = [];
    for (let i = 0; i < 10; i++) {
      switch (page) {
        case 1:
          result.push(require("../assets/img/gallery-1.png"));
          break;
        case 2:
          result.push(require("../assets/img/gallery-2.png"));
          break;
        case 3:
          result.push(require("../assets/img/gallery-3.png"));
          break;
        default:
          result.push(require("../assets/img/gallery-1.png"));
          break;
      }
    }
    setImages(result);
  }

  function activatePage(page) {
    if (page <= pageCount && page > 0) {
      getImages(page);
      setActivePage(page);
      let element = document.getElementById("title");
      element.scrollIntoView();
    }
  }

  const setTheme = useContext(HeaderTheme);

  useEffect(() => {
    getImages(1);
    setPageCount(3);
    setActivePage(1);
    setTheme("dark");
  }, [setTheme]);

  return (
    <Wrapper>
      <Container>
        <Title id="title">Gallery</Title>
        <GalleryWrapper>
          <GalleryRow>
            {images[0] ? (
              <GalleryImage size="medium" image={images[0]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[3] ? (
              <GalleryImage size="medium" image={images[3]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[7] ? (
              <GalleryImage size="xl" image={images[7]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </GalleryRow>
          <GalleryRow>
            {images[1] ? (
              <GalleryImage size="large" image={images[1]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[4] ? (
              <GalleryImage size="large" image={images[4]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[8] ? (
              <GalleryImage size="small" image={images[8]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </GalleryRow>
          <GalleryRow>
            {images[2] ? (
              <GalleryImage size="medium" image={images[2]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[5] ? (
              <GalleryImage size="medium" image={images[5]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[6] ? (
              <GalleryImage size="xs" image={images[6]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
            {images[9] ? (
              <GalleryImage size="small" image={images[9]} />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </GalleryRow>
        </GalleryWrapper>
        <PaginationWrapper>
          {activePage < 2 ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Arrow
              alt=""
              src={leftArrowIcon}
              onClick={() => {
                activatePage(activePage - 1);
              }}
            />
          )}

          {Array.from(Array(pageCount), (p, i) => {
            return (
              <PaginationNumber
                active={i + 1 === activePage}
                key={shortId.generate()}
                onClick={() => {
                  activatePage(i + 1);
                }}
              >
                {i + 1}
              </PaginationNumber>
            );
          })}
          {activePage === pageCount ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Arrow
              alt=""
              src={rightArrowIcon}
              onClick={() => {
                activatePage(activePage + 1);
              }}
            />
          )}
        </PaginationWrapper>
      </Container>
    </Wrapper>
  );
};

export default Gallery;
