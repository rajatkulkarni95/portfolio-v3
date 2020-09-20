import React from "react";
import styled from "styled-components";

export const AboutPage = () => (
  <Wrapper>
    <Section>
      <Heading>About Me</Heading>
      <Text>
        I'm Rajat Kulkarni. I work full time as a Robotic Process
        Automation/Python Consultant at{" "}
        <Link href="https://home.kpmg/in/en/home.html">KPMG India</Link>. In my
        free time, I study and build projects using React.
      </Text>
      <Text>
        I strive to make pixel perfect web applications, with a goal to create
        applications that would help people everyday in their lives.
      </Text>
    </Section>
    <Section>
      <Heading>Why Web Development?</Heading>
      <Text>
        While I've known HTML and CSS for a long time now, it was the iPhone
        landing page that truly made me feel that i wanted to be a part of the
        industry that strives to reach its customers via beautiful rendentions
        of the web.
      </Text>
      <Text>
        I have since learnt a lot about how the web works, and what drives the
        data to make those things pop out as they did when i first saw the
        landing page.
      </Text>
      <Text>
        The purpose of me pursuing a career in web development is because of the
        sheer amount of options to tackle any given problem, allow me to learn
        and grow myself while giving our customers the best quality applications
        for their uses.
      </Text>
    </Section>
    <Section>
      <Heading>What else?</Heading>
      <Text>
        You can usually see me watching the current Formula 1 race, watching
        highlights of the last race, watching videos of the previous races or
        being in the formula 1 subreddit (Gee! Guess I like Formula 1).
      </Text>
      <Text>Also can be seen losing MMR at Dota most times.</Text>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  margin: 10px 0;
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.text};
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${(p) => p.theme.colors.accent};
  line-height: 1.75;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.primary};
`;
