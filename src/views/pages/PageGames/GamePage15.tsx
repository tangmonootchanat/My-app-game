import React, { useState, useEffect } from 'react';
import styled, { css ,ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import Img1 from '../PageGames/Images/Img1.png';
import Img2 from '../PageGames/Images/Img2.png';
import Img3 from '../PageGames/Images/Img3.png';
import Img4 from '../PageGames/Images/Img4.png';
import Img5 from '../PageGames/Images/Img5.png'
import Img6 from '../PageGames/Images/Img6.png'
import Img7 from '../PageGames/Images/Img7.png'
import Frame97 from '../PageGames/Images/Frame 97.png';
import Navbar from '../../component/navbar/Navbar';
import { IconButton, Badge  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ModalWin from '../../component/alert/ModalWin';
import ModalGameOver from '../../component/alert/ModalGameOver';
import BuyHelpButtonComponent from '../../component/BuyHelpPopup';
import useCountdown from '../../component/UseCountdown';



interface LabelInterface {
  isBold?:boolean;
};


interface CardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};


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
  grid-template-rows: repeat(3, auto); /* Two rows */
  gap: 50px;
  padding: 20px;
  margin: 5px;
  perspective: 100px;
  width: calc(100% - 60px);
  place-items: center;
`;


const CardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;


const Card = styled.div<CardProps>`
  width: 29vw;
  height: 30vw;
  max-width: 160px;
  max-height: 160px;
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

//ส่วนของการซื้อตัวช่วย
const StyledBuyHelpButton = styled(IconButton)`
&& {
  background-color: ${(props) => props.theme.buttonClock};
  border-color: ${(props) => props.theme.buttonClock};
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.buttonClock};
    border-color: ${(props) => props.theme.buttonClock};
    opacity: 0.8;
  }
}
`;

const BuyHelpPopup = styled.div`
width: 300px;
height: 200px;
position: absolute;
left: 50%;
top: 50%;
margin-left: -150px;
background-color: white;
border-radius: 20px;
border: 3px solid black;
transform: translateY(-50%);
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const BuyHelpButton = styled.button`
background-color: green;
color: white;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
`;


const GamePage: React.FC = () => {
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [cardImages, setCardImages] = useState<CardProps[]>([
    { id: 1, image: Img1, isFlipped: false, isMatched: false },
    { id: 2, image: Img2, isFlipped: false, isMatched: false },
    { id: 3, image: Img3, isFlipped: false, isMatched: false },
    { id: 4, image: Img4, isFlipped: false, isMatched: false },
    { id: 5, image: Img5, isFlipped: false, isMatched: false },
    { id: 6, image: Img6, isFlipped: false, isMatched: false },
    { id: 7, image: Img7, isFlipped: false, isMatched: false },
  ]);

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isOpeningAllCards, setIsOpeningAllCards] = useState(false);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isGameWin, setIsGameWin] = useState(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [randomImage, setRandomImage] = useState(0);
  const timeLeft = useCountdown(1 * 60, isGameWin);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const handleBuyHelpClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };
  

  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);


  // เรียกใช้ `openAllCards` เมื่อ `isOpeningAllCards` เป็น `true`
  useEffect(() => {
    if (isOpeningAllCards) {
      openAllCards();
      setTimeout(() => {
        closeAllCards();
        setIsOpeningAllCards(false);
      }, 3000); // เปิดการ์ดเป็นเวลา 3 วินาที
    }
  }, [isOpeningAllCards]);


const startGame = () => {
  setIsGameStarted(true);
  setMatchedCards([]);
  setIsOpeningAllCards(true); // Start opening all cards
};
useEffect(() => {
  const currentTime = new Date();
  const millisecondsUntilCountdown = (1000 - currentTime.getMilliseconds() + 8000) % 1000; // คำนวณเวลาที่เหลือจนถึง 6 วินาที
  setTimeout(() => {
    closeAllCards(); // ปิดการ์ดทั้งหมด
    setIsGameStarted(true); // เริ่มเกม
  }, millisecondsUntilCountdown); // เปิดการ์ดเป็นเวลา 6 วินาที
}, []);




  useEffect(() => {
    if (!isGameStarted && !isOpeningAllCards && !isGameOver) {
      setIsOpeningAllCards(true); // Start opening all cards
      setTimeout(() => {
        setIsOpeningAllCards(false); // Stop opening all cards
      }, 60000); // เปิดการ์ดเป็นเวลา 1 นาที (60 วินาที)
    }
  }, [isGameStarted, isOpeningAllCards, isGameOver]);
  
  const getRandomImage = () => {
    const availableImages = 
    [
      Img1, Img2, Img3, Img4, Img5, Img6, Img7,
      Img1, Img2, Img3, Img4, Img5, Img6, Img7
    ];
    const usedIndexes = cardImages.map((card) => availableImages.indexOf(card.image));
  
    const pairs = [];
    for (let i = 0; i < availableImages.length; i++) {
      pairs.push([i, i]);
    }
  
    const shuffleArray = (array: any[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
  
    const shuffledPairs = shuffleArray(pairs);
  
    const newCardImages: CardProps[] = shuffledPairs.map(([index1, index2]) => {
      const imageIndex = usedIndexes.includes(index1) ? index2 : index1; // Get the unused index
      const newImage = availableImages[imageIndex];
      return {
        id: imageIndex, 
        image: newImage, 
        isFlipped: false,
        isMatched: false,
      };
    });
    
  
    setCardImages(newCardImages);
  };
  
  
  useEffect(() => {
    getRandomImage();
  }, []);
  

  const openAllCards = () => {
    setOpenedCards(cardImages.map((card) => card.id));
    setTimeout(() => {
      closeAllCards();
    }, 1000); // 10 seconds
  };


  const closeAllCards = () => {
    setOpenedCards([]);
  };


  const handleCardClick = (id: number) => {
    if (matchedCards.includes(id) || openedCards.length === 14) {
      return;
    }
    
    if (!openedCards.includes(id)) {
      setOpenedCards([...openedCards, id]);
    }
  
    if (openedCards.length % 2 === 1) {
      const [firstCardId] = openedCards.slice(-1);
      const firstCardImage = cardImages.find(card => card.id === firstCardId)?.image;
      const currentCardImage = cardImages.find(card => card.id === id)?.image;
  
      if (firstCardImage === currentCardImage) {
        setMatchedCards([...matchedCards, firstCardId, id]);
        if (matchedCards.length + 2 === cardImages.length) {
          setIsGameWin(true);
        }
      } else {
        setTimeout(() => {
          setOpenedCards([]);
        }, 1000);
      }
    }
  };
  
  
//  check for game win
useEffect(() => {
  if (matchedCards.length === cardImages.length) {
    setIsGameWin(true);
  }
}, [matchedCards, cardImages]);

// check for game timeout
useEffect(() => {
  console.log("Time left:", timeLeft); // Log the value of timeLeft
  console.log("isGameOver:", isGameOver); // Log the value of isGameOver
  if (timeLeft === 0 ) {
    console.log("Timeout occurred!"); // Log that timeout occurred
    setIsGameOver(true);
  }
}, [timeLeft, isGameOver]);



  const isCardOpened = (id: number) => {
    return openedCards.includes(id);
};


const isCardMatched = (id: number) => {
    return matchedCards.includes(id);
};
const [empCoin, setEmpCoin] = useState<number>(0);
const [empLevel, setEmpLevel] = useState<number>(0);
const [empUsername, setEmpUsername] = useState(null);
const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
const [totalCoin, setTotalCoin] = useState<number>(0);
const [deductedCoin, setDeductedCoin] = useState<number>(0);
const [helpBought, setHelpBought] = useState(false); // Declare helpBought state variable


useEffect(() => {
  const userId = '1';
  fetch(`http://localhost:8000/User/${userId}`)
    .then(response => response.json())
    .then(data => {
      setEmpCoin(data.Coin);
      setEmpUsername(data.Username);
      setDeductedCoin(data.DeductedCoin)
      setEmpLevel(data.Level);
      setTotalCoin(data.Coin); 
      console.log(data);
    })
    .catch(error => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
    });
}, []);

