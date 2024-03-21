import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProgressBarContainer = styled.div`
  width: 814px;
  height: 40px;
  border-radius: 50px;
  background-color: #eee;
  margin-top: 25px;
  margin-bottom: 10px;
  border: 2px solid white;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 50px;
  background-color: ${(props) => props.theme.SelectboxsColor};
  width: 814px;
  text-align: center;
  transition: width 0.5s ease; 
`;

const Loadingbar = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 10;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setTimeout(() => {
            navigate('/Homegame');
          }, 2000); 
        }
        setProgress(currentProgress);
      }, 500);

      return () => clearInterval(interval);
    };

    simulateLoading();
  }, []); 

  return (
    <div>
      <ProgressBarContainer>
        <ProgressBarFill style={{ width: `${progress}%` }} />
      </ProgressBarContainer>
    </div>
  );
};

export default Loadingbar;
