import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ImageData = () => {
  const baseURL = `https://source.unsplash.com`;
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(
          `${baseURL}/featured/?water,mountain/`
        );
        setImages(response.config.url);
        console.log(response);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }
    fetchImage();
  }, []);

  return (
    <ImageWrapper>
      <Image src={images} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.section`
  display: flex;
  height: 100%;
  margin-left: 56px;
  border-left: 1px solid var(--bordergray);
`;

const Image = styled.img`
  width: 100%;
  height: 973px;
  background-image: url("images");
  background-size: cover;
`;

export default ImageData;
