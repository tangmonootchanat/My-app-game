import React, { useState, useEffect } from 'react';
import styled, { css ,ThemeProvider, createGlobalStyle } from 'styled-components';
import CardImage from './CardImage';
import { lightTheme } from '../../../styles/theme';
import Img1 from '../PageGames/Images/Img1.png';
import Img2 from '../PageGames/Images/Img2.png';
import Img3 from '../PageGames/Images/Img3.png';
import Img4 from '../PageGames/Images/Img4.png';
import Frame97 from '../PageGames/Images/Frame 97.png';
import Navbar from '../../component/navbar/Navbar';
import Badge from '@mui/material/Badge';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

interface LabelInterface {
  isBold?:boolean;
};

interface CardProps {
  isFlipped: boolean;
  // image: string; // เพิ่ม prop image ใน CardProps
};

const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin: 0;
}
`;
const ContainerWrapper = styled.body`
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto); /* Two rows */
  gap: 50px;
  padding: 20px;
  margin: 5px;
  perspective: 100px;
  width: calc(100% - 60px);
  place-items: center;
`;;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Card = styled.div<CardProps>`
  width: 29vw;
  height: 30vw;
  max-width: 200px;
  max-height: 200px;
  background-color: ${(props) => (props.isFlipped ? props.theme.cardColor : props.theme.imageCard)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 5px solid #fff;

  &:hover {
    background-color:${(props) => (props.isFlipped ? props.theme.imageCard : props.theme.cardColor)};
  }

  img {
    max-width: 100%;
    max-height: 100%;
  
  }
`;

const CardText = styled.div`
  display: grid;
  margin: 30px;
`;

const Label = styled.label<LabelInterface>`
  color :#FFFFFF ;
  stroke-opacity: 623AA2 ;
  display: block;
  text-align: start;  
  font-size: 10px;
  ${props => props.isBold && css`
    font-family: "Luckiest Guy", cursive;
    -webkit-text-stroke: 5px${(props) => props.theme.shadowColor};;
    font-style: normal;
    font-size: 60px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: -10px;

  `}
`;

const GamePage: React.FC = () => {
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);
  const [cardImages, setCardImages] = useState([
      { id: 1, image: Img1 },
      { id: 2, image: Img2 },
      { id: 3, image: Img3 },
      { id: 4, image: Img1 },
      { id: 5, image: Img2 },
      { id: 6, image: Img3 },
  ]);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isGameWin, setIsGameWin] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1 * 10);
  const navigate = useNavigate();

  const startGame = () => {
    setIsGameStarted(true);
    setMatchedCards([]);
    closeAllCards(); // Close all cards
  };

const shuffle = (array: { id: number, image: string }[]) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
};

const closeAllCards = () => {
  setOpenedCards([]);
};
  
useEffect(() => {
  if (isGameWin && timeLeft > 0) {
    alert("You win!");
    navigate('/Homegame');
    startGame(); // Start a new game
  }
}, [isGameWin, timeLeft]);

useEffect(() => {
  if (matchedCards.length === cardImages.length / 6) {
    setIsGameWin(true);
  }
}, [matchedCards]);

const handleCardClick = (id: number) => {
  if (matchedCards.includes(id) || openedCards.length === 6) {
      return;
  }
  
  if (!openedCards.includes(id)) {
      setOpenedCards([...openedCards, id]);
  }

  if (openedCards.length % 2 === 0) {
    const [firstCardId, secondCardId] = openedCards.slice(-2);
    const firstCardImage = cardImages.find(card => card.id === firstCardId)?.image;
    const secondCardImage = cardImages.find(card => card.id === secondCardId)?.image;

    if (firstCardImage === secondCardImage) {
      setMatchedCards([...matchedCards, firstCardId, secondCardId]);
      // Check if all cards are matched
      if (matchedCards.length + 2 === cardImages.length) {
        setIsGameWin(true);
      }
    } else {
        setTimeout(() => {
            setOpenedCards([]);
        }, 1000); // ปิดการ์ดทั้งสองที่ไม่ตรงกันหลังจาก 1 วินาที
    }
} else {
    const [firstCardId] = openedCards.slice(-1);
    const firstCardImage = cardImages.find(card => card.id === firstCardId)?.image;
    const currentCardImage = cardImages.find(card => card.id === id)?.image;

    if (firstCardImage === currentCardImage) {
        setMatchedCards([...matchedCards, firstCardId, id]);
        if (matchedCards.length + 1 === cardImages.length) {
          setIsGameWin(true);
        }
    } else {
        setTimeout(() => {
            setOpenedCards([]);
        }, 1000); // ปิดการ์ดทั้งสองที่ไม่ตรงกันหลังจาก 1 วินาที
    }
  }
};

  const isCardOpened = (id: number) => {
      return openedCards.includes(id);
  };

  const isCardMatched = (id: number) => {
      return matchedCards.includes(id);
  };


  return (
    <ThemeProvider theme={currentTheme}>
          <Navbar />
      <GlobalStyle />
<ContainerWrapper>
          <CardText>
              <Label isBold>STAGE 1</Label>
          </CardText>
          <CardContainer>
          <CardRow>
            {cardImages.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                isFlipped={isCardOpened(card.id) || isCardMatched(card.id)}
              >
                {isCardOpened(card.id) || isCardMatched(card.id) ? (
                  <img src={card.image} alt={`Card ${card.id}`} />
                ) : null}
              </Card>
              ))}
            </CardRow>
            <CardRow>
              {cardImages.slice(3, 6).map((card) => (
                <Card
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  isFlipped={isCardOpened(card.id) || isCardMatched(card.id)}
                >
                  {isCardOpened(card.id) || isCardMatched(card.id) ? (
                    <img src={card.image} alt={`Card ${card.id}`} />
                  ) : null}
                </Card>
              ))}
            </CardRow>
          </CardContainer>
          {!isGameStarted && (
              <div style={{ display: 'grid', placeItems: 'end', marginRight: '20px' }}>
                  <IconButton
                      size="large"
                      aria-label="show 1 new help"
                      color="inherit"
                      aria-controls="menuId"
                      onClick={startGame}
                  >
                      <Badge badgeContent={1} overlap="circular" color="success">
                          <img
                              src={Frame97}
                              alt=""
                              style={{ width: 50, height: 50, fontSize: 16 }}
                          />
                      </Badge>
                  </IconButton>
              </div>
          )}
      </ContainerWrapper>
    </ThemeProvider>
      
  );
};

export default GamePage;
