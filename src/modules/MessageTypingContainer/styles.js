import {StyleSheet} from 'react-native';
import {colors} from '../../modules/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: 10,
  },
  textInput: {
    flex: 1,
  }
});
