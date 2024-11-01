// TrafficLight.js
import React from "react";
import styled from "styled-components";

const TrafficLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  padding: 10px;
  background-color: #333;
  border-radius: 10px;
`;

const Light = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 6px 0;
  background-color: ${({ color }) => color || "#555"};
`;

const TrafficLight = ({ red, yellow, green }) => (
  <TrafficLightContainer>
    <Light color={red ? "red" : "#555"} />
    <Light color={yellow ? "yellow" : "#555"} />
    <Light color={green ? "green" : "#555"} />
  </TrafficLightContainer>
);

export default TrafficLight;
