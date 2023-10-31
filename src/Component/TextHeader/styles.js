import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';
const styles = StyleSheet.create({
  headerContainer: {
    width: '27%',
    height: vh * 5,
    backgroundColor: colors.blackappText,
    borderRadius: vh * 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: vh * 4,
    width: vw * 4,
    resizeMode: 'contain',
  },
  text: {
    fontSize: vw * 4,
  },
  headerTextContainer: {
    width: '40%',
  },
});

export default styles;
