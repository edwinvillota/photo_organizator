import React, {useContext} from 'react';
import {
  SettingsContext,
  ISettingsContext,
} from '../../context/SettingsProvider';
import {useDownloadSettings} from '../../hooks';

export const SettingsProvider: React.FC = ({children}) => {
  const {settings, isLoading, isError} = useDownloadSettings();

  return (
    <SettingsContext.Provider value={{settings, isLoading, isError}}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): ISettingsContext => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used inside SettingsProvider');
  }

  return context;
};
