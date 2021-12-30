import {useCallback, useState} from 'react';
import {useSettings} from '../context/SettingsProvider';
import RNFS from 'react-native-fs';
import {format} from 'date-fns/esm';

type UseCreateActivityFolderParams = {
  activityId: string;
  onError: (path: string, error: unknown) => void;
  onSuccess: (path: string) => void;
};

type CreateActivityFolder = () => void;

type UseCreateActivityFolderReturn = {
  isLoading: boolean;
  isError: boolean;
  createActivityFolder: CreateActivityFolder;
};

const useCreateActivityFolder = ({
  activityId,
  onError,
  onSuccess,
}: UseCreateActivityFolderParams): UseCreateActivityFolderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {settings} = useSettings();

  const createActivityFolder = useCallback<CreateActivityFolder>(async () => {
    setIsLoading(true);
    const date = format(new Date(), 'dd-MM-yyyy');
    const ACTIVITY_FOLDER_PATH = `${RNFS.ExternalStorageDirectoryPath}/${settings.storage.mainFolderName}/${date}/${activityId}`;

    try {
      const existsFolder = await RNFS.exists(ACTIVITY_FOLDER_PATH);
      if (!existsFolder) {
        await RNFS.mkdir(ACTIVITY_FOLDER_PATH);

        const verifiedFolder = await RNFS.exists(ACTIVITY_FOLDER_PATH);

        if (verifiedFolder) {
          setIsError(false);
          onSuccess(ACTIVITY_FOLDER_PATH);
        } else {
          setIsError(true);
          onError(ACTIVITY_FOLDER_PATH, 'Folder could not be created');
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(false);
        onSuccess(ACTIVITY_FOLDER_PATH);
      }
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
      onError(ACTIVITY_FOLDER_PATH, e);
    }
  }, [activityId, onError, onSuccess, settings]);

  return {createActivityFolder, isLoading, isError};
};

export default useCreateActivityFolder;
