import {Settings} from '../../models';

export interface ISettingsContext {
  isLoading: boolean;
  isError: boolean;
  settings: Settings;
}
