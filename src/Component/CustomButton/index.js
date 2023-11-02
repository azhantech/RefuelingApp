import React, {useState} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import OpenSansRegular from '../Texts/OpenSansRegular';

const CustomButton = props => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handleOnPress}>
      <OpenSansRegular style={[styles.text, props.textStyle]}>
        {props.text}
      </OpenSansRegular>
    </TouchableOpacity>
  );
};

export default CustomButton;
