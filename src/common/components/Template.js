import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.main`
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1080px;
  background-color: var(--white);
  border: 1px solid var(--bordergray);
`;

export default Template;
