import React from 'react';
import {BasicLayout} from '../../layouts';
import {SettingsEditor} from '../../components/organisms';
import {ScrollView} from 'react-native-gesture-handler';

const Settings: React.FC = () => {
  return (
    <ScrollView>
      <BasicLayout>
        <SettingsEditor />
      </BasicLayout>
    </ScrollView>
  );
};

export default Settings;
