import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSettings} from '../../../context/SettingsProvider';
import {StorageViewer, ValidationsViewer, PhotoList} from './components';
import {Text, KeyValue} from '../../atoms';

const SettingsEditor: React.FC = () => {
  const {settings, isLoading, isError} = useSettings();

  if (isError) {
    return <Text>Ocurrio un error al cargar tus preferencias</Text>;
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text type="Title">Preferencias</Text>
      <Text type="Subtitle">Información de preferencias</Text>
      <KeyValue prop="Nombre:" value={settings.name} />
      <KeyValue prop="Versión:" value={settings.version} />
      <KeyValue prop="Fecha:" value={settings.date} />
      <StorageViewer storage={settings.storage} />
      <ValidationsViewer validations={settings.validations} />
      <PhotoList photographs={settings.photographs} />
    </View>
  );
};

export default SettingsEditor;
