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

const DATA = [
  {
    title: 'July 2021',
    data: [
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
    ],
  },
  {
    title: 'July 2022',
    data: [
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
    ],
  },
  {
    title: 'August 2021',
    data: [
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
    ],
  },
  {
    title: 'September 2021',
    data: [
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '66,783',
      },
      {
        heading: 'Refueling',
        date: 'Friday, 24',
        price: '57.000',
        distance: '69,783',
      },
    ],
  },
];

const TimeLineScreen = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <View style={styles.renderItemContainer}>
          <View style={styles.line}></View>
          <View style={styles.iconCircle}>
            <Image source={icons.gasPump} style={styles.circleIcon} />
          </View>
          <View style={styles.detailsContainer}>
            <OpenSansRegular style={styles.detailsHeadingTxt}>
              {item?.heading}
            </OpenSansRegular>
            <View style={styles.datePriceContainer}>
              <OpenSansRegular style={styles.dateTxt}>
                {item?.date}
              </OpenSansRegular>
              <OpenSansRegular style={styles.priceTxt}>
                {item?.price}
              </OpenSansRegular>
            </View>
            <View style={styles.distanceContainer}>
              <Image source={icons.gauge} style={styles.gaugeStyle} />
              <OpenSansRegular style={styles.distanceTxt}>
                {item?.distance}
              </OpenSansRegular>
            </View>
          </View>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={styles.headerContainer}>
          <View style={styles.circle}></View>
          <View style={styles.textContainer}>
            <OpenSansRegular style={styles.headerTxt}>{title}</OpenSansRegular>
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
export default TimeLineScreen;
