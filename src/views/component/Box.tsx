import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ccc; 
  border: 2px solid #fff;
`;

const SmallBox = () => {
  return <Box />;
};

export default SmallBox;
