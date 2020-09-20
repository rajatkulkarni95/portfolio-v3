import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "../components/Button-Container";
import { Hero } from "../components/Hero";
import { Socials } from "../components/Social";
import { AboutPage } from "./About";
import { ProjectsPage } from "./Projects";
import { SkillsPage } from "./Skills";

export const HomePage = () => (
  <ColumnFlex>
    <Hero />
    <ButtonContainer />
    <Socials />

    <AboutPage />

    <ProjectsPage />

    <SkillsPage />
  </ColumnFlex>
);

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    align-items: center;
    max-width: ${(p) => p.theme.screens.lg};
  }
`;
