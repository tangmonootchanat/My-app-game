import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import BearLose from '../../component/alert/image/BearLose.png';
import Coin from '../../component/alert/image/Coin.png';
import GameOver from '../../component/alert/image/GameOver.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface PopupProps {
  onClose?: () => void; 
}
const PopupCard = styled.div`
  width: 300px;
  height:400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  background-color:${(props) => props.theme.overGamein};
  color: ${(props) => props.theme.text};
  padding: 40px;
  transform: translateY(-50%);
  text-align: center;
  border-radius: 20px;
  border: 3px solid #fff; 
  
`;
const InPopupCard = styled.div`
  background-color:${(props) => props.theme.overGame};
  border-radius: 20px;
  height:300px;
  margin-top:10px;
  
  
  
`;
const ImgPopupCard = styled.img`
  background-color:${(props) => props.theme.overGame};
  border-radius: 20px;
  width: 150px;

  
  
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
`;
const Coinn = styled.div`
  width: 147px;
  height: 29px;
  margin-left:20px;
  margin-top:12px;
  background-color: ${(props) => props.theme.buttonClock};
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const C = styled.div`
  display: flex;
  justify-items : center;
  align-items:center;
  margin-left:60px;

  
`;
const Coins = styled.img`
 width:40px;
 height:auto;
 position: absolute;
 margin-top:12px;
`;
const IconButton = styled.button`
  display:flex;
  background-color: ${(props) => props.theme.buttonClock};
  justify-content:space-between;
  color: #fff;
  border: 3px solid ${(props) => props.theme.text}; 
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
const ButtonWrapper = styled.span`
display:flex;
justify-content:center;
margin-top:20px;
color:#fff;

`;
const RefreshWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function ModalGameOver({ onClose }: PopupProps) {
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);
  const handleRefreshScreen = () => {
    navigate('/Selectgame');
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <Overlay>
     <PopupCard>
      <img src={GameOver} />
     
      <InPopupCard>
      <ImgPopupCard src={BearLose} />
      <C>
      <Coins src={Coin}/>
      <Coinn>100</Coinn>
      </C>
      < ButtonWrapper>
            <IconButton onClick={handleRefreshScreen}>
            <RefreshWrapper>
                <FontAwesomeIcon icon={faHome} />
              </RefreshWrapper>
            </IconButton>
      </ButtonWrapper>
      
      </InPopupCard>
    
     </PopupCard>
    
   </Overlay>
    </ThemeProvider>
   
  )
}

export default ModalGameOver