import {ModalProps} from 'react-native';

export interface IValidateIdModal extends ModalProps {
  idToValidate: string;
  onCloseModal: () => void;
  onContinue: (activityId: string) => void;
}
