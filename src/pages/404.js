import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorPage = () => (
  <Wrapper>
    <h1>Lost are we?</h1>
    <Button to="/">Go back to Home</Button>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: ${(p) => p.theme.fonts.heading};
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.text};
  font-weight: 700;
  text-decoration: none;
  outline: none;
`;
