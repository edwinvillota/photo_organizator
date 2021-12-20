import React from 'react';
import {View} from 'react-native';
import {IValidationsViewer} from './ValidationsViewer.types';
import {Text, KeyValue} from '../../../../atoms';

const ValidationsViewer: React.FC<IValidationsViewer> = ({validations}) => {
  return (
    <View>
      <Text type="Subtitle">Preferencias de validación</Text>
      <KeyValue
        prop="RegExp de actividad"
        value={validations.activityId.regExp}
      />
      <KeyValue
        prop="Longitud mínima"
        value={validations.activityId.minLength}
      />
      <KeyValue
        prop="Longitud máxima"
        value={validations.activityId.maxLength}
      />
    </View>
  );
};

export default ValidationsViewer;
