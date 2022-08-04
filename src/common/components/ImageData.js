import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// components
import { Loading, Error, NotFound } from "./";

const ImageData = ({ children }) => {
  const baseURL = `https://source.unsplash.com`;
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImage() {
      try {
        setError(null);
        setLoading(true);
        const res = await axios.get(`${baseURL}/featured/?kids/`);
        setImage(res.config.url);
        console.log(res);
      } catch (err) {
        console.log(err);
        setError(err);
      }
      setLoading(false);
    }
    fetchImage();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!image) return <NotFound />;

  return (
    <ImageWrapper>
      {children}
      <Image src={image} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.section`
  position: relative;
  margin-left: 56px;
  border-left: 1px solid var(--bordergray);
`;

const Image = styled.img`
  width: 100%;
  height: 973px;
  background-image: url("image");
  background-size: cover;
  object-fit: cover;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export default ImageData;
