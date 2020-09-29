import React from "react";
import styled from "styled-components";
import { Avatar } from "../Avatar";

export const Hero = () => {
  return (
    <Flex>
      <Text>
        Hi, I’m Rajat. I’m an experienced automation and python developer with a
        deep interest and passion for modern web development.
      </Text>
      <Avatar />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 30px 0;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 10px;
  }
`;

const Text = styled.h1`
  font-size: 36px;
  font-weight: 500;
  max-width: 70%;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    padding: 10px 0;
    font-size: 24px;
    max-width: 100%;
    text-align: center;
  }
`;
