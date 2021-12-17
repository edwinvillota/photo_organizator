import React, {useState, useEffect} from 'react';
import {Modal, View} from 'react-native';
import {IValidateIdModal} from './ValidateIdModal.types';
import {ActivityInput, Button} from '../../atoms';
import {styles} from './ValidateIdModal.styles';

const ValidateIdModal: React.FC<IValidateIdModal> = ({
  idToValidate,
  onCloseModal,
  onContinue,
  ...props
}) => {
  const [isIdVerified, setIdVerified] = useState<boolean>(false);
  const [testId, setTestId] = useState<string>('');

  useEffect(() => {
    if (idToValidate === testId) {
      setIdVerified(true);
    } else {
      setIdVerified(false);
    }
  }, [idToValidate, testId]);

  return (
    <Modal {...props}>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <ActivityInput
            label="Número de verificación"
            value={testId}
            onChangeText={id => setTestId(id)}
          />
          <Button
            type="Success"
            disabled={!isIdVerified}
            style={styles.button}
            onPress={() => {
              onContinue(testId);
              onCloseModal();
            }}>
            Continuar
          </Button>
          <Button
            type="Error"
            onPress={() => onCloseModal()}
            style={styles.button}>
            Cancelar
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ValidateIdModal;
