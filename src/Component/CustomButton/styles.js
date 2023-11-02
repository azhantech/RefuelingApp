import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/dimensions';
import {colors} from '../../Utils/appTheme';

const styles = StyleSheet.create({
  ButtonWrapper: {
    paddingVertical: vh * 1.3,
    borderRadius: vw * 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: vh * 6,
    width: vw * 90,
    backgroundColor: colors.blue,
    borderRadius: vh * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: vh * 2,
  },
});
export default styles;
