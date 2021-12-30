import React from 'react';
import {BasicLayout} from '../../layouts';
import {SettingsEditor} from '../../components/organisms';
import {Button} from '../../components/atoms';
import {ScrollView} from 'react-native-gesture-handler';
import {useSettings} from '../../context/SettingsProvider';
import {styles} from './Settings.style';

const Settings: React.FC = () => {
  const {refetchSettings} = useSettings();

  return (
    <BasicLayout>
      <ScrollView>
        <SettingsEditor />
      </ScrollView>
      <Button
        type="Primary"
        onPress={() => refetchSettings()}
        style={styles.button}>
        Actualizar
      </Button>
    </BasicLayout>
  );
};

export default Settings;
