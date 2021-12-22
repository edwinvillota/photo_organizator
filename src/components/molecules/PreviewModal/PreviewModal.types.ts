import {ModalProps} from 'react-native';
import {PhotographState} from '../../../models';

export interface IPreviewModal extends ModalProps {
  photoToPreview: PhotographState;
  onCloseModal: () => void;
}
