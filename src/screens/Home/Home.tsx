import React from 'react';
import {View} from 'react-native';
import {BasicLayout} from '../../layouts';
import {Button} from '../../components/atoms';
import {styles} from './Home.styles';
import {Props} from './Home.types';

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <BasicLayout>
      <View style={styles.buttonsWrapper}>
        <View style={styles.button}>
          <Button
            type="Primary"
            onPress={() => navigation.navigate('CreateActivity')}>
            Crear actividad
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            type="Primary"
            onPress={() => navigation.navigate('ListPhotos')}>
            Actividades guardadas
          </Button>
        </View>
      </View>
    </BasicLayout>
  );
};

export default Home;
