import React from 'react';
import {StyleSheet} from 'react-native';
import {fonts} from '../../../Assets/Fonts';
import TextWrapper from '../TextWrapper';

const OpenSansSemiBold = props => {
  return (
    <TextWrapper {...props} style={[styles.text, props.style]}>
      {props.children}
    </TextWrapper>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.OpenSans.semiBold,
  },
});
export default OpenSansSemiBold;
