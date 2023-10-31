import React from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {colors} from '../../Utils/appTheme';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import {icons} from '../../Assets/Images';
import {vh, vw} from '../../Utils/dimensions';

const routesWithBackIcon = {
  AddRecords: 'Refueling',
};

const titles = {
  AddRecords: 'Refueling',
};

const NavigationOptions = navProps => {
  return {
    headerTitle: () => renderTitle(navProps),
    // headerRight: () => renderheaderRight(navProps),
    headerLeft: () => renderheaderLeft(navProps),
    headerBackground: () => renderHeaderBackground(navProps),
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
  };
};
const renderTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <OpenSansRegular style={styles.titleText}>
        {titles[props?.route?.name]}
      </OpenSansRegular>
    );
  }
};

const renderHeaderBackground = props => {
  return (
    <View
      style={{
        height: vh * 8,
        width: vw * 100,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}></View>
  );
};

const renderheaderLeft = props => {
  if (routesWithBackIcon[props?.route?.name]) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.leftContainer}
        onPress={() => props.navigation.goBack()}>
        <Image source={icons.backIcon} style={styles.backIcon} />
      </TouchableOpacity>
    );
  }
};
export default NavigationOptions;
