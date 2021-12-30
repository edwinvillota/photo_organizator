import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './LoadingView.styles';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} />
    </View>
  );
};

export default LoadingView;
