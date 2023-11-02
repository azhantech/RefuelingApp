import {
  View,
  Text,
  SectionList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {vh} from '../../Utils/dimensions';
import {icons} from '../../Assets/Images';
import TextHeader from '../../Component/TextHeader';
import {colors} from '../../Utils/appTheme';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import RowTextContainer from '../../Component/RowTextContainer';
import {useSelector} from 'react-redux';
export default function HomeScreen(props) {
  const data = useSelector(state => state?.AddRefuelingRecords?.refuelRecords);
  const [avgFuel, setAvgFuel] = useState('');
  const [lastFuel, setLastFuel] = useState('');
  const [lastPrice, setLastPrice] = useState('');
  const [prevMonthCost, setPrevMonthCost] = useState('');
  const [currentMonthCost, setcurrentMonthCost] = useState('');

  const getData = () => {
    if (data?.length) {
      calculateAverageFuel(data);
      calculateLastFuel(data);
      calculateLastFuelPrice(data);
      calculatecurrenAndLastMonthFuel(data);
    }
  };
  useEffect(() => {
    getData();
  }, [data?.length]);

  const calculateAverageFuel = records => {
    const totalFuel = records.reduce(
      (sum, record) => sum + parseFloat(record.gasAmount),
      0,
    );
    setAvgFuel(totalFuel / records.length);
    console.log('total Fuel ====>');
  };

  const calculateLastFuel = records => {
    const lastRecord = records[records.length - 1];
    setLastFuel(parseFloat(lastRecord.gasAmount));
  };

  const calculateLastFuelPrice = records => {
    const lastRecord = records[records.length - 1];
    setLastPrice(
      (
        parseFloat(lastRecord.totalCost) / parseFloat(lastRecord.gasAmount)
      ).toFixed(2),
    );

    // .toFixed(2);
  };
  const calculatecurrenAndLastMonthFuel = groupedData => {
    const calculateTotalFuelCost = records => {
      return records.reduce(
        (total, record) => total + parseFloat(record.totalCost),
        0,
      );
    };

    // Get the current date
    const today = moment();

    // Calculate the start of the current month and the previous month
    const startOfCurrentMonth = today.startOf('month');
    const startOfPreviousMonth = startOfCurrentMonth.subtract(1, 'month');

    // Calculate fuel cost for the current month
    const currentMonthData = groupedData.find(group => {
      const groupDate = moment(group.title, 'YYYY-MM');
      return groupDate.isSame(startOfCurrentMonth, 'month');
    });

    // Calculate fuel cost for the previous month
    const previousMonthData = groupedData.find(group => {
      const groupDate = moment(group.title, 'YYYY-MM');
      return groupDate.isSame(startOfPreviousMonth, 'month');
    });

    if (currentMonthData) {
      const currentMonthFuelCost = calculateTotalFuelCost(
        currentMonthData.data,
      );
      setcurrentMonthCost(currentMonthFuelCost);
    }

    if (previousMonthData) {
      const previousMonthFuelCost = calculateTotalFuelCost(
        previousMonthData.data,
      );
      // console.log(`Previous Month Fuel Cost: ${previousMonthFuelCost}`);
      setPrevMonthCost(previousMonthFuelCost);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.GapContainer}>
          <TextHeader text={'Gas'} icons={icons.gasPump} />
          <View style={styles.GasContainer}>
            <RowTextContainer
              icon={icons.chartGraph}
              text={'Average fuel consumption'}
              unit={'ml/l'}
              value={avgFuel != '' ? avgFuel : 0}
            />
            <RowTextContainer
              icon={icons.chartGraph}
              text={'Last fuel Consumption'}
              unit={'ml/l'}
              value={lastFuel != '' ? lastFuel : 0}
            />
            <RowTextContainer
              icon={icons.chartGraph}
              text={'Last fuel price'}
              unit={'ml/l'}
              value={lastPrice != '' ? lastPrice : 0}
            />
            <View style={styles.dateContainer}>
              <OpenSansRegular>
                {moment().format('DD MMM YYYY')}
              </OpenSansRegular>
            </View>
          </View>
        </View>
        <View style={[styles.GapContainer, {height: vh * 35}]}>
          <TextHeader text={'Costs'} icons={icons.dollar} />

          <View style={[styles.GasContainer, {height: vh * 25}]}>
            <OpenSansRegular style={styles.subHeading}>
              This Month
            </OpenSansRegular>
            <RowTextContainer
              icon={icons.gasPump}
              text={'Gas'}
              value={`$ ${currentMonthCost != '' ? currentMonthCost : '0.00'}`}
            />
            <RowTextContainer
              icon={icons.dollar}
              text={'Other costs'}
              value={'$ 0.00'}
            />
            <OpenSansRegular style={styles.subHeading}>
              Previous Month
            </OpenSansRegular>
            <RowTextContainer
              icon={icons.gasPump}
              text={'Last fuel price'}
              unit={'ml/l'}
              value={`$ ${prevMonthCost != '' ? prevMonthCost : '0.00'}`}
            />
            <RowTextContainer
              icon={icons.dollar}
              text={'Other costs'}
              value={'$ 0.00'}
            />
          </View>
        </View>
        <View style={[styles.GapContainer, {height: vh * 26}]}>
          <TextHeader
            text={'Last entries'}
            icons={icons.chartGraph}
            headerContainer={{width: '50%'}}
            textContainer={{width: '60%'}}
          />

          <View style={[styles.GasContainer, {height: vh * 18}]}>
            <OpenSansRegular style={styles.subHeading}>
              September 2021
            </OpenSansRegular>
            <RowTextContainer
              icon={icons.gasPump}
              text={'Refueling'}
              value={'$57.00'}
            />
            <OpenSansRegular style={styles.subHeading}>
              July 2021
            </OpenSansRegular>
            <RowTextContainer
              icon={icons.gasPump}
              text={'Refueling'}
              value={'$52.38'}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('AddRecords')}>
        <OpenSansRegular style={styles.addText}>+</OpenSansRegular>
      </TouchableOpacity>
    </View>
  );
}
