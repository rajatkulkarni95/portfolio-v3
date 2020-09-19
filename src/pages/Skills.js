import React from "react";
import styled from "styled-components";
import { techSkills } from "../data/skills";

export const SkillsPage = () => (
  <Wrapper>
    <Heading>Skills</Heading>
    <SubHeading>Technologies I've worked with</SubHeading>
    <Container>
      {techSkills.map((tech) => (
        <TechWrapper key={tech.id}>
          <Icon>{tech.icon}</Icon>
          <Text>{tech.name}</Text>
        </TechWrapper>
      ))}
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.text};
`;

const SubHeading = styled.p`
  color: ${(p) => p.theme.colors.accent};
`;

const Container = styled.div`
  margin: 40px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 64px;
`;

const Text = styled.span`
  color: ${(p) => p.theme.colors.accent};

  @media (max-width: ${(p) => p.theme.screens.md}) {
    display: none;
  }
`;
