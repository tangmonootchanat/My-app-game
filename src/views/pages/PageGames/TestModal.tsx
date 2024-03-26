import React, { useState } from 'react';
import ModalWin from '../../component/alert/ModalWin';
import ModalGameOver from '../../component/alert/ModalGameOver';

const TestModal: React.FC = () => {
  const [isPopupWinOpen, setIsPopupWinOpen] = useState(false);
  const [isPopupGameOverOpen, setIsPopupGameOverOpen] = useState(false);

  const handleOpenPopupWin = () => {
    setIsPopupWinOpen(true);
  };

  const handleOpenPopupGameOver = () => {
    setIsPopupGameOverOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupWinOpen(false);
    setIsPopupGameOverOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopupWin}>Open Win Popup</button>
      <button onClick={handleOpenPopupGameOver}>Open Game Over Popup</button>
      {isPopupWinOpen && <ModalWin onClose={handleClosePopup} />}
      {isPopupGameOverOpen && <ModalGameOver onClose={handleClosePopup} />}
      
    </div>
  );
};

export default TestModal;
