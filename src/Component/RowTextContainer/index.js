import React from 'react';
import {Image, View} from 'react-native';
import OpenSansRegular from '../Texts/OpenSansRegular';
import styles from './styles';
function RowTextContainer({
  text,
  value,
  unit,
  icon,
  leftContainer,
  mainContainer,
  rightContainer,
  iconStyle,
  textStyle,
}) {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      <View style={[styles.rightContainer, rightContainer]}>
        <Image source={icon} style={[styles.icons, iconStyle]} />
        <OpenSansRegular style={[styles.text, textStyle]}>
          {value}
        </OpenSansRegular>
      </View>
      <View style={[styles.leftContainer, leftContainer]}>
        <OpenSansRegular style={[styles.textStyle, textStyle]}>
          {text}
        </OpenSansRegular>
      </View>
    </View>
  );
}
export default RowTextContainer;
