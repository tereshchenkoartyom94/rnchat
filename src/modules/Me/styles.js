import { StyleSheet } from 'react-native';
const AVATAR_SIZE = 100;
const AVATAR_BORDER_RADIUS = 100 / 2;

export const styles = StyleSheet.create({
  container: {
     backgroundColor: '#efefef'
  },
  noAvatarText: {
    textAlign: 'center',
  },
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_BORDER_RADIUS,
  }
});
