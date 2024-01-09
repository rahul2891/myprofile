import React, { useContext } from 'react';
import styled from 'styled-components';
import aboutPic from '../assets/rahul.png';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';
import '../App.css'
import { ThemeContext } from '../themeContext';

const Section = styled.section`
    padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;

  @media screen and (max-width: 1200px) {
    height: fit-content;
    margin: 0 5%;
  }
`;


const AboutSection = styled(Section)`
    position: relative;
`;

const AboutContainers = styled.div`
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    display: flex;

    @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1200px) {
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const AboutDetailsContainer = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
`;

const AboutPic = styled.img`
    border-radius: 2rem;
    
    @media screen and (max-width: 1200px) {
        width: 275px;
        height: 275px;
        margin: 0 auto 2rem;   
    }
    @media screen and (max-width: 600px) {
        width: auto;
    height: 46vw;
    justify-content: center;     
    }
    `;

const Arrow = styled.img`
    position: absolute;
    right: -5rem;
    bottom: 2.5rem;
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

const SectionContainer = styled.div`
 display: flex;
    /* gap: 4rem;
    height: 80%; */
    @media screen and (max-width: 1200px) {
        display: block;
    height: fit-content;
    
  }
`;

const TextContainer = styled.div``

const TextPara = styled.p`
    color: ${() => {
    const { theme } = useContext(ThemeContext);
    return theme === 'light' ? 'black' : 'white';
  }};
`

const SectionPicContainer = styled.div`
    display: flex;
    height: 500px;
    width: 500px;
    margin: auto 0;

    @media screen and (max-width: 1200px) {
    width: 275px;
    height: 275px;
    margin: 0 auto 2rem;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    height: 46vw;
    justify-content: center;
  }
`;

const Icon = styled.img`
    cursor: pointer;
    height: 2rem;
`;

const SectionTextP1 = styled.p`
  text-align: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 1200px) {
    font-size: 2rem;
  }
`;

const StyledTextPara = styled.p`
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
`
const StyledTextHeading = styled.h3`
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
`


const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <AboutSection id="about" className={theme}>
            <SectionTextP1>Get To Know More</SectionTextP1>
            <Title>About Me</Title>
            <SectionContainer className="section-container">
                <SectionPicContainer className="section__pic-container">
                    <AboutPic src={aboutPic} alt="Profile picture" className="about-pic" />
                </SectionPicContainer>
                <AboutDetailsContainer className="about-details-container">
                    <AboutContainers className="about-containers">
                        <DetailsContainer className="details-container">
                            <Icon src={experienceIcon} alt="Experience icon" className="icon" />
                            <StyledTextHeading>Experience</StyledTextHeading>
                            <StyledTextPara>3.5+ years <br />Frontend Development</StyledTextPara>
                        </DetailsContainer>
                        <DetailsContainer className="details-container">
                            <Icon src={educationIcon} alt="Education icon" className="icon" />
                            <StyledTextHeading>Education</StyledTextHeading>
                            <StyledTextPara>Bachelors Degree</StyledTextPara>
                        </DetailsContainer>
                    </AboutContainers>
                    <TextContainer>
                        <TextPara>
                        I'm a Full Stack Developer with expertise in React.js and TypeScript for front-end 
                        development, and Node.js, Express.js, MongoDB for back-end development. I have a passion for solving complex problems 
                        and building scalable web applications. I'm always eager to learn new 
                        technologies and improve my skills. My goal is to create software that 
                        not only functions efficiently under the hood, but also provides intuitive, 
                        user-friendly interfaces.

                        </TextPara>
                    </TextContainer>
                </AboutDetailsContainer>
            </SectionContainer>
            {/* <Icon
                src={arrowIcon}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => window.location.href='./#experience'}
            /> */}
        </AboutSection>
    );
};

export default About;