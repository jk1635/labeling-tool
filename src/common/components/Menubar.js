import React from "react";
import styled from "styled-components";

import { minimizeIcon, maximizeIcon, quitIcon } from "../assets";
import Button from "./Button";

const Menubar = () => {
  return (
    <MenubarWrapper>
      <ButtonWrapper>
        <Button bg='var(--bordergray)'>
          <img
            style={{ width: "35px" }}
            src={minimizeIcon}
            alt='minimize-button'
          />
        </Button>
        <Button bg='var(--bordergray)'>
          <img
            style={{ width: "35px" }}
            src={maximizeIcon}
            alt='maximize-button'
          />
        </Button>
        <Button bg='var(--bordergray)'>
          <img style={{ width: "35px" }} src={quitIcon} alt='quit-button' />
        </Button>
      </ButtonWrapper>
    </MenubarWrapper>
  );
};

const MenubarWrapper = styled.section`
  border-bottom: 1px solid #d5d9e2;
  background: var(--bordergray);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Menubar;
