import {useEffect, useState, useCallback} from 'react';
import {Settings} from '../models';

import {useSettingsStorage} from '../hooks';

type RefetchSettings = () => void;

type UseDownloadSettingsReturn = {
  settings: any;
  isLoading: boolean;
  isError: boolean;
  refetchSettings: RefetchSettings;
};

const SETTINGS_URL =
  'https://edwinvillota.github.io/json_server/photo_organizator/default_settings.json';

const fetchSettings = async (): Promise<Settings | undefined> => {
  try {
    const response = await fetch(SETTINGS_URL);

    if (response.ok) {
      const json: Settings = await response.json();
      return json;
    }
  } catch (e) {
    console.log(e);
  }
};

const useDownloadSettings = (): UseDownloadSettingsReturn => {
  const onSettingsUpdated = () => null;

  const onSettingsLoaded = (loadedSettings: Settings) => {
    setIsLoading(false);
    setSettings(loadedSettings);
  };

  const onError = (error: unknown) => {
    console.log(error);
    setIsError(true);
  };

  const {updateSettings, getSettings} = useSettingsStorage({
    onSettingsUpdated,
    onSettingsLoaded,
    onError,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [settings, setSettings] = useState<Settings>();

  const refetchSettings = useCallback<RefetchSettings>(async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const fetchedSettings = await fetchSettings();
      if (fetchedSettings) {
        updateSettings(fetchedSettings);
      } else {
        onError('Empty settings');
      }
    } catch (e) {
      onError(e);
    }
  }, [updateSettings]);

  useEffect(() => {
    getSettings();
  }, [getSettings, refetchSettings, settings]);

  return {settings, isLoading, isError, refetchSettings};
};

export default useDownloadSettings;
