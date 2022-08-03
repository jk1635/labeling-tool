import React from "react";
import styled from "styled-components";

const Button = props => {
  const { onClick, children, size, margin, marginTop, padding, bg, cursor } =
    props;

  const styles = {
    onClick,
    children,
    size,
    margin,
    marginTop,
    padding,
    bg,
    cursor,
  };

  return (
    <ElButton {...styles} onClick={onClick}>
      {children}
    </ElButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  size: 40,
  margin: false,
  padding: false,
};

const ElButton = styled.button`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  border: none;
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${props => (props.padding ? `margin: ${props.padding};` : "")}
  ${props => (props.bg ? `background-color: ${props.bg};` : "")}
  cursor: pointer;
`;

export default Button;
