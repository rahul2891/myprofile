import React from 'react';
import styled from 'styled-components';
import profilePic from '../assets/profile-pic.png';
import rahul from '../assets/rahul1.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Section = styled.section`
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
    min-height: fit-content;
    display: flex;
    justify-content: center;
    gap: 5rem;
    height: 80vh;

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

const ProfilePicContainer = styled.div`
    display: flex;
    height: 500px;
    width: 500px;
    margin: auto 0;
`;

const SectionText = styled.div`
    align-self: center;
    text-align: center;

    p {
    font-weight: 600;
  }
    
`;

const SectionTextP1 = styled.p`
  text-align: center;
`;

const SectionTextP2 = styled.p`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const Button = styled.button`
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    background: rgb(53, 53, 53);
    color: white;

    &:hover {
        cursor: pointer;
        background: rgb(0, 0, 0);
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
`;

const Icon = styled.img`
    cursor: pointer;
    height: 2rem;
`;

const Profile = () => {
    const handleClick = (url) => {
        window.open(url);
    };

    return (
        <Section id="profile">
            <ProfilePicContainer>
                <img src={rahul} alt="Rahul Verma profile picture" />
            </ProfilePicContainer>
            <SectionText>
                <SectionTextP1>Hello, I'm</SectionTextP1>
                <Title>Rahul Verma</Title>
                <SectionTextP2>Full Stack Developer</SectionTextP2>
                <ButtonContainer>
                    <Button
                        onClick={() => handleClick('../assets/resume-example.pdf')}
                    >
                        Download CV
                    </Button>
                    <Button onClick={() => handleClick('./#contact')}>
                        Contact Info
                    </Button>
                </ButtonContainer>
                <SocialsContainer>
                    <Icon
                        src={linkedinIcon}
                        alt="My LinkedIn profile"
                        onClick={() => handleClick('https://linkedin.com/')}
                    />
                    <Icon
                        src={githubIcon}
                        alt="My Github profile"
                        onClick={() => handleClick('https://github.com/')}
                    />
                </SocialsContainer>
            </SectionText>
        </Section>
    );
};

export default Profile;