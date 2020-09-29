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
        It's been 10 years since I was first exposed to the World of Programming
        via C++. While it was a fun language (although a hard first language), I
        quickly moved on to C and then Python for my programming fix and now
        onto Javascript.
      </Text>
      <Text>
        I have since, learnt a lot about the web, how to build beautiful
        websites from design, and how to couple them up with my own backend.
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
        A huge Formula 1 fan, can be seen on weekends, watching the race or
        reading on the internet.
      </Text>
      <Text>Also can be seen losing MMR at Dota most times.</Text>
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
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
