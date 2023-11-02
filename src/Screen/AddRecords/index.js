import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {icons} from '../../Assets/Images';
import InputField from '../../Component/InputField';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CustomButton from '../../Component/CustomButton';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {AddRefuelAction} from '../../Redux/actions';

export default function AddRecords(props) {
  const dispatch = useDispatch();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [formData, setFormData] = useState({
    odometer: '',
    gasAmount: '',
    gasType: '',
    pricePerLiter: '',
    totalCost: '',
    date: '',
    time: '',
  });

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

  const handleConfirm = value => {
    if (isDatePickerVisible) {
      setFormData({...formData, date: value});
      setDatePickerVisibility(false);
    } else {
      setTimePickerVisibility(false);
      setFormData({...formData, time: value});
    }
  };

  const handleOnSubmit = async () => {
    if (formData.odometer == '') {
      showMessage({
        message: 'Please enter odometer',
        type: 'danger',
      });
    } else if (formData.gasAmount == '') {
      showMessage({
        message: 'Please enter gas amount',
        type: 'danger',
      });
    } else if (formData.gasType == '') {
      showMessage({
        message: 'Please enter gas type',
        type: 'danger',
      });
    } else if (formData.pricePerLiter == '') {
      showMessage({
        message: 'Please enter price per liter',
        type: 'danger',
      });
    } else if (formData.totalCost == '') {
      showMessage({
        message: 'Please enter total cost',
        type: 'danger',
      });
    } else if (formData.date == '') {
      showMessage({
        message: 'Please enter date',
        type: 'danger',
      });
    } else if (formData.time == '') {
      showMessage({
        message: 'Please enter time',
        type: 'danger',
      });
    } else {
      await dispatch(AddRefuelAction(formData));
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.odometerContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.imageContainer}>
            <Image source={icons.gauge} style={styles.iconStyle} />
          </View>
          <InputField
            value={formData.odometer}
            placeholder="Odometer (mi)"
            onChangeText={text => setFormData({...formData, odometer: text})}
          />
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
          value={formData.gasAmount}
          placeholder="Gas (I)"
          inputContainerStyle={{width: '45%'}}
          onChangeText={text => setFormData({...formData, gasAmount: text})}
          keyboardType="number-pad"
        />
        <InputField
          value={formData.gasType}
          placeholder="Gas type"
          inputContainerStyle={{width: '40%'}}
          onChangeText={text => setFormData({...formData, gasType: text})}
        />
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image source={icons.dollar} style={styles.iconStyle} />
        </View>
        <InputField
          value={formData.pricePerLiter}
          placeholder="Price/L"
          inputContainerStyle={{width: '45%'}}
          keyboardType="number-pad"
          onChangeText={text => setFormData({...formData, pricePerLiter: text})}
        />
        <InputField
          value={formData.totalCost}
          placeholder="Total cost"
          inputContainerStyle={{width: '40%'}}
          keyboardType="number-pad"
          onChangeText={text => setFormData({...formData, totalCost: text})}
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
          <OpenSansRegular style={styles.textStyle}>
            {formData.date
              ? moment(formData?.date).format('DD MMM YYYY')
              : 'Date'}
          </OpenSansRegular>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.dateTimeContainer, {width: '40%'}]}
          activeOpacity={0.8}
          onPress={() => showDatePicker(setTimePickerVisibility)}>
          <OpenSansRegular style={styles.textStyle}>
            {formData.time ? moment(formData.time).format('hh:ss a') : 'Time'}
          </OpenSansRegular>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="submit" onPress={handleOnSubmit} />
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
