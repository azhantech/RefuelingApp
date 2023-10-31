import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../../Screen/HomeScreen';
import TimeLineScreen from '../../Screen/TimeLineScreen';
import {icons} from '../../Assets/Images';
import {colors} from '../../Utils/appTheme';
import styles from './styles';
import {vh, vw} from '../../Utils/dimensions';
import AddRecords from '../../Screen/AddRecords';
const Tab = createMaterialTopTabNavigator();

const tabIcons = {
  HomeScreen: {icon: icons.home},
  TimeLineScreen: {icon: icons.timeLine},
  AddRecords: {icon: icons.chartGraph},
};

const tabBarOptions = {
  showLabel: false, // Hide the header labels
  // Add any other desired tabBarOptions
};
const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={() => ({
        headerShown: false,
        swipeEnabled: false,
      })}
      tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={NavigationOptions}
      />
      <Tab.Screen
        name="TimeLineScreen"
        component={TimeLineScreen}
        // options={NavigationOptions}
      />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
  const [focusedItem, setFocusedItem] = React.useState(false);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            setFocusedItem(true);
            navigation.navigate(route.name);
          }
        };
        if (isFocused) {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={isFocused ? styles.activeBtnStyle : styles.btnStyle}
              // style={{justifyContent: 'center', alignItems: 'center'}}
            >
              <Image
                source={tabIcons[route?.name].icon}
                style={{
                  height: vh * 2.5,
                  width: vh * 2.5,
                  tintColor: isFocused ? colors.white : '#B7B7B7',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={onPress}
              style={isFocused ? styles.activeBtnStyle : styles.btnStyle}>
              <Image
                source={tabIcons[route?.name].icon}
                style={{
                  height: vh * 2.5,
                  width: vh * 2.5,
                  tintColor: isFocused ? colors.white : '#B7B7B7',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default TabNavigator;
