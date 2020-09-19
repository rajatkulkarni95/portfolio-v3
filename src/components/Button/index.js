import styled from "styled-components";

export const Button = styled.a`
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: ${(p) => p.theme.fonts.heading};
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  font-weight: 700;
  text-decoration: none;
  outline: none;
  :hover {
    background: ${(p) => p.hover};
  }
`;
