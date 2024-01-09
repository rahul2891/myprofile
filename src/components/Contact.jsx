import React, { useContext } from 'react';
import styled from 'styled-components';
import emailIcon from '../assets/email.png';
import emaildark from '../assets/emaildark.png';
import linkedinIcon from '../assets/linkedin.png';
import linkedindark from '../assets/linkedindark.png';
import '../App.css'
import { ThemeContext } from '../themeContext';

const Section = styled.section`
    padding-top: 4vh;
  height: fit-content;
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
  @media screen and (max-width: 600px) {
    height: 40vh;
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

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;

  @media screen and (max-width: 600px) {
    margin: 0;
    font-size: 1rem;
  }
  
`;

const ContactIcon = styled.img`
  cursor: default;
  height: 2.5rem;
`;

const EmailIcon = styled(ContactIcon)`
  height: 2.5rem;
`;

const Icon = styled.img`
    cursor: pointer;
    height: 2rem;
`;

const Footer = styled.footer`
  height: 26vh;
  margin: 0 1rem;

  @media screen and (max-width: 600px) {
    height: 40vh;
  }
`;

const Copyright = styled.p`
  text-align: center;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;
`;

const NavLinks = styled.ul`
 display: flex;
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
`;

const NavLink = styled.li`
   @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const FooterNav = styled.nav`
   @media screen and (max-width: 600px) {
    height: fit-content;
    margin-bottom: 2rem;
  }
`

const FooterLink = styled.a`
  color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  text-decoration: none;
  text-decoration-color: white;

  &:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ContactLink = styled.a`
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
  text-decoration: none;
  text-decoration-color: white;

  &:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);
  }
`

const StyledTextPara = styled.p`
    color: ${props => props.theme === 'dark' ? 'white' : 'black'};
    @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`

const Contact = () => {
  const { theme } = useContext(ThemeContext);

    return (
        <>
        <Section id="contact">
        <SectionTextP1 class="section__text__p1">Get in Touch</SectionTextP1>
        <Title class="title">Contact Me</Title>
        <ContactInfoUpperContainer>
        <ContactInfoContainer>
          <EmailIcon src={theme === 'light' ? emailIcon : emaildark} alt="Email icon" />
          <StyledTextPara><ContactLink href="https://www.gmail.com"  theme={theme}>rahul281191@gmail.com</ContactLink></StyledTextPara>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactIcon src={theme === 'light' ? linkedinIcon : linkedindark} alt="LinkedIn icon" />
          <StyledTextPara><ContactLink href="https://www.linkedin.com/in/rahulv28/"  theme={theme}>LinkedIn</ContactLink></StyledTextPara>
        </ContactInfoContainer>
      </ContactInfoUpperContainer>
       
      </Section>
    <Footer>
    <FooterNav>
      <NavLinksContainer>
        <NavLinks>
          <NavLink><FooterLink href="#about">About</FooterLink></NavLink>
          <NavLink><FooterLink href="#experience">Experience</FooterLink></NavLink>
          <NavLink><FooterLink href="#projects">Projects</FooterLink></NavLink>
          <NavLink><FooterLink href="#contact">Contact</FooterLink></NavLink>
        </NavLinks>
      </NavLinksContainer>
    </FooterNav>
    <Copyright>Copyright &#169; 2023 Rahul Verma. All Rights Reserved.</Copyright>
  </Footer>
  </>
    );
};

export default Contact;
