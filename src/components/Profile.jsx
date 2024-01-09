import React, { useContext } from 'react';
import styled from 'styled-components';
import rahul from '../assets/rahul1.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import linkedindark from '../assets/linkedindark.png';
import githubdark from '../assets/githubdark.png';
import resume from '../assets/rahul-resume.pdf'
import '../App.css'
import { ThemeContext } from '../themeContext';

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
    height: fit-content;
    margin: 0 5%;
    display: block;
}

@media screen and (max-width: 600px) {
    height: 83vh;
    margin-bottom: 0;
}
`;

const ProfilePicContainer = styled.div`
    display: flex;
    height: 400px;
    width: 400px;
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

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h1`
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 600px) {
        font-size: 2rem;
  }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
  }
`;

const Button = styled.button`
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    width: 8rem;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    background: rgb(53, 53, 53);
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
    

    &:hover {
        cursor: pointer;
        background: ${props => props.theme === 'light' ? 'black' : 'white'};
        color: ${props => props.theme === 'dark' ? 'black' : 'white'};

    }
`;

const TextPara = styled.p`
    color: ${props => props.theme === 'light' ? 'white' : 'dark'};
`

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
    const { theme } = useContext(ThemeContext);

    const handleClick = (url) => {
        window.open(url);
    };

    const handleClickPath = (path) => {
        window.location.href = path;
      };

    return (
        <Section id="profile" className={theme}>
            <ProfilePicContainer>
                <img src={rahul} alt="Rahul Verma profile picture" />
            </ProfilePicContainer>
            <SectionText>
                <SectionTextP1>Hello, I'm</SectionTextP1>
                <Title>Rahul Verma</Title>
                <SectionTextP2>Full Stack Developer</SectionTextP2>
                <ButtonContainer>
                    <Button
                        onClick={() => window.open(resume)}
                        theme={theme}
                    >
                        <TextPara theme={theme}>Download CV</TextPara>
                    </Button>
                    <Button onClick={() => handleClickPath('./#contact')} theme={theme}>
                        <TextPara theme={theme}>Contact Info</TextPara>
                    </Button>
                </ButtonContainer>
                <SocialsContainer>
                    <Icon
                        src={theme === 'light' ? linkedinIcon : linkedindark}
                        alt="My LinkedIn profile"
                        onClick={() => handleClick('https://www.linkedin.com/in/rahulv28/')}
                    />
                    <Icon
                        src={theme === 'light' ? githubIcon : githubdark}
                        alt="My Github profile"
                        onClick={() => handleClick('https://github.com/rahul2891')}
                    />
                </SocialsContainer>
            </SectionText>
        </Section>
    );
};

export default Profile;