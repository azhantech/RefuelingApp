import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';

const {StyleSheet, StatusBar} = require('react-native');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: vh * 10,
  },
  headerContainer: {
    width: '30%',
    height: vh * 5,
    backgroundColor: colors.blackappText,
    borderRadius: vh * 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    height: vh * 3,
    width: vw * 3,
    resizeMode: 'contain',
    tintColor: colors.blue,
  },
  text: {
    color: colors.white,
    fontSize: vw * 5,
  },
  headerTextContainer: {
    width: '40%',
  },
  GapContainer: {
    width: '90%',
    alignItems: 'center',
    height: vh * 35,

    justifyContent: 'space-around',
  },
  GasContainer: {
    width: '100%',
    height: vh * 20,
    borderRadius: vh * 2,
    backgroundColor: colors.blackappText,
    alignItems: 'center',
  },
  dateContainer: {
    height: vh * 5,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  floatingButton: {
    width: vh * 7,
    height: vh * 7,
    backgroundColor: colors.floatingbtnColor,
    position: 'absolute',
    borderRadius: (vh * 7) / 2,
    right: vw * 10,
    // top: vh * 70,
    bottom: vh * 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: vw * 10,
  },
  subHeading: {
    fontSize: vw * 2.5,
    width: '85%',
    marginTop: vh,
  },
});
export default styles;
