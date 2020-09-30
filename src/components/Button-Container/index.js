import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import Resume from "../../assets/Rajat_Kulkarni_Resume.pdf";

export const ButtonContainer = () => (
  <Flex>
    <Button
      href="mailto:rajatkulkarni95@gmail.com"
      background="#ff7e67"
      color="#1a1c20"
      hover="#ed6c55"
    >
      Email Me
    </Button>
    <Button href={Resume} background="#2C323D" color="#C1C2C6" hover="#353c4a">
      Resume
    </Button>
  </Flex>
);

const Flex = styled.div`
  display: flex;
  padding: 10px 0;

  @media (max-width: 1024px) {
    padding: 10px 40px;
  }

  @media (max-width: ${(p) => p.theme.screens.md}) {
    padding: 10px;
  }
`;
