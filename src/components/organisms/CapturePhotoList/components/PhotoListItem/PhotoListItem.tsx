import React from 'react';
import {ColorValue, View} from 'react-native';
import {Text, Button} from '../../../..';
import {IPhotoListItem} from './PhotoListItem.types';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './PhotoListItem.styles';
import {Pallete} from '../../../../../theme';
import {PhotographState} from '../../../../../models';

const getIconByStatus = (photo: PhotographState): string => {
  if (photo.captured) {
    return 'check';
  }
  if (photo.required) {
    return 'warning';
  }
  return 'question';
};

const getColorByStatus = (photo: PhotographState): ColorValue => {
  if (photo.captured) {
    return Pallete.Success;
  }
  if (photo.required) {
    return Pallete.MidGray;
  }
  return Pallete.Gray;
};

const getIconColorByStatus = (photo: PhotographState): ColorValue => {
  if (photo.captured) {
    return Pallete.White;
  }
  if (photo.required) {
    return Pallete.Error;
  }

  return Pallete.Black;
};

const PhotoListItem: React.FC<IPhotoListItem> = ({
  photo,
  onCapture,
  onPreview,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.statusWrapper,
          {backgroundColor: getColorByStatus(photo)},
        ]}>
        <Icon
          name={getIconByStatus(photo)}
          size={15}
          color={getIconColorByStatus(photo)}
        />
        <Text>{photo.required}</Text>
      </View>
      <View style={styles.nameWrapper}>
        <Text>{`${photo.id}. ${photo.name}`}</Text>
      </View>
      <View style={styles.actionsWrapper}>
        <Button
          type="Primary"
          style={styles.actionButton}
          onPress={() => onCapture(photo)}>
          <Icon name="camerao" size={30} />
        </Button>
        {photo.captured && (
          <Button
            type="Secondary"
            style={styles.actionButton}
            onPress={() => onPreview(photo)}>
            <Icon name="eyeo" size={30} />
          </Button>
        )}
      </View>
    </View>
  );
};

export default PhotoListItem;