const returnDeductedCoins = () => {
  const newCoinValue = empCoin + (deductedCoin * 2);
  setEmpCoin(newCoinValue);
  setDeductedCoin(0); // Reset deducted coin to 0
  const newLevel = empLevel + 1; // Increase level by 1
  setEmpLevel(newLevel); // Update local state of level

  const userId = '1';
  fetch(`http://localhost:8000/User/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Coin: newCoinValue, Level: newLevel, Username: empUsername, DeductedCoin: selectedCoin }), 
  })
  .then(response => response.json())
  .then(data => {
    console.log('ค่าเหรียญถูกอัพเดตเป็น:', newCoinValue);
    console.log('เลเวลถูกอัพเดตเป็น:', newLevel); // Log the updated level
  })
  .catch(error => {
    console.error('เกิดข้อผิดพลาดในการอัพเดตค่าเหรียญ:', error);
  });
};

useEffect(() => {
  if (isGameWin) {
    returnDeductedCoins();
  }
}, [isGameWin]);

useEffect(() => {
  if (isGameOver) {
    setDeductedCoin(0);
  }
}, [isGameOver]);



  return (
    <ThemeProvider theme={currentTheme}>
      <Navbar />
      <GlobalStyle />
      <ContainerWrapper>
          <CardText>
              <Label isBold>STAGE 15</Label>
          </CardText>
          <CardContainer>
            <CardRow>
              {cardImages.slice(0, 6).map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  isFlipped={isCardOpened(card.id) || isCardMatched(card.id)}
                  isMatched={isCardMatched(card.id)}
                  onClick={() => handleCardClick(card.id)}
                >
                  {isCardOpened(card.id) || isCardMatched(card.id) ? (
                          <img src={card.image} alt={`Card ${card.id}`} />
                      ) : null}
                </Card>
              ))}
            </CardRow>
            <CardRow>
              {cardImages.slice(6, 12).map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    isFlipped={isCardOpened(card.id) || isCardMatched(card.id)}
                    isMatched={isCardMatched(card.id)}
                    onClick={() => handleCardClick(card.id)}
                  >
                  {isCardOpened(card.id) || isCardMatched(card.id) ? (
                          <img src={card.image} alt={`Card ${card.id}`} />
                      ) : null}
                </Card>
              ))}
            </CardRow>
            <CardRow>
              {cardImages.slice(12, 14).map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    isFlipped={isCardOpened(card.id) || isCardMatched(card.id)}
                    isMatched={isCardMatched(card.id)}
                    onClick={() => handleCardClick(card.id)}
                  >
                  {isCardOpened(card.id) || isCardMatched(card.id) ? (
                          <img src={card.image} alt={`Card ${card.id}`} />
                      ) : null}
                </Card>
              ))}
            </CardRow>
          </CardContainer>
        {isOpeningAllCards && !isGameStarted && !isGameOver && !isOpen && (
            <div style={{ display: 'none' }}>
              {cardImages.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  isFlipped={true}
                  isMatched={isCardMatched(card.id)}
                  onClick={() => handleCardClick(card.id)}
                >
                  <img src={card.image} alt={`Card ${card.id}`} />
                </Card>
              ))}
            </div>
          )}
          <BuyHelpButtonComponent onClose={() => {}} onBuyHelp={openAllCards} />
        {helpBought && <div>ตัวช่วยถูกซื้อแล้ว</div>}
      </ContainerWrapper>
      {isGameWin && <ModalWin />}
    {isGameOver && <ModalGameOver />}
    {empCoin < selectedCoin! && <BuyHelpPopup />}
    </ThemeProvider>
  );
};

export default GamePage;