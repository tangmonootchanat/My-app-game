import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme , darkTheme } from '../../../styles/theme';
import { Theme } from '../../../styles/theme';
import Logo from '../../../image/Logo.png';
import NavBra from '../../component/NavBra';
const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
  }
`;
const Wrappercon = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LogoContainer = styled.div`
  display:flex;
  justify-content:center;
  
`;

const LogoImage = styled.img`
  width: 750px;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const StartButtonsContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  margin-right:50px;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
  }
`;

const StartButtons = styled.button`
  background-image: ${(props) => props.theme.buttonBackground};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent; 
  width: 280px;
  height: 120px;
  margin-top:-150px;
  border: none;
  cursor: pointer;
`;



const StartButtonlight = styled.button`
  width: 90px;
  height: 80px;
  font-size: 16px;
  background:#ffb11a;
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid white;
  outline: none;

  @media (max-width: 768px) {
    width: 60px;
    height: 50px;
    font-size: 12px;
  }
  &:hover {
    border: 2px solid #fff;
    transform: scale(1.1); 
  }

  &:active {
    transform: translateY(2px);
  }
`;

const StartButtondark = styled.button`
  width: 90px;
  height: 80px;
  font-size: 16px;
  background:#965CD0;
  background-size: cover;
  border-radius: 10px;
  border: 2px solid white;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    width: 60px;
    height: 50px;
    font-size: 12px;
  }
  &:hover {
    border: 2px solid #fff;
    transform: scale(1.1); 
  }

  &:active {
    transform: translateY(2px);
  }
`;

const Text =  styled.div`
  display: flex;
  justify-content:end;
  margin-right:160px;
  margin-bottom:30px;
  font-size:38px;
  font-family: "Luckiest Guy", cursive;
  -webkit-text-stroke: 2px #623AA2; 
  font-style: normal;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
  }
`;
function Homegame() {
  const selectedTheme = 'selectedThemes';

  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem(selectedTheme, JSON.stringify(theme));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <NavBra />
    <GlobalStyle />
    
    <Wrappercon>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
      <StartButtons />
    </Wrappercon>
    <StartButtonsContainer>
      <StartButtonlight onClick={() => toggleTheme(lightTheme)}/>
      <StartButtondark onClick={() => toggleTheme(darkTheme)}/>
  
    </StartButtonsContainer>
  </ThemeProvider>
  );
}

export default Homegame;
