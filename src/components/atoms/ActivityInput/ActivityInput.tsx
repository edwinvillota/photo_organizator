import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {IActivityInputProps} from './ActivityInput.types';
import {styles} from './ActivityInput.styles';

const ActivityInput: React.FC<IActivityInputProps> = ({label, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} keyboardType="number-pad" />
    </View>
  );
};

export default ActivityInput;
