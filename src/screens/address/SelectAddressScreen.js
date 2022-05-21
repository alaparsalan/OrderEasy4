import React, { useState } from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_light_blue,
  c_light_grey,
  c_second_grey,
  c_white,
  c_grey
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import { Form, Item, Input, Label } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CommonActions } from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import RadioButtonRN from 'radio-buttons-react-native';

export default function SelectAddressScreen({ navigation }) {
  const [country, setCountry] = useState('uk');

  const data = [
    {
      label: ''
    },
    {
      label: ''
    }
  ];
  
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{margin: perfectSize(20)}}>
        <AntDesign name="arrowleft" size={26} color={c_primary_black} />
      </TouchableOpacity>

      <View style={{margin: perfectSize(40), marginTop: perfectSize(0)}}>
        <Text style={[globalStyle.headerTitle, {fontSize: 25}]}>
          Select Your Address
        </Text>
        <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
          Where would you like your order sent?
        </Text>

        {/** Saved Addresses */}
        <View style={styles.optional}>
          <Text
            style={[globalStyle.normalText, {paddingLeft: perfectSize(20)}]}>
            Saved Addresses
          </Text>
        </View>

        {/** Addresses List */}
        <View style={{flexDirection: 'row', marginTop: perfectSize(20)}}>
          <RadioButtonRN
            data={data}
            boxStyle={{
              borderColor: c_white,
              paddingTop: perfectSize(0),
              paddingBottom: perfectSize(34),
              marginTop: 0,
              height: perfectSize(80),
              alignItems: 'flex-start',
            }}
            activeColor={c_primary_black}
            circleSize={10}
          />
          <View>
            <View style={{height: perfectSize(80)}}>
              <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
                Kate's House
              </Text>
              <Text style={styles.radioSubText}>
                {'347 Sandy Beach Rd\nClifton Twp, PA 18424'}
              </Text>
            </View>
            <View>
              <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
                Office
              </Text>
              <Text style={styles.radioSubText}>
                {'50 Alberigi Dr\nJessup, PA 18434'}
              </Text>
            </View>
          </View>
        </View>

        <RoundButton
          onPress={() => {}}
          backgroundColor={c_primary_black}
          height={perfectSize(56)}
          borderRadius={perfectSize(5)}
          isShadow={true}
          title={'Continue'}
          marginTop={perfectSize(30)}
        />

        <RoundButton
          onPress={() => navigation.navigate('Address')}
          backgroundColor={c_grey}
          height={perfectSize(56)}
          borderRadius={perfectSize(5)}
          isShadow={true}
          title={'New Address'}
          marginVertical={perfectSize(20)}
        />
      </View>
    </SafeAreaView>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  resendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  optional: {
    marginVertical: perfectSize(20),
    backgroundColor: c_second_grey,
    paddingVertical: perfectSize(5),
    marginHorizontal: perfectSize(-40),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
  radioSubText: {
    fontSize: perfectSize(14),
    color: c_grey,
    marginTop: perfectSize(4),
  }
}