import React from "react";
import styled from "styled-components";
import { socials } from "../../data/social";

export const Socials = () => {
  return (
    <Wrapper>
      {socials.map((social) => (
        <Link
          href={social.url}
          key={social.site}
          aria-label={`${social.site} Icon`}
          target="_blank"
          rel="noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 70px;

  @media (max-width: 1024px) {
    margin: 20px 40px;
  }
`;

const Link = styled.a`
  font-size: 30px;
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
`;
