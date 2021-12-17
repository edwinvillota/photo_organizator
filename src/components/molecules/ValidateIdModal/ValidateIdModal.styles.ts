import {StyleSheet} from 'react-native';
import {Pallete} from '../../../theme';

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,.8)',
  },
  container: {
    backgroundColor: Pallete.White,
    marginTop: 'auto',
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingBottom: 16,
    shadowColor: Pallete.Black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  button: {
    marginTop: 10,
  },
});
