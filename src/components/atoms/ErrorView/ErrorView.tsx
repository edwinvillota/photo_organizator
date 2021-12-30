import React from 'react';
import {View} from 'react-native';
import {Text} from '..';
import {styles} from './ErrorView.styles';
import {IErrorView} from './ErrorView.types';

const ErrorView: React.FC<IErrorView> = ({error}) => {
  return (
    <View style={styles.container}>
      <Text type="Subtitle">{error}</Text>
    </View>
  );
};

export default ErrorView;
