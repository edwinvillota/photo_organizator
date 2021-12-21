import {ColorValue} from 'react-native';

export type PalleteType = {
  Primary: ColorValue;
  Secondary: ColorValue;
  Success: ColorValue;
  Error: ColorValue;
  Dark: ColorValue;
  Black: ColorValue;
  White: ColorValue;
  Gray: ColorValue;
  MidGray: ColorValue;
};

export const Pallete: PalleteType = {
  Primary: '#00adb5',
  Secondary: '#ff5722',
  Success: '#45eba5',
  Error: '#ff2e63',
  Dark: '#222831',
  Black: '#000000',
  White: '#ffffff',
  Gray: '#eeeeee',
  MidGray: '#393e46',
};
