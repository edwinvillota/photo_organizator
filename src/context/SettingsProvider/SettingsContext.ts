import React from 'react';
import {ISettingsContext} from './SettingsContext.types';
import {DefaultSettings} from '../../config';

const SettingContextDefaultState: ISettingsContext = {
  isError: false,
  isLoading: false,
  settings: DefaultSettings,
};

export const SettingsContext = React.createContext<ISettingsContext>(
  SettingContextDefaultState,
);
