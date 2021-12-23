import {useCallback} from 'react';
import {useSettings} from '../context/SettingsProvider';
import {format} from 'date-fns';
import RNFS from 'react-native-fs';
import {PhotographState} from '../models';

type UseRestoreActivityStateParams = {
  activityId: string;
  onCreateActivity: (activityId: string) => void;
  onEditActivity: (activityId: string, photoStates: PhotographState[]) => void;
};

type UseRestoreActivityStateReturn = {
  createOrEditActivity: () => void;
};

const useRestoreActivityState = ({
  activityId,
  onCreateActivity,
  onEditActivity,
}: UseRestoreActivityStateParams): UseRestoreActivityStateReturn => {
  const {settings} = useSettings();

  const createOrEditActivity = useCallback(async () => {
    const date = format(new Date(), 'dd-MM-yyyy');
    let isNewActivity = true;
    const dateFolder = `${RNFS.ExternalStorageDirectoryPath}/${settings.storage.mainFolderName}/${date}`;
    try {
      const filesInDir = await RNFS.readdir(dateFolder);

      const photoStates: PhotographState[] = settings.photographs.map(photo => {
        const fileName = `${activityId}_${photo.id}.jpg`;
        const path = `${dateFolder}/${fileName}`;
        if (filesInDir.includes(fileName)) {
          isNewActivity = false;
          return {...photo, captured: true, missing: false, path};
        }

        return {...photo, captured: false, missing: false, path: ''};
      });

      if (isNewActivity) {
        onCreateActivity(activityId);
      } else {
        onEditActivity(activityId, photoStates);
      }
    } catch (e) {
      onCreateActivity(activityId);
      console.log({e, dateFolder});
    }
  }, [
    activityId,
    onCreateActivity,
    onEditActivity,
    settings.photographs,
    settings.storage.mainFolderName,
  ]);

  return {createOrEditActivity};
};

export default useRestoreActivityState;
