import {Settings} from '../models';

export const DefaultSettings: Settings = {
  name: 'Default',
  version: 1.0,
  date: '2021-12-17',
  validations: {
    activityId: {
      regExp: '^[0-9]{7}$',
      minLength: 7,
      maxLength: 7,
    },
  },
  storage: {
    mainFolderName: 'FotosMEC',
  },
  photographs: [
    {id: 1, name: 'Predio antes', required: true},
    {id: 2, name: 'Medidor', required: true},
    {id: 3, name: 'Lectura activa', required: true},
    {id: 4, name: 'Lectura reactiva', required: true},
    {id: 5, name: 'Sello tapa bornera 1', required: true},
    {id: 6, name: 'Sello tapa bornera 2', required: true},
    {id: 7, name: 'Sello caja', required: true},
    {id: 8, name: 'Prueba de fuga', required: true},
    {id: 9, name: 'Foto medidor retirado', required: true},
    {id: 10, name: 'Sello tapabornera retirado', required: true},
    {id: 11, name: 'Sello caja retirado', required: true},
    {id: 12, name: 'Sticker', required: true},
    {id: 13, name: 'Acometida', required: true},
    {id: 14, name: 'Puesta a tierra', required: true},
    {id: 15, name: 'Sticker de calibración', required: true},
    {id: 16, name: 'Sello tapa principal 1', required: true},
    {id: 17, name: 'Sello tapa principal 2', required: true},
    {id: 18, name: 'Módulo', required: true},
    {id: 19, name: 'Sello de módulo', required: true},
    {id: 20, name: 'Predio despúes', required: true},
  ],
};
