import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {icons} from '../../Assets/Images';
import InputField from '../../Component/InputField';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function AddRecords() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const showDatePicker = setvisible => {
    setvisible(true);
  };

  const hideDatePicker = () => {
    if (isDatePickerVisible) {
      setDatePickerVisibility(false);
    } else {
      setTimePickerVisibility(false);
    }
  };

  const handleConfirm = date => {
    if (isDatePickerVisible) {
      setDatePickerVisibility(false);
    } else {
      setTimePickerVisibility(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.odometerContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image source={icons.gauge} style={styles.iconStyle} />
          </View>
          <InputField placeholder="Odometer (mi)" />
        </View>
        <View style={styles.bottomContainer}>
          <OpenSansRegular style={styles.lastValueText}>
            Last value: 66783 mi
          </OpenSansRegular>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.gasPump} style={styles.iconStyle} />
        </View>
        <InputField
          placeholder="Gas (I)"
          inputContainerStyle={{width: '45%'}}
        />
        <InputField
          placeholder="Gas type"
          inputContainerStyle={{width: '40%'}}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.dollar} style={styles.iconStyle} />
        </View>
        <InputField
          placeholder="Price/L"
          inputContainerStyle={{width: '45%'}}
          keyboardType="number-pad"
        />
        <InputField
          placeholder="Total cost"
          inputContainerStyle={{width: '40%'}}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.calendar} style={styles.iconStyle} />
        </View>
        <TouchableOpacity
          style={styles.dateTimeContainer}
          activeOpacity={0.8}
          onPress={() => showDatePicker(setDatePickerVisibility)}>
          <OpenSansRegular style={styles.textStyle}>Date</OpenSansRegular>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateTimeContainer, {width: '40%'}]}
          activeOpacity={0.8}
          onPress={() => showDatePicker(setTimePickerVisibility)}>
          <OpenSansRegular style={styles.textStyle}>Time</OpenSansRegular>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
