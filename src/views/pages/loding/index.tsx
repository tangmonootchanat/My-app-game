import React, { useState, useEffect } from 'react';
import Loadingbar from '../../component/load/Loading';
import { lightTheme } from '../../../styles/theme';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Logo from '../../../image/Logo.png';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
  }
`;
const Container = styled.div`
  background: ${(props) => props.theme.background};
  text-align: center;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredImage = styled.img`
  width: 1020px;
  height: auto;
  margin: auto;
`;

const Text = styled.div`
  color: white;
  font-size: 18px; 
  margin-top: -230px;
`;

function SamplePage() {
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);
  return (
    <ThemeProvider theme={currentTheme}>
       <GlobalStyle />
       <Container>
      <CenteredImage src={Logo} />
      <Text>Loading...</Text>
      <Loadingbar />
    </Container>
    </ThemeProvider>
  );
}

export default SamplePage;



