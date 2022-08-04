import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderBox>
      <Text>Dataset Label</Text>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid var(--bordergray);
  background: var(--bggray);
`;

const Text = styled.p`
  margin-left: 56px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: var(--black);
`;

export default Header;
