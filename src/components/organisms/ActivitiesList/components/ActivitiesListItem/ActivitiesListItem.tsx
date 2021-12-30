import React from 'react';
import {View} from 'react-native';
import {IActivitiesListItem} from './ActivitiesListItem.types';
import {styles} from './ActivitiesListItem.styles';
import {KeyValue} from '../../../../atoms';

const ActivitiesListItem: React.FC<IActivitiesListItem> = ({activity}) => {
  return (
    <View style={styles.container}>
      <KeyValue prop="Código actividad:" value={activity.id} />
    </View>
  );
};

export default ActivitiesListItem;
