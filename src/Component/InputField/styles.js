import {StyleSheet} from 'react-native';
import {vw, vh} from '../../Utils/dimensions';
import {colors} from '../../Utils/appTheme';
import {fonts} from '../../Assets/Fonts';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // marginVertical  : vh*2,
    width: vw * 80,
  },
  inputWithIcon: {
    // flexDirection: 'row',
    borderBottomWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    height: vh * 7,
    borderRadius: vh * 0.5,
    borderWidth: 2,
    borderColor: colors.blackappText,
    paddingHorizontal: vw * 2,
    // paddingBottom: vh * 1,
  },
  icon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  icon2: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  leftIcon: {
    height: vh * 3,
    width: vh * 3,
    resizeMode: 'contain',
  },
  input: {
    // borderBottomWidth: 1,
    // borderColor: colors.borderColor2,
    // borderColor: colors.grey,
    // width: vw * 85,
    // width: vw * 78,
    flex: 1,
    fontFamily: fonts.OpenSans.regular,
    padding: 0,
    fontSize: vh * 1.9,
    color: colors.textColor,
    // paddingBottom: vh * 0.5,
    // opacity: 0.1
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    color: colors.blackappText,
    fontSize: vh * 1.9,
  },
  require: {
    color: colors.red,
  },
});

export default styles;
