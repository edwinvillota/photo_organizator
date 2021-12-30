import React, {useState} from 'react';
import {BasicLayout} from '../../layouts';
import {Props} from './AddPhotos.types';
import {CapturePhotoList} from '../../components/organisms';
import {PreviewModal} from '../../components/molecules';
import {ImagePickerResponse} from 'react-native-image-picker';
import {
  useCapturePhoto,
  usePhotosCapturedState,
  useActivitiesRecord,
} from '../../hooks';
import {Photograph, PhotographState} from '../../models';
import {Alert} from 'react-native';

const AddPhotos: React.FC<Props> = ({route, navigation}) => {
  const {photoStates, changePhotoState, areValidPhotos} =
    usePhotosCapturedState({preloadedPhotoStates: route.params.photoStates});
  const [photoToPreview, setPhotoToPreview] = useState<PhotographState>();
  const [isOpenPreviewModal, setIsOpenPreviewModal] = useState<boolean>(false);
  const {addActivity} = useActivitiesRecord();

  const onPhotoCaptured = (
    image: ImagePickerResponse,
    photo: Photograph,
    photoPath: string,
  ) => {
    changePhotoState(photo, photoPath);
  };

  const onPhotoCapturingError = (error: unknown) => {
    navigation.navigate('Error', {error});
  };

  const {capturePhoto} = useCapturePhoto({
    onSuccess: onPhotoCaptured,
    onError: onPhotoCapturingError,
  });

  return (
    <BasicLayout>
      <CapturePhotoList
        photographs={photoStates}
        onSave={() =>
          Alert.alert(
            'Exito',
            'La actividad se guardó correctamente',
            [
              {
                text: 'OK',
                onPress: () => {
                  addActivity(route.params.activityId);
                  navigation.navigate('Home');
                },
              },
            ],
            {cancelable: false},
          )
        }
        disabledSaveButton={!areValidPhotos}
        onCapture={photo => capturePhoto(photo, route.params.activityId)}
        onPreview={photo => {
          setPhotoToPreview(photo);
          setIsOpenPreviewModal(true);
        }}
      />
      {photoToPreview && (
        <PreviewModal
          photoToPreview={photoToPreview}
          visible={isOpenPreviewModal}
          onCloseModal={() => setIsOpenPreviewModal(false)}
          animationType="fade"
          presentationStyle="fullScreen"
        />
      )}
    </BasicLayout>
  );
};

export default AddPhotos;
