import React from "react";
import styled from "styled-components";

// components
import { minimizeIcon, maximizeIcon, quitIcon } from "../assets";
import { Button } from "./";

const Menubar = () => {
  return (
    <MenubarBox>
      <ButtonWrapper>
        <Button bg='var(--bordergray)'>
          <Image src={minimizeIcon} alt='minimize-button' />
        </Button>
        <Button bg='var(--bordergray)'>
          <Image src={maximizeIcon} alt='maximize-button' />
        </Button>
        <Button bg='var(--bordergray)'>
          <Image src={quitIcon} alt='quit-button' />
        </Button>
      </ButtonWrapper>
    </MenubarBox>
  );
};

const MenubarBox = styled.section`
  border-bottom: 1px solid #d5d9e2;
  background: var(--bordergray);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 35px;
`;

export default Menubar;
