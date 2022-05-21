import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {create} from 'react-native-pixel-perfect';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_light_grey,
  c_grey,
  c_black,
  c_light_blue,
  c_primary_red,
  c_dark_red,
  c_ligth_red,
} from '../../variables/colors';
import {getDesignDimension} from '../../variables/constants';
import {globalStyle} from '../../variables/styles';
import {Form, Item, Input, Label} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import RoundButton from '../../component/RoundButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomHeader from '../../component/CustomHeader';

export default function OrderScreen({navigation}) {
  const [promocode, setPromocode] = useState('');
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        navigation={navigation}
        headerText={'Your Orders'}
        isBack={true}
        isBlack={true}
        isDrawer={true}
      />
      <View
        style={{
          padding: perfectSize(20),
          paddingBottom: perfectSize(-10),
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[globalStyle.headerTitle, {fontSize: perfectSize(20)}]}>
            Mazzio's Redding, CA 96003
          </Text>

          <Text
            style={{
              fontSize: perfectSize(14),
              color: c_light_blue,
              marginTop: 10,
            }}
            onPress={() => {
              navigation.navigate('OrderSetting');
            }}>
            Change
          </Text>
        </View>
        <Text style={[globalStyle.midText, {color: 'black'}]}>
          {'Delivery, ASAP (45 min)'}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          {/* <RoundButton
              backgroundColor={c_primary_red}
              height={perfectSize(56)}
              borderRadius={perfectSize(5)}
              title={'Scan QR Code'}
              marginRight={perfectSize(10)}
              styles={{flex: 1}}
            /> */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              {
                backgroundColor: c_black,
                paddingHorizontal: 10,
                flex: 2 / 5,
                marginRight: 20,
              },
            ]}>
            <Text style={[styles.buttonTitle, {marginRight: 10}]}>
              View Coupons
            </Text>
          </TouchableOpacity>
          <View
            style={[
              styles.button,
              {
                backgroundColor: c_white,
                paddingLeft: 10,
                flex: 3 / 5,
                borderWidth: 0.5,
                borderColor: 'grey',
              },
            ]}>
            <Input
              // style={globalStyle.floatInput}
              placeholder={'Promo Code'}
              onChangeText={text => {
                setPromocode(text);
              }}
              value={promocode}
              placeholderTextColor={c_black}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                {
                  backgroundColor: c_primary_red,
                  width: 70,
                  flex: 0,
                },
              ]}>
              <Text style={styles.buttonTitle}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={[
            {
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              marginBottom: 200,
              letterSpacing: 0.5,
            },
          ]}>
          {'Your cart is empty'}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: c_white,
          marginBottom: perfectSize(0),
          paddingHorizontal: perfectSize(50),
          // shadowColor: c_primary_black,
          // shadowOffset: { width: 0, height: -3},
          // shadowOpacity: 0.3,
          borderTopColor: '#00000022',
          borderTopWidth: 2,
          paddingVertical: 10,
        }}>
        <RoundButton
          onPress={() => navigation.navigate('Cart')}
          backgroundColor={c_primary_red}
          height={perfectSize(56)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'Go to Menu'}
          marginVertical={perfectSize(10)}
        />
      </View>
    </View>
  );
}
let perfectSize = create(getDesignDimension());

const styles = {
  resendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: perfectSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectSize(58),
    backgroundColor: c_white,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
  },
  item: {
    backgroundColor: c_white,
    padding: perfectSize(10),
    margin: perfectSize(10),
    marginVertical: perfectSize(10),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
    borderColor: c_grey,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 1,
  },
  button: {
    flex: 1,
    backgroundColor: '#3B5998',
    // width: '100%',
    height: perfectSize(40),
    borderRadius: perfectSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    color: c_white,
    fontSize: perfectSize(17),
    fontWeight: '600',
    // marginLeft: perfectSize(10),
  },
};
