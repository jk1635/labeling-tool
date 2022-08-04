import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <TextWrapper>
      <h1>에러가 발생했습니다.</h1>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 0 56px;
`;

export default Loading;
