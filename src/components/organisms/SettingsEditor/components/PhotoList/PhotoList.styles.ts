import {StyleSheet} from 'react-native';

export const photoItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  idWrapper: {
    flex: 1,
  },
  nameWrapper: {
    flex: 1,
    flexGrow: 8,
  },
  requiredWrapper: {
    flex: 1,
    flexGrow: 3,
    alignItems: 'center',
  },
});

export const photoListStyles = StyleSheet.create({
  listWrapper: {
    padding: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  headerIdWrapper: {
    flex: 1,
  },
  headerNameWrapper: {
    flex: 1,
    flexGrow: 8,
  },
  headerRequiredWrapper: {
    flex: 1,
    flexGrow: 3,
    alignItems: 'center',
  },
});
