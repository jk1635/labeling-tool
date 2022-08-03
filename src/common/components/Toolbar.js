import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { toolbarBoundingBox, toolbarPointer } from "../assets";

const Toolbar = () => {
  return (
    <Nav>
      <ButtonWrapper>
        <Button marginTop='8px' bg='var(--bggray)'>
          <img src={toolbarPointer} alt='toolbar-pointer' />
        </Button>
        <Button marginTop='8px' bg='var(--bggray)'>
          <img src={toolbarBoundingBox} alt='toolbar-bounding-box' />
        </Button>
      </ButtonWrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  position: absolute;
  top: 106px;
  width: 56px;
  height: 973px;
  background: var(--bggray);
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Toolbar;
