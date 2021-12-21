import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../..';
import {IPhotoListItem} from './PhotoListItem.types';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './PhotoListItem.styles';
import {Pallete} from '../../../../../theme';

const PhotoListItem: React.FC<IPhotoListItem> = ({
  photo,
  onCapture,
  onPreview,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusWrapper}>
        <Icon name="checkcircleo" size={15} color={Pallete.White} />
        <Text>{photo.required}</Text>
      </View>
      <View style={styles.nameWrapper}>
        <Text>{`${photo.id}. ${photo.name}`}</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <Button type="Primary" style={styles.actionButton} onPress={onCapture}>
          <Icon name="camerao" size={30} />
        </Button>
        <Button
          type="Secondary"
          style={styles.actionButton}
          onPress={onPreview}>
          <Icon name="eyeo" size={30} />
        </Button>
      </View>
    </View>
  );
};

export default PhotoListItem;
