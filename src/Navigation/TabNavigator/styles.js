import {Platform, StyleSheet} from 'react-native';
// import {themeColors, themeShadow} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';
import {colors} from '../../Utils/appTheme';
const styles = StyleSheet.create({
  container: {
    width: vw * 100,
    height: Platform.OS === 'ios' ? vh * 9 : vh * 9,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.blackappText,
    justifyContent: 'space-around',
    height: vh * 10,
  },
  btnStyle: {
    height: Platform.OS === 'ios' ? vh * 7 : vh * 7,
    minWidth: Platform.OS === 'ios' ? vw * 15 : vh * 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBtnStyle: {
    height: Platform.OS === 'ios' ? vh * 7 : vh * 7,
    minWidth: Platform.OS === 'ios' ? vw * 15 : vh * 7,
    borderRadius: (6 / 2) * vh,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: vh * 2,
  },
});

export default styles;
