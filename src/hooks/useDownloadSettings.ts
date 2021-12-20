import {useEffect, useState} from 'react';
import {Settings} from '../models';
import {DefaultSettings} from '../config';

type UseDownloadSettingsReturn = {
  settings: any;
  isLoading: boolean;
  isError: boolean;
};

const SETTINGS_URL =
  'https://edwinvillota.github.io/json_server/photo_organizator/default_settings.json';

const useDownloadSettings = (): UseDownloadSettingsReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [settings, setSettings] = useState<Settings>(DefaultSettings);

  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(SETTINGS_URL);
        const json: Settings = await response.json();
        setSettings(json);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchSettings();
  }, []);

  return {settings, isLoading, isError};
};

export default useDownloadSettings;
