import {useEffect, useState} from 'react';
import {useSettings} from '../context/SettingsProvider';
import RNFS from 'react-native-fs';

type UseCreateMainFolderReturn = {
  isLoading: boolean;
  isError: boolean;
};

const useCreateMainFolder = (): UseCreateMainFolderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {settings} = useSettings();

  const MAIN_FOLDER_PATH = `${RNFS.ExternalStorageDirectoryPath}/${settings.storage.mainFolderName}`;

  useEffect(() => {
    const createMainFolder = async () => {
      setIsLoading(true);
      try {
        const existsFolder = await RNFS.exists(MAIN_FOLDER_PATH);
        if (!existsFolder) {
          console.log('Creating folder');
          RNFS.mkdir(MAIN_FOLDER_PATH);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(false);
        }
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    createMainFolder();
  }, [MAIN_FOLDER_PATH]);

  return {isLoading, isError};
};

export default useCreateMainFolder;
