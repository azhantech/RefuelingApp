import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {icons} from '../../Assets/Images';
import OpenSansSemiBold from '../Texts/OpenSansSemiBold';
export default function TextHeader({
  icons,
  text,
  iconStyle,
  headerContainer,
  textContainer,
  textStyle,
}) {
  return (
    <View>
      <View style={[styles.headerContainer, headerContainer]}>
        <Image source={icons} style={[styles.image, iconStyle]} />
        <View style={[styles.headerTextContainer, textContainer]}>
          <OpenSansSemiBold style={[styles.text, textStyle]}>
            {text}
          </OpenSansSemiBold>
        </View>
      </View>
    </View>
  );
}
