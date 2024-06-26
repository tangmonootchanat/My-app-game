import React, { useState , useEffect, useRef } from 'react';
import ModalWin from '../../component/alert/ModalWin';
import ModalGameOver from '../../component/alert/ModalGameOver';
import BuyHelpPopup from '../../component/BuyHelpPopup';
import Img1 from '../PageGames/Images/Img1.png';
import Img2 from '../PageGames/Images/Img2.png';
import Img3 from '../PageGames/Images/Img3.png';
import Img4 from '../PageGames/Images/Img4.png';
import Img5 from '../PageGames/Images/Img5.png';
import Img6 from '../PageGames/Images/Img6.png';
import Img7 from '../PageGames/Images/Img7.png';
import Img8 from '../PageGames/Images/Img8.png';
import Img9 from '../PageGames/Images/Img9.png';
import Img10 from '../PageGames/Images/Img10.png';
import Img11 from '../PageGames/Images/Img11.png';
import Img12 from '../PageGames/Images/Img12.png';


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
    setIsOpeningAllCards(true);
    // setTimeout(() => {
    //   setIsOpeningAllCards(false);
    // }, 6000); // Close all cards after 6 seconds
  };
  
  // useEffect(() => {
  //   if (openedCards.length > 0) {
  //     const timeout = setTimeout(() => {
  //       closeAllCards();
  //     }, 5000);
  
  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [openedCards, isOpeningAllCards]);

  useEffect(() => {
    if (!isOpeningAllCards && !openedCards) {
      setIsOpeningAllCards(true);
      const timeout = setTimeout(() => {
        closeAllCards();
      }, 5000);
  
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpeningAllCards, openedCards]);
  
  
  
  const cardImages = [
    { id: 1, image: 'Img1' },
    { id: 2, image: 'Img2' },
    { id: 3, image: 'Img3' },
    { id: 4, image: 'Img4' },
    { id: 5, image: 'Img5' },
    { id: 6, image: 'Img6' },
    { id: 7, image: 'Img7' },
    { id: 8, image: 'Img8' },
    { id: 9, image: 'Img9' },
    { id: 10, image: 'Img10' },
    { id: 11, image: 'Img11' },
    { id: 12, image: 'Img12' },
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