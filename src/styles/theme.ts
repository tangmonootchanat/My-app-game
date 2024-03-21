import Buttonlight from'../image/ButtonY.png';
import Buttondark from'../image/ButtonP.png';
import Selectlight from'../image/SelectY.png';
import Selectdark from'../image/SelectP.png';
import Clocklight from '../image/ClockY1.png';
import Clockdark from '../image/ClockP1.png';
export interface Theme {
  background : string ;
  text: string;
  buttonBackground : string;
  boxColor : string;
  buttonSelect : string ;
  boxsColor: string;
  SelectboxsColor: string;
  buttonBack: string;
  buttonClock: string;
}

export const lightTheme: Theme = {
  background: '#ffb11a',
  text: '#ffffff',
  buttonBackground: `url(${Buttonlight})`,
  boxColor : '#FAE185',
  buttonSelect :`url(${Selectlight})`,
  boxsColor:'#A6813A',
  SelectboxsColor:'#FACA15',
  buttonBack:'#D7AD6C',
  buttonClock:'#FAE185',
};

export const darkTheme: Theme = {
  background: '#965CD0',
  text: '#ffffff',
  buttonBackground: `url(${Buttondark})`,
  boxColor : '#E2B0FF',
  buttonSelect :`url(${Selectdark})`,
  boxsColor:'#9877AB',
  SelectboxsColor:'#623AA2',
  buttonBack:'#9470A8',
  buttonClock:'#E2B0FF',
};
