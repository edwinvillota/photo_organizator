import {StyleSheet} from 'react-native';
import {Pallete} from '../../../theme';

export const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 20,
    color: Pallete.Dark,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderColor: Pallete.Dark,
    borderWidth: 1,
    backgroundColor: Pallete.White,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: Pallete.Dark,
  },
});
