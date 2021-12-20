import React from 'react';
import {View} from 'react-native';
import {IStorageViewer} from './StorageViewer.types';
import {Text, KeyValue} from '../../../../atoms';

const StorageViewer: React.FC<IStorageViewer> = ({storage}) => {
  return (
    <View>
      <Text type="Subtitle">Preferencias de almacenamiento</Text>
      <KeyValue prop="Carpeta principal:" value={storage.mainFolderName} />
    </View>
  );
};

export default StorageViewer;
