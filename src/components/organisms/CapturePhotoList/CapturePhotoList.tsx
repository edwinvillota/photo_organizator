import React from 'react';
import {FlatList} from 'react-native';
import {Button, Text} from '../..';
import {ICapturePhotoList} from './CapturePhotoList.types';
import {PhotoListItem} from './components';
import {styles} from './CapturePhotoList.styles';

const CapturePhotoList: React.FC<ICapturePhotoList> = ({
  photographs,
  onSave,
  disabledSaveButton,
  onCapture,
  onPreview,
}) => {
  return (
    <>
      <FlatList
        ListHeaderComponent={<Text type="Title">Listado de fotos</Text>}
        ListHeaderComponentStyle={styles.header}
        data={photographs}
        renderItem={({item}) => (
          <PhotoListItem
            photo={item}
            onCapture={onCapture}
            onPreview={onPreview}
          />
        )}
      />
      <Button
        type="Primary"
        style={styles.button}
        onPress={onSave}
        disabled={disabledSaveButton}>
        Guardar
      </Button>
    </>
  );
};

export default CapturePhotoList;
