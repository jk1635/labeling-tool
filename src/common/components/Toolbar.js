import React from "react";
import styled from "styled-components";

// recoil
import { useRecoilState } from "recoil";
import { boxState } from "../recoil/atoms";

// components
import { Button } from "./";

// assets
import { toolbarBoundingBox, toolbarPointer } from "../assets";

// let id = 0;
// const getId = () => {
//   return id++;
// };

const Toolbar = () => {
  const [boxes, setBoxes] = useRecoilState(boxState);
  return (
    <ToolbarBox>
      <ButtonWrapper>
        <Button hover marginTop='8px' bg='var(--bggray)'>
          <img src={toolbarPointer} alt='toolbar-pointer' />
        </Button>
        <Button
          hover
          onClick={() => {
            const id = new Date().toISOString();
            setBoxes([...boxes, id]);
          }}
          marginTop='8px'
          bg='var(--bggray)'
        >
          <img src={toolbarBoundingBox} alt='toolbar-bounding-box' />
        </Button>
      </ButtonWrapper>
    </ToolbarBox>
  );
};

const ToolbarBox = styled.nav`
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
