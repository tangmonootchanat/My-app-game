import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Frame100 from '../../component/navbar/images/Frame 100.png';
import Frame101 from '../../component/navbar/images/Frame 101.png';
import Frame102 from '../../component/navbar/images/Frame 102.png';
import Frame75 from '../../component/navbar/images/Frame 75.png';
import Frame82 from '../../component/navbar/images/Frame 82.png'
import { FaArrowLeft } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  
`;
const NavbarSetting = styled.div`
  color: #fff;
  flex-direction: column;
`;
const Setting = styled.img`
  width: 40px; 
  height: auto; 
  cursor: pointer;
  margin-bottom:4px;
`;
const SettingS = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
  display: flex;
  color: #fff;
  flex-direction: column;
`;
const BackButton = styled.button`
  background-color:${(props) => props.theme.buttonBack};
  color: #fff; 
  border: none; 
  border-radius: 10px;
  width: 40px; 
  height: 40px; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  cursor: pointer;

  &:hover {
    background-color: #fff; 
    color:#000;
  }
`;
const BackIcon = styled(FaArrowLeft)`
  font-size: 20px; 
`;
const ClockW = styled.img`
  width: 40px; 
  height: auto; 
  position: absolute;
`;
const C = styled.div`
  display: flex;
  justify-content: space-between;
  gap:20px;
`;
const Clocks = styled.div`
  width: 147px;
  height: 39px;
  margin-left:20px;
  margin-top:5px;
  background-color: ${(props) => props.theme.buttonClock};
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Coin = styled.div`
  width: 147px;
  height: 39px;
  margin-left:20px;
  margin-top:5px;
  background-color: ${(props) => props.theme.buttonClock};
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  font-style: oblique;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Coins = styled.img`
 width: 50px; 
  height: auto; 
  position: absolute; 
 
`;

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); // Initial state is false, dropdown is hidden
  const navigate = useNavigate();
  const [isFrame100, setIsFrame100] = useState(true);

  const handleClick = () => {
    setIsFrame100(!isFrame100);
   };
  const handleBack = () => {
    navigate(-1); 
   };
  return (
    <NavbarContainer>
    {window.location.pathname === '/Selectgame' && (
        <BackButton onClick={handleBack}>
          <BackIcon />
        </BackButton>
    )}
    {window.location.pathname === '/GamePage ' && (
        <>
         <ClockW src={Frame75}/>
         <Clocks><CountdownTimer /></Clocks>               
         {/* /GamePage */}
         </>
    )}
    <div></div> 
     <C>
      <Coins src={Frame82}/>
      <Coin> 100</Coin>
      <NavbarSetting>
        <Setting src={Frame102} onClick={() => setShowDropdown(!showDropdown)} />
       {showDropdown && <SettingS src={isFrame100 ? Frame100 : Frame101} onClick={handleClick} />}
      </NavbarSetting>
     </C>
    </NavbarContainer>
  );
}
export default Navbar;
