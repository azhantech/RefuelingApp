import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/dimensions';
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: vh * 5,
    justifyContent: 'space-around',
    width: '90%',
  },
  rightContainer: {
    height: '100%',
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icons: {
    height: vh * 5,
    width: vw * 5,
    resizeMode: 'contain',
  },
  leftContainer: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default styles;
