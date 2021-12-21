import React, {useState, useEffect} from 'react';
import {BasicLayout} from '../../layouts';
import {SettingsEditor} from '../../components/organisms';
import {ScrollView} from 'react-native-gesture-handler';
import {ExternalStorageDirectoryPath, mkdir} from 'react-native-fs';
import {Text} from '../../components';

const Settings: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    const readMainPath = async () => {
      try {
        console.log(ExternalStorageDirectoryPath);
        const files = await mkdir(`${ExternalStorageDirectoryPath}/test`);
      } catch (e) {
        console.error('Error->', e);
      }
    };

    readMainPath();
  }, []);

  return (
    <ScrollView>
      <BasicLayout>
        {result.map(item => (
          <Text key={item}>{`-->${item}`}</Text>
        ))}
        <SettingsEditor />
      </BasicLayout>
    </ScrollView>
  );
};

export default Settings;
