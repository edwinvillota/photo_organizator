import React, {useState, useEffect} from 'react';
import {BasicLayout} from '../../layouts';
import {Props} from './CreateActivity.types';
import {ActivityInput, Button} from '../../components/atoms';
import {ValidateIdModal} from '../../components/molecules';
import {styles} from './CreateActivity.styles';
import {useSettings} from '../../context/SettingsProvider';
import {isValidActivityId} from '../../utils';

const CreateActivity: React.FC<Props> = ({navigation}) => {
  const {settings} = useSettings();
  const [activityId, setActivityId] = useState<string>('');
  const [isValidId, setIsValidId] = useState<boolean>(false);
  const [isOpenValidateModal, setIsOpenValidateModal] =
    useState<boolean>(false);

  useEffect(() => {
    if (isValidActivityId({activityId, validations: settings.validations})) {
      setIsValidId(true);
    } else {
      setIsValidId(false);
    }
  }, [activityId, settings.validations]);

  return (
    <BasicLayout>
      <ActivityInput
        label="Número de actividad"
        onChangeText={id => setActivityId(id)}
        value={activityId}
        maxLength={settings.validations.activityId.maxLength}
      />
      <Button
        type="Success"
        style={styles.button}
        disabled={!isValidId}
        onPress={() => setIsOpenValidateModal(true)}>
        Crear
      </Button>
      <ValidateIdModal
        idToValidate={activityId}
        visible={isOpenValidateModal}
        onCloseModal={() => setIsOpenValidateModal(false)}
        onContinue={id => navigation.navigate('AddPhotos', {activityId: id})}
        animationType="slide"
        presentationStyle="overFullScreen"
        transparent
      />
    </BasicLayout>
  );
};

export default CreateActivity;
