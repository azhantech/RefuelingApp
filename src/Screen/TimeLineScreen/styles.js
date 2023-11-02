import {StyleSheet} from 'react-native';
import {colors} from '../../Utils/appTheme';
import {vh, vw} from '../../Utils/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: vh * 5,
    backgroundColor: colors.primaryColor,
    paddingBottom: vh * 10,
  },
  headerContainer: {
    width: vw * 40,
    height: vh * 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: vw * 3.2,

    justifyContent: 'space-between',
  },
  circle: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: (vh * 3) / 2,
    backgroundColor: colors.floatingbtnColor,
  },
  textContainer: {
    height: vh * 3,
    width: vw * 30,
    justifyContent: 'center',
  },
  renderItemContainer: {
    height: vh * 10,
    marginVertical: vh,
    marginLeft: vw * 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: vw,
    backgroundColor: colors.floatingbtnColor,
    height: vh * 15,
    position: 'absolute',
    left: vw * 4,
  },
  iconCircle: {
    height: vh * 5,
    width: vh * 5,
    borderRadius: (vh * 5) / 2,
    backgroundColor: colors.floatingbtnColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  detailsContainer: {
    width: vw * 85,
  },
  detailsHeadingTxt: {
    fontSize: vw * 4,
  },
  datePriceContainer: {
    width: vw * 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: vw * 3,
    height: vh * 3,
    alignItems: 'center',
  },
  dateTxt: {
    color: colors.grey,
    fontSize: vw * 3,
  },
  priceTxt: {
    fontSize: vw * 3,
  },
  distanceContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    height: vh * 3,
  },
  gaugeStyle: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  distanceTxt: {
    color: colors.grey,
    fontSize: vw * 3,
    marginLeft: vw * 2,
  },
  headerTxt: {
    color: colors.floatingbtnColor,
    fontSize: vw * 3.5,
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
});

export default styles;
