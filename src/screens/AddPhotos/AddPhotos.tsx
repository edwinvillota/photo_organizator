import React from 'react';
import {BasicLayout} from '../../layouts';
import {Props} from './AddPhotos.types';
import {CapturePhotoList} from '../../components/organisms';
import {useSettings} from '../../context/SettingsProvider';

const AddPhotos: React.FC<Props> = () => {
  const {settings} = useSettings();

  return (
    <BasicLayout>
      <CapturePhotoList
        photographs={settings.photographs}
        onSave={() => console.log('Save')}
      />
    </BasicLayout>
  );
};

export default AddPhotos;
