import React, {useImperativeHandle, useRef, useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
const InputField = props => {
  const [isPassword, setIsPassword] = useState(true);

  const inputRef = useRef(null);
  useImperativeHandle(props?.reference, () => ({
    focus: focus,
    blur: blur,
  }));
  const focus = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <View style={[styles.container, props.inputContainerStyle]}>
      <View style={[styles.inputWithIcon, props.inputContainerIcon]}>
        <TextInput
          {...props}
          ref={inputRef}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[styles.input, props.inputContainer]}
          placeholder={props.placeholder}
          placeholderTextColor={'#999999'}
        />
      </View>
    </View>
  );
};

export default InputField;
