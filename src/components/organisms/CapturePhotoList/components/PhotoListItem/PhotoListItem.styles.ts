import {StyleSheet} from 'react-native';
import {Pallete} from '../../../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Pallete.White,
    marginBottom: 10,
  },
  statusWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 8,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 5,
    justifyContent: 'flex-end',
  },
  actionButton: {
    flex: 1,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 64,
  },
});
