import {useState, useCallback, useEffect} from 'react';
import {Photograph, PhotographState, Settings} from '../models';
import {useSettings} from '../context/SettingsProvider';

type UsePhotosCapturedReturn = {
  photoStates: PhotographState[];
  changePhotoState: ChangePhotoState;
  areValidPhotos: boolean;
};

type UsePhotoCapturedParams = {
  preloadedPhotoStates?: PhotographState[];
};

type ChangePhotoState = (capturedPhoto: Photograph, photoPath: string) => void;

const initializePhotoStates = (
  settings: Settings,
  preloadedPhotoStates?: PhotographState[],
): PhotographState[] => {
  if (preloadedPhotoStates) {
    return preloadedPhotoStates;
  }
  const photographs = settings.photographs;
  const photographsWithStatus: PhotographState[] = photographs.map(photo => ({
    ...photo,
    captured: false,
    missing: false,
    path: '',
  }));

  return photographsWithStatus;
};

const usePhotosCapturedState = ({
  preloadedPhotoStates,
}: UsePhotoCapturedParams): UsePhotosCapturedReturn => {
  const {settings} = useSettings();
  const [areValidPhotos, setAreValidPhotos] = useState(false);
  const [photoStates, setPhotoStates] = useState<PhotographState[]>(
    initializePhotoStates(settings, preloadedPhotoStates),
  );

  const changePhotoState = useCallback<ChangePhotoState>(
    (capturedPhoto, photoPath) => {
      setPhotoStates(prevState =>
        prevState.map(photo => {
          if (capturedPhoto.id === photo.id) {
            return {...photo, captured: true, path: photoPath};
          }
          return photo;
        }),
      );
    },
    [],
  );

  useEffect(() => {
    let areValid = true;

    photoStates.forEach(photo => {
      if (photo.required && !photo.captured) {
        areValid = false;
      }
    });

    setAreValidPhotos(areValid);
  }, [photoStates]);

  return {photoStates, changePhotoState, areValidPhotos};
};

export default usePhotosCapturedState;
