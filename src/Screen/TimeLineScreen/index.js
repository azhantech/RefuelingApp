import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import styles from './styles';
import {icons} from '../../Assets/Images';
import {useSelector} from 'react-redux';
import moment from 'moment';

const TimeLineScreen = props => {
  const [timelineData, setTimeLineData] = useState([]);
  const data = useSelector(state => state?.AddRefuelingRecords?.refuelRecords);
  const getData = () => {
    if (data?.length) {
      const recordsByMonth = {};

      data.forEach(record => {
        const date = moment(record.date, 'YYYY-MM-DD').toDate(); // Convert the date string to a Date object
        const month = date.getMonth();
        const year = date.getFullYear();
      
        const key = `${year}-${month + 1}`;
      
        if (!recordsByMonth[key]) {
          recordsByMonth[key] = [];
        }
      
        recordsByMonth[key].push(record);
      });
      const groupedData = Object.keys(recordsByMonth).map(key => ({
        title: key,
        data: recordsByMonth[key],
      }));
      setTimeLineData(groupedData);
    }
  };
  useEffect(() => {
    getData();
  }, [data?.length]);
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={timelineData}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View style={styles.renderItemContainer}>
            <View style={styles.line}></View>
            <View style={styles.iconCircle}>
              <Image source={icons.gasPump} style={styles.circleIcon} />
            </View>
            <View style={styles.detailsContainer}>
              <OpenSansRegular style={styles.detailsHeadingTxt}>
                Refueling
              </OpenSansRegular>
              <View style={styles.datePriceContainer}>
                <OpenSansRegular style={styles.dateTxt}>
                  {moment(item?.date).format('DD MMM YYYY')}
                </OpenSansRegular>
                <OpenSansRegular style={styles.priceTxt}>
                  ${item?.totalCost}
                </OpenSansRegular>
              </View>
              <View style={styles.distanceContainer}>
                <Image source={icons.gauge} style={styles.gaugeStyle} />
                <OpenSansRegular style={styles.distanceTxt}>
                  {item?.gasAmount + ' ' + item?.odometer}
                </OpenSansRegular>
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.headerContainer}>
            <View style={styles.circle}></View>
            <View style={styles.textContainer}>
              <OpenSansRegular style={styles.headerTxt}>
                {title}
              </OpenSansRegular>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={() => props.navigation.navigate('AddRecords')}>
        <OpenSansRegular style={styles.addText}>+</OpenSansRegular>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default TimeLineScreen;
