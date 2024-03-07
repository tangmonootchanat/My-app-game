import Buttonlight from'../image/ButtonY.png';
import Buttondark from'../image/ButtonP.png';

export interface Theme {
  background : string ;
  text: string;
  buttonBackground : string;
}

export const lightTheme: Theme = {
  background: '#ffb11a',
  text: '#ffffff',
  buttonBackground: `url(${Buttonlight})`
};

export const darkTheme: Theme = {
  background: '#965CD0',
  text: '#ffffff',
  buttonBackground: `url(${Buttondark})`
};
