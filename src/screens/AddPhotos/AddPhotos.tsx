import React, {useState} from 'react';
import {BasicLayout} from '../../layouts';
import {Props} from './AddPhotos.types';
import {CapturePhotoList} from '../../components/organisms';
import {PreviewModal} from '../../components/molecules';
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';
import {useCapturePhoto, usePhotosCapturedState} from '../../hooks';
import {Photograph, PhotographState} from '../../models';

const AddPhotos: React.FC<Props> = ({route}) => {
  const {photoStates, changePhotoState, areValidPhotos} =
    usePhotosCapturedState();
  const [photoToPreview, setPhotoToPreview] = useState<PhotographState>();
  const [isOpenPreviewModal, setIsOpenPreviewModal] = useState<boolean>(false);

  const onPhotoCaptured = (
    image: ImagePickerResponse,
    photo: Photograph,
    photoPath: string,
  ) => {
    changePhotoState(photo, photoPath);
  };

  const onPhotoCapturingError = (error: unknown) => {
    console.log(error);
  };

  const {capturePhoto} = useCapturePhoto({
    onSuccess: onPhotoCaptured,
    onError: onPhotoCapturingError,
  });

  return (
    <BasicLayout>
      <CapturePhotoList
        photographs={photoStates}
        onSave={() => launchCamera({saveToPhotos: true, mediaType: 'photo'})}
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
