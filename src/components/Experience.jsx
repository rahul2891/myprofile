import React, { useContext } from 'react';
import styled from 'styled-components';
import checkmarkIcon from '../assets/checkmark.png';
import checkmarkdark from '../assets/checkmarkdark.png';
import '../App.css'
import { ThemeContext } from '../themeContext';

const skills = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 'Experienced' },
        { name: 'CSS', level: 'Experienced' },
        { name: 'Javascript', level: 'Experienced' },
        { name: 'React', level: 'Experienced' },
        { name: 'Styled-Components', level: 'Experienced' },
        { name: 'Typescript', level: 'Experienced' },
        // Add more skills here
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'ExpressJS', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
        { name: 'Nginx', level: 'Beginner' },
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

  @media screen and (max-width: 1200px) {
    height: fit-content;
    margin-top: 2rem;
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

const ExperienceDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme === 'light' ? 'black' : 'white'};

  @media screen and (max-width: 1200px) {
    margin-top: 2rem;
  }
`;

const AboutContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: ${props => props.theme === 'light' ? 'black' : 'white'};

  @media screen and (max-width: 1200px) {
    margin-top: 0;
  }


  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const DetailsContainer = styled.div`
 padding: 1.5rem;
  flex: 1;
  background: ${props => props.theme === 'light' ? 'white' : 'black'};
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

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
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

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }

`;

const Icon = styled.img`
    cursor: pointer;
    height: 2rem;
`;

const Experience = () => {
  const { theme } = useContext(ThemeContext);

    return (
        <Section id="experience" className={theme}>
        <SectionTextP1 class="section__text__p1">Explore My</SectionTextP1>
        <Title class="title">Experience</Title>
        <ExperienceDetailsContainer theme={theme}>
          <AboutContainers theme={theme}> 
            {skills.map((category) => (
              <DetailsContainer key={category.category} theme={theme}>
                <ExperienceSubTitle>{category.category}</ExperienceSubTitle>
                <ArticleContainer>
                  {category.skills.map((skill) => (
                    <Article key={skill.name}>
                      <Icon src={theme === 'light' ? checkmarkIcon : checkmarkdark} alt="Experience icon" />
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
