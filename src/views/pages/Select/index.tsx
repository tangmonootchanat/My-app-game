import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { lightTheme } from '../../../styles/theme';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
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
const UnLockIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(30deg); 
  color: #3CD500; 
`;
const Popup = styled.div`
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
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
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

const SelectText = styled.p`
  display: flex;
  justify-content:center;
  align-items:center;
  color: #A6813A;
  font-weight:bold;
  
`;
const WrapperCoin = styled.button`
 display:flex;
 align-items:center;
 background:none;
 border:none;

`;
interface CoinProps {
  selected: boolean;
}
const Coin = styled.button<CoinProps>`
  margin: 0 18px;
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

function SelectGame() {
  
  const selectedTheme = 'selectedThemes';
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [empCoin, setEmpCoin] = useState<number[]>([]);
  const [empLevel, setEmpLevel] = useState(null);
  const [empUsername, setEmpUsername] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);
  const [totalCoin, setTotalCoin] = useState<number>(0);
  const [deductedCoin, setDeductedCoin] = useState<number>(0);
 console.log(deductedCoin)
  
  const handleButtonClick = (url: string) => {
    setSelectedLevel(parseInt(url, 10));
    setShowPopup(true);
  };
  
  const handleConfirm = () => {
    setShowPopup(false);
    if (selectedCoin !== null && selectedCoin !== undefined) {
      const newCoinValue = totalCoin - selectedCoin;
      setTotalCoin(newCoinValue);
      setDeductedCoin(selectedCoin);
      
      const userId = '1';
      fetch(`http://localhost:8000/User/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Coin: newCoinValue, Level: selectedLevel, Username: empUsername, DeductedCoin: selectedCoin }), 
})
        .then(response => response.json())
        .then(data => {
          console.log('ค่าเหรียญถูกอัพเดตเป็น:', newCoinValue);
        })
        .catch(error => {
          console.error('เกิดข้อผิดพลาดในการอัพเดตค่าเหรียญ:', error);
        });
    }navigate(`/GamePage/${selectedLevel}`);
  };
  
  const handleCancel = () => {
    setShowPopup(false);
  };


useEffect(() => {
    const storedTheme = localStorage.getItem(selectedTheme);
    if (storedTheme) {
      setCurrentTheme(JSON.parse(storedTheme));
    }
  }, []);
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
  
  const handleCoinSelect = (coinValue: number) => {
    setSelectedCoin(coinValue);
};

useEffect(() => {
  if (selectedCoin !== null && Array.isArray(empCoin)) {
      const updatedCoins = empCoin.filter((coin: number) => coin !== selectedCoin);
      setEmpCoin(updatedCoins);
  }
}, [selectedCoin, empCoin]);

console.log("empCoin after filter:", empCoin);
console.log("selectedCoin :", selectedCoin );
  const Listbutton: any = [
    {
      label: '1',
      value: 1,
     
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
  const unlockedLevel = parseInt(empLevel || "0", 10);

  const boxes = Listbutton.map((item: any) => (
    <LockedBox key={item.value} onClick={item.value <= unlockedLevel ? () => handleButtonClick(item.label) : undefined}>
      {item.value <= unlockedLevel ? (
        <>
        <UnLockIcon icon={faUnlockAlt} />
      <NumberText>{item.label}</NumberText>
        </>
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
      {showPopup && (
        <Popup>
         <CloseButton onClick={handleCancel}><FontAwesomeIcon icon={faXmark} /></CloseButton>
          <PopupText>Level {selectedLevel}</PopupText>
          <SelectText>Select Coin</SelectText>
          <WrapperCoin>
            {[1, 5, 10].map((coinValue) => (
              <Coin key={coinValue} selected={selectedCoin === coinValue} onClick={() => handleCoinSelect(coinValue)}>{coinValue}</Coin>
            ))}
          </WrapperCoin>
          <ButtonContainer>
            <Button disabled={selectedCoin === null || selectedCoin === undefined} onClick={() => {selectedCoin !== null && selectedCoin !== undefined ? handleConfirm() : setShowPopup(true);}}>Play</Button>
          </ButtonContainer>
        </Popup>
      )}
      </HomePageContainer>
    </Background>

  </ThemeProvider>
  )
}

export default SelectGame;
