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
  Primary: '#3d54d9',
  Secondary: '#f2e205',
  Success: '#59d961',
  Error: '#f2059f',
  Dark: '#222940',
  Black: '#000000',
  White: '#ffffff',
  Gray: '#cccccc',
  MidGray: '#666666',
};
