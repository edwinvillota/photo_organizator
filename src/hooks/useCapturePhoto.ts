import {useCallback} from 'react';
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';
import {Photograph} from '../models';
import {format} from 'date-fns';
import RNFS from 'react-native-fs';
import {useSettings} from '../context/SettingsProvider';

type CapturePhoto = (photo: Photograph, activityId: string) => void;

type UseCapturePhotoReturn = {
  capturePhoto: CapturePhoto;
};

type UseCapturePhotoParams = {
  onError?: (error: unknown) => void;
  onSuccess?: (
    image: ImagePickerResponse,
    photoItem: Photograph,
    photoPath: string,
  ) => void;
  onCancel?: () => void;
};

const useCapturePhoto = ({
  onError,
  onSuccess,
  onCancel,
}: UseCapturePhotoParams): UseCapturePhotoReturn => {
  const {settings} = useSettings();

  const capturePhoto = useCallback<CapturePhoto>(
    async (photo, activityId) => {
      try {
        const date = format(new Date(), 'dd-MM-yyyy');
        const result = await launchCamera({mediaType: 'photo'});

        if (result.didCancel) {
          onCancel && onCancel();
          return;
        }

        if (
          result.errorCode ||
          result.errorMessage ||
          result.assets === undefined
        ) {
          const {errorCode, errorMessage} = result;
          onError && onError({errorCode, errorMessage});
          return;
        }

        const newPhotoTempPath = `${RNFS.TemporaryDirectoryPath}/${result.assets[0]?.fileName}`;
        const dateFolder = `${RNFS.ExternalStorageDirectoryPath}/${settings.storage.mainFolderName}/${date}`;
        const existsDateFolder = await RNFS.exists(dateFolder);

        if (!existsDateFolder) {
          RNFS.mkdir(dateFolder);
        }

        const newPhotoNewPath = `${dateFolder}/${activityId}_${photo.id}.jpg`;
        const newPhotoExists = await RNFS.exists(newPhotoTempPath);

        if (newPhotoExists) {
          RNFS.moveFile(newPhotoTempPath, newPhotoNewPath);
          onSuccess && onSuccess(result, photo, newPhotoNewPath);
        }
      } catch (error) {
        onError && onError(error);
      }
    },
    [onCancel, onError, onSuccess, settings.storage.mainFolderName],
  );

  return {
    capturePhoto,
  };
};

export default useCapturePhoto;
