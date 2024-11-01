import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ControlButton = ({ onClick, children }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default ControlButton;
