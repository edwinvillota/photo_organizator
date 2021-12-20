import React from 'react';
import {View} from 'react-native';
import {Text} from '../Text';
import {IKeyValue} from './KeyValue.types';
import {styles} from './KeyValue.styles';

const KeyValue: React.FC<IKeyValue> = ({prop, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.keyWrapper}>
        <Text type="Bold">{prop}</Text>
      </View>
      <View style={styles.valueWrapper}>
        <Text>{`${value}`}</Text>
      </View>
    </View>
  );
};

export default KeyValue;
