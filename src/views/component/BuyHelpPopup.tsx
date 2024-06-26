import React, { useState, useEffect } from 'react';
import styled, {  css ,ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import { Badge, IconButton } from '@mui/material';
import Frame97 from '../component/alert/image/Frame 97.png';
import Frame136 from '../component/alert/image/Frame 136.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


// interface PopupProps {
//   onClose?: () => void;
// }

interface BuyHelpButtonProps {
  onClose: () => void;
  onBuyHelp: () => void;
}

const BuyHelpButton = styled(IconButton)`
  /* && {
    background-color: ${(props) => props.theme.buttonClock};
    border-color: ${(props) => props.theme.buttonClock};
    font-weight: bold;
    &:hover {
      background-color: ${(props) => props.theme.buttonClock};
      border-color: ${(props) => props.theme.buttonClock};
      opacity: 0.8;
    }
  } */
`;

const PopupCard = styled.div`
  position: fixed;
  width:250px;
  height:auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.cardColor};
  border: 2px solid #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;


const Coinn = styled.div`
  width: 147px;
  height: 29px;
  margin-left: 20px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.buttonClock};
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: #065a0f;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
`;

const PopupText = styled.p`
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  height:35px;
  color: #ffffff;
  font-weight:bold;
  border: 2px solid #fff;
  background-color: ${(props) => props.theme.SelectboxsColor};
`;

const SelectText = styled.p`
  display: flex;
  justify-content:center;
  align-items:center;
  color: #A6813A;
  font-weight:bold;
  
`;

const WrapperCoin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
`;


interface CoinProps {
  selected: boolean;
}
const Coin = styled.button<CoinProps>`
  margin: 0 100px;
  margin-bottom: 20px;
  padding: 8px 16px;
  background-color: ${(props) => (props.selected ? props.theme.boxsColor : props.theme.SelectboxsColor)};
  border: 2px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.boxsColor};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  width: 120px;
  background-color: ${(props) => (props.disabled ? '#ccc' : props.theme.SelectboxsColor)};
  border: 2px solid #fff;
  color: #fff;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : props.theme.boxsColor)};
  }
`;


const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      margin: 0;
    }
  `;

  

const BuyHelpButtonComponent: React.FC<BuyHelpButtonProps> = ({ onClose, onBuyHelp }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [showPopup, setShowPopup] = useState(false);
  const selectedTheme = 'selectedThemes';
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [empCoin, setEmpCoin] = useState<number[]>([]);
  const [empLevel, setEmpLevel] = useState(null);
  const [empUsername, setEmpUsername] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const [totalCoin, setTotalCoin] = useState<number>(0);
  const [deductedCoin, setDeductedCoin] = useState<number>(0);
  const [helpBought, setHelpBought] = useState(false);
  const [imageSrc, setImageSrc] = useState(Frame97); 

 console.log(deductedCoin)

 const handleBuyHelpClick = () => {
  if (!helpBought && totalCoin >= 1) {
    setIsOpen(true);
    setShowPopup(true);
    setImageSrc(Frame136);
  }
}

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
    })
    .catch(error => {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
    });
}, []);
const handleConfirm = () => {
  setShowPopup(false);
  if (selectedCoin !== null && selectedCoin !== undefined) {
    if (totalCoin >= selectedCoin) {
      const newCoinValue = totalCoin - selectedCoin;
      setTotalCoin(newCoinValue);
      setDeductedCoin(selectedCoin);
      onBuyHelp();

      const userId = '1';
      fetch(`http://localhost:8000/User/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Coin: newCoinValue,
          Level: selectedLevel,
          Username: empUsername,
          DeductedCoin: selectedCoin,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('เหรียญคงเหลือเป็น:', newCoinValue);
          setHelpBought(true);
        })
        .catch((error) => {
          console.error('เกิดข้อผิดพลาดในการอัพเดตค่าเหรียญ:', error);
        });
    } else {
      console.log('จำนวนเหรียญไม่เพียงพอ');
    }
  }
};

  

  const handleCancel = () => {
    setShowPopup(false);
  };

  

  const handleCoinSelect = (coinValue: number) => {
    setSelectedCoin(coinValue);
  };

  useEffect(() => {
    if (selectedCoin !== null && Array.isArray(empCoin)) {
        const updatedCoins = empCoin.filter((coin: number) => coin !== selectedCoin);
        setEmpCoin(updatedCoins);
    }
  }, [selectedCoin, empCoin]);


  useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);

  

  return (
    <ThemeProvider theme={currentTheme}>
      {/* <GlobalStyle /> */}
 
        <div style={{ display: 'grid', placeItems: 'end', marginRight: '20px' }}>
          <BuyHelpButton
            size="large"

            color="inherit"
            aria-controls="menuId"
            onClick={handleBuyHelpClick}
          >
           
              <img src={helpBought ? Frame136 : Frame97} />
         

          </BuyHelpButton>
          {/* ตำแหน่งปุ่มสำหรับซื้อตัวช่วย */}

          {showPopup && (
            <PopupCard>
              <CloseButton onClick={handleCancel}><FontAwesomeIcon icon={faXmark} /></CloseButton>
              <PopupText>Level {selectedLevel}</PopupText>
              <SelectText>Buy Helper</SelectText>
              <WrapperCoin>
                {[1].map((coinValue) => (
                  <Coin key={coinValue} selected={selectedCoin === coinValue} onClick={() => handleCoinSelect(coinValue)}>{coinValue}</Coin>
                ))}
              </WrapperCoin>
              <ButtonContainer>
                  <Button disabled={selectedCoin === null || selectedCoin === undefined} onClick={() => { onBuyHelp(); handleConfirm(); }}>Buy Help</Button>
              </ButtonContainer>
            </PopupCard>
          )}
        </div>
     
    </ThemeProvider>
  );
};

export default BuyHelpButtonComponent;