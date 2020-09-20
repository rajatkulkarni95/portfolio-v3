import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { projects } from "../data/projects";

export const ProjectsPage = () => (
  <Wrapper>
    <Heading>Projects</Heading>
    <SubHeading>Collection of personal web dev projects</SubHeading>
    <Container>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.text};
`;

const SubHeading = styled.p`
  color: ${(p) => p.theme.colors.accent};
`;

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
