import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

export const Card = ({ name, description, techStack, github, appLink }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <List>
      {techStack.map((tech) => (
        <ListItem>{tech}</ListItem>
      ))}
    </List>
    <LinkContainer>
      <Link href={github}>
        Github <FiExternalLink />
      </Link>
      <Link href={appLink}>
        Live App <FiExternalLink />
      </Link>
    </LinkContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.elements};
  padding: 20px;
  display: flex;
  width: 49%;
  flex-direction: column;
  border-radius: 3px;
  margin: 10px 0;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    width: 100%;
  }
`;

const Name = styled.h3`
  color: ${(p) => p.theme.colors.primary};
`;

const Description = styled.p`
  padding: 5px 0;
  color: ${(p) => p.theme.colors.accent};
  font-style: italic;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Link = styled.a`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  margin-right: 10px;

  :hover {
    color: ${(p) => p.theme.colors.text};
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.secondary};
  list-style-type: none;
  font-size: 12px;
`;
