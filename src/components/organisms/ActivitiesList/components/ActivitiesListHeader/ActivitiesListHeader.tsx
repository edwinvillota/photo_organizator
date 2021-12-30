import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../..';
import {IActivitiesListHeader} from './ActivitiesListHeader.types';
import {styles} from './ActivitiesListHeader.styles';

const ActivitiesListHeader: React.FC<IActivitiesListHeader> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text type="Subtitle" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default ActivitiesListHeader;
