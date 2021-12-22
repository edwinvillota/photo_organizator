import {PhotographState} from '../../../../../models';

export interface IPhotoListItem {
  photo: PhotographState;
  onCapture: (photo: PhotographState) => void;
  onPreview: (photo: PhotographState) => void;
}
