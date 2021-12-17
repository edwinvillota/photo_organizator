import React from 'react';
import {IButtonProps} from './Button.types';
import {Text, TouchableOpacity} from 'react-native';
import {Pallete} from '../../../theme';
import {styles} from './Button.styles';

const CustomButton: React.FC<IButtonProps> = ({
  type,
  style,
  children,
  disabled,
  ...props
}) => {
  const backgroundStyle = disabled
    ? {backgroundColor: Pallete.Gray}
    : {backgroundColor: Pallete[type]};

  const colorStyle = disabled
    ? {color: Pallete.MidGray}
    : {color: Pallete.White};

  return (
    <TouchableOpacity
      style={[style, styles.button, backgroundStyle]}
      disabled={disabled}
      {...props}>
      <Text style={[styles.text, colorStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
