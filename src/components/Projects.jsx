import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;

    @media screen and (max-width: 1400px) {
    height: 83vh;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 1200px) {
    display: block;
    height: fit-content;
    margin: 0 5%;
  }

  @media screen and (max-width: 600px) {
    height: 83vh;
    margin-bottom: 0;
  }
`;

const SectionTextP1 = styled.p`
  text-align: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`;


const Projects = () => {
    return (
        <Section id="contact">
        <SectionTextP1 class="section__text__p1">Browse My Recent</SectionTextP1>
        <Title class="title">Projects</Title>
        </Section>
    );
};

export default Projects;
