import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiMoonClearLine } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";

export const Navigation = ({ theme, handleClick }) => {
  return (
    <Nav>
      <List>
        <ListItem exact to="/">
          Home
        </ListItem>
        <ListItem to="/projects">Projects</ListItem>
        <ListItem to="/skills">Skills</ListItem>
        <ListItem to="/about">About</ListItem>
      </List>
      <Button onClick={handleClick}>
        {theme === "light" ? (
          <IoMdSunny style={{ fontSize: "24px", transition: "0.3s" }} />
        ) : (
          <RiMoonClearLine
            style={{ color: "white", fontSize: "24px", transition: "0.3s" }}
          />
        )}
      </Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  margin: 0 50px;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    margin: 0;
  }

  @media (max-width: ${(p) => p.theme.screens.md}) {
    padding: 40px;
  }

  @media (max-width: ${(p) => p.theme.screens.sm}) {
    padding: 20px 40px;
  }
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled(NavLink)`
  list-style-type: none;
  margin-right: 20px;

  text-decoration: none;
  color: ${(p) => p.theme.colors.accent};

  :hover {
    color: ${(p) => p.theme.colors.text};
    transition: 0.2s;
  }

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
