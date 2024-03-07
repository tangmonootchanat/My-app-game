import React from 'react';
import styled from 'styled-components';
import Loadingbar from '../../component/Loading';
import centerImage from '../../component/Images/Frame 108.png';
import backgroundImage from '../../component/Images/Slide13.png';


// Styled components for styling
const Container = styled.div`
  text-align: center;
  background-size: cover;
  background-image: url(${backgroundImage});
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredImage = styled.img`
  width: fit-content;
  height: fit-content;
  margin: auto;
`;

const Text = styled.div`
  color: white;
  font-size: 18px; 
  margin-top: 10px;
`;

function SamplePage() {
  return (
    <Container>
      <CenteredImage src={centerImage} alt="Centered Image" />
      <Text>Loading...</Text>
      <Loadingbar />
    </Container>
  );
}

export default SamplePage;



