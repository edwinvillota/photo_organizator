import {TextInputProps} from 'react-native';

export interface IActivityInputProps
  extends Omit<TextInputProps, 'keyboardType'> {
  label: string;
}
