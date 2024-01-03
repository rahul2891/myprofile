import React from 'react';
import styled from 'styled-components';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

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

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
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
`;

const NavLink = styled.li`
  // Add styles for li here
`;

const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  text-decoration-color: white;

  &:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 1rem;
    text-decoration-color: rgb(181, 181, 181);
  }
`;

const Contact = () => {
    return (
        <>
        <Section id="contact">
        <SectionTextP1 class="section__text__p1">Get in Touch</SectionTextP1>
        <Title class="title">Contact Me</Title>
        <ContactInfoUpperContainer>
        <ContactInfoContainer>
          <EmailIcon src={emailIcon} alt="Email icon" />
          <p><a href="rahul281191@gmail.com">rahul281191@gmail.com</a></p>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <ContactIcon src={linkedinIcon} alt="LinkedIn icon" />
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </ContactInfoContainer>
      </ContactInfoUpperContainer>
       
      </Section>
    <Footer>
    <nav>
      <NavLinksContainer>
        <NavLinks>
          <NavLink><FooterLink href="#about">About</FooterLink></NavLink>
          <NavLink><FooterLink href="#experience">Experience</FooterLink></NavLink>
          <NavLink><FooterLink href="#projects">Projects</FooterLink></NavLink>
          <NavLink><FooterLink href="#contact">Contact</FooterLink></NavLink>
        </NavLinks>
      </NavLinksContainer>
    </nav>
    <Copyright>Copyright &#169; 2023 Rahul Verma. All Rights Reserved.</Copyright>
  </Footer>
  </>
    );
};

export default Contact;
