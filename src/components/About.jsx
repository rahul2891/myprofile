import React from 'react';
import styled from 'styled-components';
import aboutPic from '../assets/rahul.png';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';

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



const AboutSection = styled(Section)`
    position: relative;
`;

const AboutContainers = styled.div`
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    display: flex;
`;

const AboutDetailsContainer = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
`;

const AboutPic = styled.img`
    border-radius: 2rem;
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
`;

const SectionPicContainer = styled.div`
    display: flex;
    height: 500px;
    width: 500px;
    margin: auto 0;
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
`;


const About = () => {
    return (
        <AboutSection id="about">
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
                            <h3>Experience</h3>
                            <p>2+ years <br />Frontend Development</p>
                        </DetailsContainer>
                        <DetailsContainer className="details-container">
                            <Icon src={educationIcon} alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
                        </DetailsContainer>
                    </AboutContainers>
                    <div className="text-container">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                            reprehenderit et laborum, rem, dolore eum quod voluptate
                            exercitationem nobis, nihil esse debitis maxime facere minus sint
                            delectus velit in eos quo officiis explicabo deleniti dignissimos.
                            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                            reiciendis ea magnam? Nulla, impedit fuga!
                        </p>
                    </div>
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