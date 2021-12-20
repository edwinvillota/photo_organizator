import React from 'react';
import {View} from 'react-native';
import {IPhotoList, IPhoto} from './PhotoList.types';
import {Text} from '../../../../atoms';
import {photoItemStyles, photoListStyles} from './PhotoList.styles';

const PhotoItem: React.FC<IPhoto> = ({photo}) => {
  return (
    <View style={photoItemStyles.container}>
      <View style={photoItemStyles.idWrapper}>
        <Text>{photo.id}</Text>
      </View>
      <View style={photoItemStyles.nameWrapper}>
        <Text>{photo.name}</Text>
      </View>
      <View style={photoItemStyles.requiredWrapper}>
        <Text>{photo.required ? '✓' : '✗'}</Text>
      </View>
    </View>
  );
};

const PhotoList: React.FC<IPhotoList> = ({photographs}) => {
  return (
    <View>
      <Text type="Subtitle">Fotográfias</Text>
      <View style={photoListStyles.listWrapper}>
        <View style={photoListStyles.headerWrapper}>
          <View style={photoListStyles.headerIdWrapper}>
            <Text type="Bold">Id</Text>
          </View>
          <View style={photoListStyles.headerNameWrapper}>
            <Text type="Bold">Nombre</Text>
          </View>
          <View style={photoListStyles.headerRequiredWrapper}>
            <Text type="Bold">Requerido</Text>
          </View>
        </View>
        {photographs.map(photo => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </View>
    </View>
  );
};

export default PhotoList;
