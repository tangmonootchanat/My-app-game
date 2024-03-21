import React, { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import backgroundImage from "../../component/Images/DARK.png";
import CardImage from "./CardImage";
import Img1 from "../../component/Images/Img1.png";
import Img2 from "../../component/Images/Img2.png";
import Img3 from "../../component/Images/Img3.png";
import Frame97 from "../../component/Images/Frame 97.png";
import NavBra from "../../component/NavBra";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ModalWin from "../../component/ModalWin";
import ModalGameOver from "../../component/ModalGameOver";
import CountdownTimer from "../../component/CountdownTimer";
import useCountdowntime from "../../component/UseCountdown";

interface LabelInterface {
  isBold?: boolean;
}

interface CardProps {
  isFlipped: boolean;
  // image: string; // เพิ่ม prop image ใน CardProps
}

const ContainerWrapper = styled.body`
  background-image: url(${backgroundImage});
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
  background-color: ${(props) => (props.isFlipped ? "#E2B0FF" : "#623AA2")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 5px solid #fff;

  &:hover {
    background-color: ${(props) => (props.isFlipped ? "#623AA2" : "#E2B0FF")};
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
  color: #ffffff;
  stroke-opacity: 623AA2;
  display: block;
  text-align: start;
  font-size: 10px;
  ${(props) =>
    props.isBold &&
    css`
      font-family: "Luckiest Guy", cursive;
      -webkit-text-stroke: 5px #623aa2;
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
  const timeLeft = useCountdowntime(3 * 60);

  const closeAllOpenedCards = () => setOpenedCards([]);
  const handleCardClick = (id: number) => {
    if (matchedCards.includes(id) || openedCards.length === 2) return;
    if (!openedCards.includes(id)) {
      setOpenedCards([...openedCards, id]);
    }
  
    if (openedCards.length === 1) {
      const [firstCardId] = openedCards;
      const firstCardImage = cardImages.find((card) => card.id === firstCardId)?.image;
      const secondCardImage = cardImages.find((card) => card.id === id)?.image;
  
      if (firstCardImage && firstCardImage === secondCardImage) {
        setMatchedCards([...matchedCards, firstCardId, id]);
        setOpenedCards([]);
      } else {
        setTimeout(() => {
          setOpenedCards(openedCards.filter((cardId) => cardId !== firstCardId && cardId !== id));
        }, 1000);
      }
    }
  };
  const isCardOpened = (id: number) => openedCards.includes(id);
  const isCardMatched = (id: number) => matchedCards.includes(id);
  const hasWon = matchedCards.length === cardImages.length;
  const isGameOver = timeLeft === 0;

  return (
    <ContainerWrapper>
      <NavBra />
      <CardText>
        <Label isBold>STAGE 1</Label>
      </CardText>
      <CardContainer>
        {cardImages.map((card) => (
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
      <div style={{ display: "grid", placeItems: "end", marginRight: "20px" }}>
        <IconButton
          size="large"
          aria-label="show 1 new help"
          color="inherit"
          aria-controls="menuId"
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
      {hasWon && <ModalWin onClose={closeAllOpenedCards} />}
      {isGameOver && !hasWon && (
        <ModalGameOver
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </ContainerWrapper>
  );
};

export default GamePage;
