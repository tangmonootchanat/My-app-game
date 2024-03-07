import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
interface ProgressBarFillProps {
  progress: number;
}

const ProgressBarContainer = styled.div`
  width: 824px;
  height: 42px;
  background-color: #eee;
  margin-bottom: 10px;
`;

const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  background-color: #E2B0FF;
  width: ${({ progress }) => `${progress}%`};
  transition: width 1.5s ease; /* Add a smooth transition effect */
  .progress-text {
    position:relative;
    color: #000000; /* Set your desired text color */
  }
`;


const Loadingbar = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState<number>(0);

  const fetchDataFromUrl = async () => {
    try {
      const url = 'https://cors-anywhere.herokuapp.com/https://bluearchive.fandom.com/wiki/Blue_Archive_Wiki';
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`Error fetching data: ${response.status} ${response.statusText}`);
        setProgress(0);
        return;
      }

      // Check if response has a body
      if (response.body) {
        const contentLengthHeader = response.headers.get('content-length');

        // Check if the 'Content-Length' header is available
        if (contentLengthHeader) {
          const totalSize = parseInt(contentLengthHeader, 10);
          const reader = response.body.getReader();

          const processResult = async (result: ReadableStreamReadResult<Uint8Array>) => {
            if (result.done) {
              setProgress(100);
                
          setTimeout(() => {
            navigate('/GamePage'); // หน้าที่จะไปหลังโหลดเต็ม
          }, 2000);

          return;
        }

        const loaded = result.value.length;
        const percentage = (loaded / totalSize) * 100;

            setProgress(percentage);

            // Continue reading the response body
            const nextResult = await reader.read();
            processResult(nextResult);
          };

          // Start processing the response body
          const initialResult = await reader.read();
          processResult(initialResult);
        } else {
          console.warn('Content-Length header not available. Progress will be indeterminate.');
          setProgress(50);
        }
      } else {
        console.warn('Response body is null. Progress will be indeterminate.');
        setProgress(50);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setProgress(0);
    }
  };
  ;

  return (
    <div>
      <ProgressBarContainer>
      <ProgressBarFill progress={progress}>
          <div className="progress-text">{Math.round(progress)}%</div>
        </ProgressBarFill>
      </ProgressBarContainer>
      <div>
        <button onClick={fetchDataFromUrl}>Fetch Data</button>
      </div>
    </div>
  );
};

export default Loadingbar;
