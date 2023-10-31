import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts} from '../../../Assets/Fonts';
import {colors} from '../../../Utils/appTheme';
import {vh} from '../../../Utils/dimensions';

const TextWrapper = props => {
  return (
    <Text
      allowFontScaling={false}
      ellipsizeMode="tail"
      {...props}
      style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: vh * 1.8,
    fontFamily: fonts.OpenSans.regular,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    color: colors.white,
  },
});
export default TextWrapper;
