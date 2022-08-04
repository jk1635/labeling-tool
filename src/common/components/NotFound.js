import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <TextWrapper>
      <h1>이미지를 찾을 수 없습니다.</h1>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 0 56px;
`;

export default NotFound;
