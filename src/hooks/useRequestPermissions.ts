import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';

const RequiredPermissions = [
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
];

type UseRequestPermissionsReturn = {
  appHasRequiredPermissions: boolean;
  isLoading: boolean;
  isError: boolean;
};

const useRequestPermissions = (): UseRequestPermissionsReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [appHasRequiredPermissions, setAppHasRequiredPermissions] =
    useState<boolean>(false);

  const requestAllPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        RequiredPermissions,
      );
      let arePermissionsValid = true;
      RequiredPermissions.forEach(permission => {
        if (permission in granted) {
          if (granted[permission] !== 'granted') {
            arePermissionsValid = false;
          }
        } else {
          arePermissionsValid = false;
        }
      });
      setAppHasRequiredPermissions(arePermissionsValid);
    } catch (e) {
      setAppHasRequiredPermissions(false);
      setIsError(true);
    }
  };

  const arePermissionsNeededGranted = async () => {
    const camera = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    const readStorage = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    const writeStorage = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    return camera && readStorage && writeStorage;
  };

  useEffect(() => {
    setIsLoading(true);
    const checkPermissions = async () => {
      const arePermissionsGranted = await arePermissionsNeededGranted();
      if (!arePermissionsGranted) {
        await requestAllPermissions();
      } else {
        setAppHasRequiredPermissions(true);
      }
      setIsLoading(false);
    };

    checkPermissions();
  }, []);

  return {appHasRequiredPermissions, isLoading, isError};
};

export default useRequestPermissions;
