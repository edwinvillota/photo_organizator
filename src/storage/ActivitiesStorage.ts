import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ActivitiesStorage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
});

export default ActivitiesStorage;
