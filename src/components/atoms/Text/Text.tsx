import React from 'react';
import {Text} from 'react-native';
import {IText} from './Text.types';
import {styles} from './Text.styles';

const CustomText: React.FC<IText> = ({
  children,
  style,
  type = 'Normal',
  ...props
}) => {
  return (
    <Text style={[styles.Text, styles[type], style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
