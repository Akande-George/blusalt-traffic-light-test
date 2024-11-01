"use client";
// Intersection.js
import React, { useState } from "react";
import styled from "styled-components";
import TrafficLight from "./TrafficLight";
import ControlButton from "./ControlButton";

const IntersectionContainer = styled.div`
  display: grid;
  grid-template-areas:
    ". streetA ."
    "streetB controls streetB"
    ". streetA .";
  grid-template-columns: auto 100px auto;
  gap: 20px;
  align-items: center;
  justify-items: center;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 400px;
`;

const Controls = styled.div`
  grid-area: controls;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = () => {
  const [lights, setLights] = useState({
    streetA: { red: false, yellow: false, green: true },
    streetB: { red: true, yellow: false, green: false },
  });

  const resetLights = () => {
    setLights({
      streetA: { red: false, yellow: false, green: true },
      streetB: { red: true, yellow: false, green: false },
    });
  };

  const startSequence = () => {
    // Logic for handling the traffic light sequence
  };

  return (
    <IntersectionContainer>
      {/* Street A Traffic Lights */}
      <TrafficLight {...lights.streetA} style={{ gridArea: "streetA" }} />

      {/* Street B Traffic Lights */}
      <TrafficLight {...lights.streetB} style={{ gridArea: "streetB" }} />

      {/* Control Buttons */}
      <Controls>
        <ControlButton onClick={startSequence}>Start</ControlButton>
        <ControlButton onClick={resetLights}>Reset</ControlButton>
      </Controls>
    </IntersectionContainer>
  );
};

export default HomeContainer;
