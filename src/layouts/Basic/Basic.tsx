import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './Basic.styles';

const BasicLayout: React.FC = ({children}) => {
  return <SafeAreaView style={styles.basicLayout}>{children}</SafeAreaView>;
};

export default BasicLayout;
