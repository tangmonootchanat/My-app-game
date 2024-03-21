import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import { Theme } from '../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import BearWin from '../component/Images/Tikker12.png';
import Winicon from '../component/Images/Winicon.png';
import HomeIcon from '../component/Images/Home.png';

interface PopupProps {
  onClose: () => void;
}

const PopupCard = styled.div<{ theme: Theme }>`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 40px;
  transform: translateY(-50%);
  text-align: center;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const IconButton = styled.button<{ theme: Theme }>`
  position: relative;
  border: 2px solid ${(props) => props.theme.text}; /* Use theme color for the border */
  cursor: pointer;
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 50%; /* Make it a circle */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const RefreshWrapper = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)<{ theme: Theme }>`
  background: url(${HomeIcon}) no-repeat center; // Use HomeIcon for navigation
  border: 2px solid white; /* Add white border */
  cursor: pointer;
  width: 60px;
  height: 60px;
  text-align: center;
  border-radius: 50%; /* Make it a circle */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  text-decoration: none; /* Remove underline from link */

  &:hover {
    opacity: 0.8;
  }
`;

function ModalWin({ onClose }: PopupProps) {
  const currentTheme: Theme = {
    background: '#ffb11a',
    text: '#000000',
    buttonBackground: '007bff'
  };

  const handleRefreshScreen = () => {
    window.location.reload(); // Refreshes the screen
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Overlay>
        <PopupCard theme={currentTheme}>
          <img src={Winicon} alt="winIcon" />
          <img src={BearWin} alt="Bear" />
          <ButtonContainer>
            <LinkButton to="/Homegame" theme={currentTheme} /> {/* Link to the other page */}
            <IconButton onClick={handleRefreshScreen} theme={currentTheme}>
              <RefreshWrapper>
                <FontAwesomeIcon icon={faSync} /> {/* Use the refresh icon */}
              </RefreshWrapper>
            </IconButton>
          </ButtonContainer>
        </PopupCard>
      </Overlay>
    </ThemeProvider>
  );
}

export default ModalWin;
