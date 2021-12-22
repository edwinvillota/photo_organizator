import {PhotographState} from '../../../models';

export interface ICapturePhotoList {
  photographs: PhotographState[];
  onSave: () => void;
  disabledSaveButton?: boolean;
  onCapture: (photo: PhotographState) => void;
  onPreview: (photo: PhotographState) => void;
}
