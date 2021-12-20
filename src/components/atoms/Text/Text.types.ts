import {TextProps} from 'react-native';

export enum TextTypes {
  Title = 'Title',
  Subtitle = 'Subtitle',
  Caption = 'Caption',
  Normal = 'Normal',
  Bold = 'Bold',
}

export interface IText extends TextProps {
  type?: keyof typeof TextTypes;
}
