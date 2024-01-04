import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css'

// Styled components for desktop-nav
const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 17vh;

  @media screen and (max-width: 1200px) {
    display: none;
  }
  
`;

const DesktopNavLinks = styled.ul`
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

const DesktopLinkItem = styled.li``;

const DesktopLink = styled.a`
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

// Styled components for hamburger-nav
const HamburgerNav = styled.nav`
  display: none;
  justify-content: space-around;
  align-items: center;
  height: 17vh;

  @media screen and (max-width: 1200px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
`;

const IconSpan = styled.span`
  width: 100%;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease-in-out;

  &:first-child {
    transform: none;
  }

  &:nth-child(2) {
    opacity: 1;
  }

  &:last-child {
    transform: none;
  }
`;

const HamburgerLinkItem = styled.li`
  list-style: none;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const HamburgerLink = styled.a`
  display: block;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const MenuLinks = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  width: fit-content;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &.open {
    max-height: 300px;
  }
`;

const Logo = styled.div`
  font-size: 2rem;

  &:hover {
    cursor: default;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DesktopNav id="desktop-nav">
        <Logo>Rahul Verma</Logo>
        <DesktopNavLinks>
          <DesktopLinkItem><DesktopLink href="#about">About</DesktopLink></DesktopLinkItem>
          <DesktopLinkItem><DesktopLink href="#experience">Experience</DesktopLink></DesktopLinkItem>
          <DesktopLinkItem><DesktopLink href="#projects">Projects</DesktopLink></DesktopLinkItem>
          <DesktopLinkItem><DesktopLink href="#contact">Contact</DesktopLink></DesktopLinkItem>
        </DesktopNavLinks>
      </DesktopNav>
      <HamburgerNav id="hamburger-nav">
        <Logo>Rahul Verma</Logo>
        <HamburgerMenu>
          <HamburgerIcon onClick={toggleMenu}>
            <IconSpan />
            <IconSpan />
            <IconSpan />
          </HamburgerIcon>
          <MenuLinks className={isOpen ? 'open' : ''}>
            <HamburgerLinkItem><HamburgerLink href="#about" onClick={toggleMenu}>About</HamburgerLink></HamburgerLinkItem>
            <HamburgerLinkItem><HamburgerLink href="#experience" onClick={toggleMenu}>Experience</HamburgerLink></HamburgerLinkItem>
            <HamburgerLinkItem><HamburgerLink href="#projects" onClick={toggleMenu}>Projects</HamburgerLink></HamburgerLinkItem>
            <HamburgerLinkItem><HamburgerLink href="#contact" onClick={toggleMenu}>Contact</HamburgerLink></HamburgerLinkItem>
          </MenuLinks>
        </HamburgerMenu>
      </HamburgerNav>
    </>
  )
}

export default Navbar;