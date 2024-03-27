import React, { useState , useEffect, useRef } from 'react';
import ModalWin from '../../component/alert/ModalWin';
import ModalGameOver from '../../component/alert/ModalGameOver';
import BuyHelpPopup from '../../component/BuyHelpPopup';
import Img1 from '../PageGames/Images/Img1.png';
import Img2 from '../PageGames/Images/Img2.png';
import Img3 from '../PageGames/Images/Img3.png';


const TestModal: React.FC = () => {
  const [isPopupWinOpen, setIsPopupWinOpen] = useState(false);
  const [isPopupGameOverOpen, setIsPopupGameOverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningAllCards, setIsOpeningAllCards] = useState(false);
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  const countdownRef = useRef<NodeJS.Timeout>();

  const handleOpenPopupWin = () => {
    setIsPopupWinOpen(true);
  };

  const handleOpenPopupGameOver = () => {
    setIsPopupGameOverOpen(true);
  };

  const handleOpenPopupHelper = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupWinOpen(false);
    setIsPopupGameOverOpen(false);
  };

  const handleBuyHelp = () => {
    setIsOpeningAllCards(false);
    setTimeout(() => {
      closeAllCards();
      setIsOpeningAllCards(false);
    }, 3000); 
  };
  


  useEffect(() => {
    if (isOpeningAllCards) {
      openAllCards();

      const timeout = setTimeout(() => {
        closeAllCards(); 
        setIsOpeningAllCards(false);
      }, 3000); 

      return () => clearTimeout(timeout);
    }
  }, [isOpeningAllCards]);


   
  
  const cardImages = [
    { id: 1, image: 'Img1' },
    { id: 2, image: 'Img2' },
    { id: 3, image: 'Img3' },
  ];
  
  const openAllCards = () => {
    setOpenedCards(cardImages.map((card) => card.id)); // เปิดการ์ดโดยใช้ ID จากข้อมูลการ์ด
  };

  const closeAllCards = () => {
    setOpenedCards([]);
  };
  
 
  
  return (
    <div>
      <button onClick={handleOpenPopupWin}>Open Win Popup</button>
      <button onClick={handleOpenPopupGameOver}>Open Game Over Popup</button>
      <button onClick={handleOpenPopupHelper}>Open Helper Popup</button>
      {isPopupWinOpen && <ModalWin onClose={handleClosePopup} />}
      {isPopupGameOverOpen && <ModalGameOver onClose={handleClosePopup} />}
      {isOpen && <BuyHelpPopup onClose={handleClosePopup} onBuyHelp={handleBuyHelp} />}
    </div>
  );
};

export default TestModal;