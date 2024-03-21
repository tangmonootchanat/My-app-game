import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CardImage from './CardImage';
import Img1 from '../PageGames/Images/Img1.png';
import Img2 from '../PageGames/Images/Img2.png';
import Img3 from '../PageGames/Images/Img3.png';
import Frame97 from '../PageGames/Images/Frame 97.png';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Navbar from '../../component/navbar/Navbar';
interface LabelInterface {
  isBold?:boolean;
};

interface CardProps {
  isFlipped: boolean;
 
};

const ContainerWrapper = styled.body`
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 83px;
  padding: 10px;
  margin: 5px;
  perspective: 100px;
  width: calc(100% - 60px);
  place-items: center;
`;

const Card = styled.div<CardProps>`
  width: 29vw;
  height: 30vw;
  max-width: 200px;
  max-height: 200px;
  background-color: ${props => (props.isFlipped ? '#E2B0FF' : '#623AA2')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 5px solid #fff;

  &:hover {
    background-color: ${props => (props.isFlipped ? '#623AA2' : '#E2B0FF')};
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
    -webkit-text-stroke: 5px #623AA2;
    font-style: normal;
    font-size: 60px;

    text-align: center;
    margin-top: 25px;
    margin-bottom: -10px;

  `}
`;

const cardImages = [
  { id: 1, image: Img1 },
  { id: 2, image: Img2 },
  { id: 3, image: Img3 },
  { id: 4, image: Img1 },
  { id: 5, image: Img2 },
  { id: 6, image: Img3 },
];

const GamePage: React.FC = () => {
    const [openedCards, setOpenedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);

    const closeAllOpenedCards = () => {
      setOpenedCards([]);
    };

    const handleCardClick = (id: number) => {
      if (matchedCards.includes(id) || openedCards.length === 6) {
        return;
      }
      
      if (!openedCards.includes(id)) {
        setOpenedCards([...openedCards, id]);
      }

      if (openedCards.length === 1) {
        const [firstCardId] = openedCards;
        if (
            cardImages.find(card => card.id === firstCardId)?.image === 
            cardImages.find(card => card.id === id)?.image
            ) {
                setMatchedCards([...matchedCards, firstCardId, id]);
        } else {
          setTimeout(() => {
            setOpenedCards(prevOpenedCards =>
              prevOpenedCards.filter(cardId => !matchedCards.includes(cardId))
            );
          }, 1000); // ปิดการ์ดที่ไม่ตรงกันหลังจาก 1 วินาที
        }
      }
      if (openedCards.length === 1) {
        const [firstCardId, secondCardId] = openedCards;
        const firstCardImage = cardImages.find(card => card.id === firstCardId)?.image;
        const secondCardImage = cardImages.find(card => card.id === secondCardId)?.image;
        
        if (firstCardImage === secondCardImage) {
          setMatchedCards([...matchedCards, firstCardId, secondCardId]);
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
    <ContainerWrapper>
      <Navbar />
      <CardText>
          <Label isBold>STAGE 1</Label>
      </CardText>
      <CardContainer>
        {cardImages.map(card => (
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
      </CardContainer>
      <div style={{ display: 'grid', placeItems: 'end', marginRight: '20px' }}>
        <IconButton
          size="large"
          aria-label="show 1 new help"
          color="inherit"
          aria-controls="menuId"
        >
          <Badge badgeContent={1}  overlap="circular" color="success">
            <img src={Frame97} alt="" style={{ width: 50, height: 50, fontSize: 16 }} />
          </Badge>
        </IconButton>
      </div>
    </ContainerWrapper>
  );
};

export default GamePage;
