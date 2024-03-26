import React, { useState } from 'react';
import ModalWin from '../../component/alert/ModalWin';
import ModalGameOver from '../../component/alert/ModalGameOver';
import BuyHelpPopup from '../../component/BuyHelpPopup';

const TestModal: React.FC = () => {
  const [isPopupWinOpen, setIsPopupWinOpen] = useState(false);
  const [isPopupGameOverOpen, setIsPopupGameOverOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      <button onClick={handleOpenPopupWin}>Open Win Popup</button>
      <button onClick={handleOpenPopupGameOver}>Open Game Over Popup</button>
      <button onClick={handleOpenPopupHelper}>Open Helper Popup</button>
      {isPopupWinOpen && <ModalWin onClose={handleClosePopup} />}
      {isPopupGameOverOpen && <ModalGameOver onClose={handleClosePopup} />}
      {isOpen && <BuyHelpPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default TestModal;
