import React from 'react';
import {Modal, View, Image} from 'react-native';
import {Button} from '../../atoms';
import {IPreviewModal} from './PreviewModal.types';
import {styles} from './PreviewModal.styles';
import {BasicLayout} from '../../../layouts';

const PreviewModal: React.FC<IPreviewModal> = ({
  photoToPreview,
  onCloseModal,
  ...props
}) => {
  return (
    <Modal {...props}>
      <BasicLayout>
        <View style={styles.container}>
          <Image
            source={{uri: `file://${photoToPreview.path}`}}
            style={styles.image}
          />
          <Button
            type="Primary"
            style={styles.cancelButton}
            onPress={onCloseModal}>
            Cerrar
          </Button>
        </View>
      </BasicLayout>
    </Modal>
  );
};

export default PreviewModal;
