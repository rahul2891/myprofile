import React from 'react';
import styled from 'styled-components';
import checkmarkIcon from '../assets/checkmark.png';

const skills = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'Javascript', level: 'Experienced' },
        { name: 'ReactJS', level: 'Experienced' },
        { name: 'Style Components', level: 'Experienced' },
        { name: 'Typescript', level: 'Experienced' },
        // Add more skills here
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'NodeJS', level: 'Intermediate' },
        { name: 'ExpressJS', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'Node JS', level: 'Intermediate' },
        // Add more skills here
      ],
    },
    // Add more categories here
  ];

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

const ExperienceDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AboutContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
`;

const DetailsContainer = styled.div`
 padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
`;

const ExperienceSubTitle = styled.h2`
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
`;

const ArticleContainer = styled.div`
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
`;

const Article = styled.article`
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
`;

const Icon = styled.img`
    cursor: pointer;
    height: 2rem;
`;

const Experience = () => {
    return (
        <Section id="experience">
        <SectionTextP1 class="section__text__p1">Explore My</SectionTextP1>
        <Title class="title">Experience</Title>
        <ExperienceDetailsContainer>
          <AboutContainers>
            {skills.map((category) => (
              <DetailsContainer key={category.category}>
                <ExperienceSubTitle>{category.category}</ExperienceSubTitle>
                <ArticleContainer>
                  {category.skills.map((skill) => (
                    <Article key={skill.name}>
                      <Icon src={checkmarkIcon} alt="Experience icon" />
                      <div>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                      </div>
                    </Article>
                  ))}
                </ArticleContainer>
              </DetailsContainer>
            ))}
          </AboutContainers>
        </ExperienceDetailsContainer>
      </Section>
    );
};

export default Experience;
