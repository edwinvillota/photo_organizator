import {Photograph} from '../../../models';

export interface ICapturePhotoList {
  photographs: Photograph[];
  onSave: () => void;
}
