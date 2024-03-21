import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lightTheme } from '../../../styles/theme';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../component/navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
  }
`;
const Wrappercon = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const TextStage = styled.button`
  background-image: ${(props) => props.theme.buttonSelect};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent; 
  width: 410px;
  height: 320px;
  margin-top:-75px;
  border: none;
  cursor: pointer;
`;
const Background = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color:${(props) => props.theme.boxsColor};
  border: 4px solid #fff; 
  border-radius:30px;
  margin: auto; 
  margin-top:-150px;
  max-width:1020px; 
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.SelectboxsColor};
  border-radius:15px;
  border: 2px solid #fff;
`;
const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 40px;
  margin-left:20px;
  padding: 30px;
  
`;
const NumberText = styled.span`
   display:flex;
   justify-content:center;
   margin-top:10px;
   font-size:20px;
`;
const LockedBox = styled(Box)`
  position: relative;
`;

const LockIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(30deg); 
  color: #FF0707; 
`;

function SelectGame() {
  
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const navigate = useNavigate();

  const handleButtonClick = (page: string) => {
    navigate(page);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);
 
  const Listbutton: any = [
    {
      label: '1',
      value: 1,
      url: '/GamePage'
    },
    {
      label: '2',
      value: 2
    },
    {
      label: '3',
      value: 3
    },
    {
      label: '4',
      value: 4
    },
    {
      label: '5',
      value: 5
    },
    {
      label: '6',
      value: 6
    },
    {
      label: '7',
      value: 7
    },
    {
      label: '8',
      value: 8
    },
    {
      label: '9',
      value: 9
    },
    {
      label: '10',
      value: 10
    },
    {
      label: '11',
      value: 11
    },
    {
      label: '12',
      value: 12
    },
    {
      label: '13',
      value: 13
    },
    {
      label: '14',
      value: 14
    },
    {
      label: '15',
      value: 15
    },
    {
      label: '16',
      value: 16
    },
    {
      label: '17',
      value: 17
    },
    {
      label: '18',
      value: 18
    },
    {
      label: '19',
      value: 19
    },
    {
      label: '20',
      value: 20
    },
    {
      label: '21',
      value: 21
    },
    {
      label: '22',
      value: 22
    },
    {
      label: '23',
      value: 23
    },
    {
      label: '24',
      value: 24
    },
    {
      label: '25',
      value: 25
    },
    {
      label: '26',
      value: 26
    },
    {
      label: '27',
      value: 27
    },
    {
      label: '28',
      value: 28
    },
    {
      label: '29',
      value: 29
    },
    {
      label: '30',
      value: 30
    }
  ];
  const unlockedLevel = 1;
  const boxes = Listbutton.map((item: any) => (
    <LockedBox key={item.value}  onClick={() => handleButtonClick(item.url)}>
      {item.value <= unlockedLevel ? (
        <NumberText>{item.label}</NumberText>
      ) : (
        <>
          <LockIcon icon={faLock} />
          <NumberText>{item.label}</NumberText>
        </>
      )}
    </LockedBox>
  ));
  return (
    <ThemeProvider theme={currentTheme}>
    <Navbar/>
    <GlobalStyle />
    <Wrappercon><TextStage/></Wrappercon>
    <Background>
      < HomePageContainer >
      {boxes}
      </HomePageContainer>
    </Background>

  </ThemeProvider>
  )
}

export default SelectGame;
