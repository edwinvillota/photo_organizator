import {useCallback} from 'react';
import {Settings} from '../models';
import {SettingsStorage} from '../storage';
import {DefaultSettings} from '../config';

type UpdateSettings = (newSettings: Settings) => void;
type GetSettings = () => void;

type UseSettingsStorageReturn = {
  updateSettings: UpdateSettings;
  getSettings: GetSettings;
};

type UseSettingsStorageParam = {
  onSettingsUpdated: () => void;
  onSettingsLoaded: (settings: Settings) => void;
  onError: (error: unknown) => void;
};

const useSettingsStorage = ({
  onSettingsUpdated,
  onSettingsLoaded,
  onError,
}: UseSettingsStorageParam): UseSettingsStorageReturn => {
  const getSettings = useCallback<GetSettings>(async () => {
    try {
      const data: Settings = await SettingsStorage.load({
        key: 'settings',
      });

      onSettingsLoaded(data);
    } catch (e) {
      onSettingsLoaded(DefaultSettings);
    }
  }, [onSettingsLoaded]);

  const updateSettings = useCallback<UpdateSettings>(
    async newSettings => {
      try {
        await SettingsStorage.save({
          key: 'settings',
          data: newSettings,
        });
        onSettingsUpdated();
        getSettings();
      } catch (e) {
        onError(e);
      }
    },
    [getSettings, onError, onSettingsUpdated],
  );

  return {updateSettings, getSettings};
};

export default useSettingsStorage;
