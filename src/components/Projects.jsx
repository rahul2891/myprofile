import React from 'react';
import styled from 'styled-components';
import '../App.css'
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

const Section = styled.section`
    padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;

    @media screen and (max-width: 1400px) {
      height: fit-content;
  }

  @media screen and (max-width: 1200px) {
    height: fit-content;
    margin: 0 5%;
  }

`;

const SectionTextP1 = styled.p`
  text-align: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 600px) {
      font-size: 2rem;
  }
`;


export const ExperienceDetailsContainer = styled.div`
  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

export const AboutContainers = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const DetailsContainer = styled.div`
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
  
`;

export const ArticleContainer = styled.div`
  /* Your CSS properties */
`;

export const ProjectImage = styled.img`
  border-radius: 2rem;
  width: 90%;
  height: 90%;
`;

export const ProjectTitle = styled.h2`
  margin: 1rem;
  color: black;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const ProjectButton = styled.button`
font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 8rem;
  border-radius: 2rem;
  color: black;
  border-color: rgb(163, 163, 163);
  border: rgb(53, 53, 53) 0.1rem solid;
  background: none;
  cursor: pointer;
  

  &:hover {
    background: rgb(53, 53, 53);
    color: white;
  }
  
`;


const Projects = () => {
  const projects = [
    { img: project1, title: 'YouTube Clone', link: 'https://github.com/rahul2891/youtube_clone', liveDemo: 'https://live-demo-1.com' },
    { img: project2, title: 'Netflix Clone', link: 'https://github.com/rahul2891', liveDemo: 'https://live-demo-2.com' },
    { img: project3, title: 'Professional BE Setup', link: 'https://github.com/rahul2891/professional_BE_setup', liveDemo: 'https://live-demo-3.com' },
    // { img: project1, title: 'Project One', link: 'https://github.com/', liveDemo: 'https://live-demo-1.com' },
    // { img: project2, title: 'Project Two', link: 'https://github.com/', liveDemo: 'https://live-demo-2.com' },
    // { img: project3, title: 'Project Three', link: 'https://github.com/', liveDemo: 'https://live-demo-3.com' },
  
  ];

    return (
        <Section id="projects">
        <SectionTextP1 className="section__text__p1">Browse My Recent</SectionTextP1>
        <Title className="title">Projects</Title>
        <ExperienceDetailsContainer>
      <AboutContainers>
        {projects.map((project, index) => (
          <DetailsContainer key={index}>
            <ArticleContainer>
              <ProjectImage src={project.img} alt={project.title} />
            </ArticleContainer>
            <ProjectTitle>{project.title}</ProjectTitle>
            <BtnContainer>
              <ProjectButton onClick={() => window.location.href = project.link}>Github</ProjectButton>
              {/* <ProjectButton onClick={() => window.location.href = project.link}>Live Demo</ProjectButton> */}
              <ProjectButton onClick={() =>  alert('Coming soon!')}>Live Demo</ProjectButton>
            </BtnContainer>
          </DetailsContainer>
        ))}
      </AboutContainers>
    </ExperienceDetailsContainer>

        </Section>
    );
};

export default Projects;
