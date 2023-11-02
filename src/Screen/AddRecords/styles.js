import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: vh * 50,
  },
  errorMessage: {
    color: colors.red,
  },
  odometerContainer: {
    height: vh * 12,
  },
  rowContainer: {
    width: '90%',
    height: vh * 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: '100%',
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: vh * 2,
    width: vw * 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  lastValueText: {
    color: colors.textColor,
    fontSize: vw * 2.5,
  },
  dateTimeContainer: {
    width: '45%',
    height: vh * 7,
    borderRadius: vh * 0.5,
    borderWidth: 2,
    borderColor: colors.blackappText,
    justifyContent: 'center',
    paddingHorizontal: vw * 2,
  },
  textStyle: {
    fontSize: vw * 3,
    color: colors.textColor,
  },
  buttonContainer: {
    height: vh * 15,
    justifyContent: 'center',
  },
});
export default styles;
