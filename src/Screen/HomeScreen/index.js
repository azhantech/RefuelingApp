import {
  View,
  Text,
  SectionList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {vh} from '../../Utils/dimensions';
import {icons} from '../../Assets/Images';
import TextHeader from '../../Component/TextHeader';
import {colors} from '../../Utils/appTheme';
import OpenSansRegular from '../../Component/Texts/OpenSansRegular';
import RowTextContainer from '../../Component/RowTextContainer';
export default function HomeScreen(props) {
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
              value={'6.458'}
            />
            <RowTextContainer
              icon={icons.chartGraph}
              text={'Last fuel Consumption'}
              unit={'ml/l'}
              value={'6.458'}
            />
            <RowTextContainer
              icon={icons.chartGraph}
              text={'Last fuel price'}
              unit={'ml/l'}
              value={'6.458'}
            />
            <View style={styles.dateContainer}>
              <OpenSansRegular>2021-09-24 7 days ago</OpenSansRegular>
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
              value={'$ 0.00'}
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
              value={'6.458'}
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
