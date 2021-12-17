import {TouchableOpacityProps} from 'react-native';

export enum ButtonTypesEnum {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Error = 'Error',
  Success = 'Success',
}

export interface IButtonProps extends TouchableOpacityProps {
  type: keyof typeof ButtonTypesEnum;
  disabled?: boolean;
}
