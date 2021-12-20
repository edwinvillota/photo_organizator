import {ValidationSettings, StorageSettings, Photograph} from '../models';

export type Settings = {
  name: string;
  version: number;
  date: string;
  validations: ValidationSettings;
  storage: StorageSettings;
  photographs: Photograph[];
};
