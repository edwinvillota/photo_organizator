import React from 'react';
import {FlatList} from 'react-native';
import {Button, Text} from '../..';
import {ICapturePhotoList} from './CapturePhotoList.types';
import {PhotoListItem} from './components';
import {styles} from './CapturePhotoList.styles';

const CapturePhotoList: React.FC<ICapturePhotoList> = ({
  photographs,
  onSave,
}) => {
  return (
    <>
      <FlatList
        ListHeaderComponent={<Text type="Title">Listado de fotos</Text>}
        data={photographs}
        renderItem={({item}) => (
          <PhotoListItem
            photo={item}
            onCapture={() => console.log('Capturing')}
            onPreview={() => console.log('Preview')}
          />
        )}
      />
      <Button type="Primary" style={styles.button} onPress={onSave}>
        Guardar
      </Button>
    </>
  );
};

export default CapturePhotoList;
