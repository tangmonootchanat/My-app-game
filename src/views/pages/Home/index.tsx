import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme , darkTheme } from '../../../styles/theme';
import { Theme } from '../../../styles/theme';
import Logo from '../../../image/Logo.png';
import Navbar from '../../component/navbar/Navbar';

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
    border: 3px solid #fff;
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
    border: 3px solid #fff;
    transform: scale(1.1); 
  }

  &:active {
    transform: translateY(2px);
  }
`;

function Homegame() {
  const navigate = useNavigate();

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
  const handleClick = () => {
    navigate('/Selectgame');
    };
  return (
  <ThemeProvider theme={currentTheme}>
    <Navbar />
    <GlobalStyle />
      <Wrappercon>
            <LogoContainer>
                 <LogoImage src={Logo} alt="Logo" />
            </LogoContainer>
            <StartButtons onClick={handleClick} />
      </Wrappercon>
      <StartButtonsContainer>
          <StartButtonlight onClick={() => toggleTheme(lightTheme)}/>
          <StartButtondark onClick={() => toggleTheme(darkTheme)}/>
      </StartButtonsContainer>
  </ThemeProvider>
  );
}

export default Homegame;
