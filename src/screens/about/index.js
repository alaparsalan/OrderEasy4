import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_light_blue,
  c_grey,
  c_light_grey,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
import CustomHeader from '../../component/CustomHeader';

export default function About({navigation}) {
  const HOURS = [
    {
      day: 'Sun',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Mon',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Tue',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Wed',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Thu',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Fri',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
    {
      day: 'Sat',
      delivery: '10:00am - 11:00 pm',
      pickup: '10:00am - 11:00pm',
    },
  ];

  const hoursList = () => {
    return HOURS.map(item => {
      return (
        <View key={item.day} style={styles.dayHour}>
          <Text style={globalStyle.normalText}>{item.day}</Text>
          <View>
            <Text style={globalStyle.midText}>
              {'Delivery' + item.delivery}
            </Text>
            <Text style={[globalStyle.midText, {color: c_grey}]}>
              {'Pcikup' + item.pickup}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={globalStyle.mainContainer}>
      {/* <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
            About
          </Text>
          <Text></Text>
        </View> */}
      <CustomHeader
        navigation={navigation}
        headerText={'About'}
        isBack={true}
        isBlack={true}
      />

      {/** List */}
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: perfectSize(20),
            paddingVertical: perfectSize(30),
          }}>
          <Text style={[globalStyle.headerTitle, {fontSize: perfectSize(20)}]}>
            Mazzio's Redding, CA 96003
          </Text>
          <Text
            style={[
              globalStyle.midText,
              {color: c_grey, marginTop: perfectSize(12)},
            ]}>
            {
              'American, Indian, Lunch, Dinner, Pizza, and Wings, Calzone, Pizza Twist, Salads'
            }
          </Text>
        </View>

        <View
          style={{
            backgroundColor: c_light_grey,
            width: '100%',
            height: perfectSize(100),
          }}
        />
        {/* <MapView
            style={{ backgroundColor: 'red', width: '100%', height: perfectSize(100) }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}

        {/** phone number */}
        <Text
          style={{
            padding: perfectSize(18),
            fontSize: perfectSize(18),
            color: c_light_blue,
          }}>
          (855) 272-6372
        </Text>

        {/** Open Hours */}
        <View style={styles.optional}>
          <Text
            style={[globalStyle.normalText, {paddingLeft: perfectSize(20)}]}>
            Open Hours
          </Text>
        </View>

        {/** Open hours list */}
        {hoursList()}
      </ScrollView>
    </View>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: perfectSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectSize(58),
    backgroundColor: c_white,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
  optional: {
    backgroundColor: c_second_grey,
    paddingVertical: perfectSize(5),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  dayHour: {
    paddingHorizontal: perfectSize(20),
    paddingVertical: perfectSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: perfectSize(1),
    borderColor: c_light_grey
  }
}