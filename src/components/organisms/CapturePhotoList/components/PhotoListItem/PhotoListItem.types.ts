import {Photograph} from '../../../../../models';

export interface IPhotoListItem {
  photo: Photograph;
  onCapture: () => void;
  onPreview: () => void;
}
