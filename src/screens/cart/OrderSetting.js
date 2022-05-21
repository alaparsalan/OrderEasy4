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
import CustomHeader from '../../component/CustomHeader';

export default function OrderSetting({navigation}) {
  const [orderType, setOrderType] = useState(0);

  const data = [
    {
      id: 0,
      label: '',
    },
    {
      id: 1,
      label: '',
    },
  ];

  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      {/* <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color={c_primary_black} />
        </TouchableOpacity>

        <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
          Order Settings
        </Text>
        <Text></Text>
      </View> */}
      <CustomHeader
        navigation={navigation}
        headerText={'Order Settings'}
        isBlack={true}
        leftIcon={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              activeOpacity={0.8}>
              <AntDesign name="close" size={26} color={c_white} />
            </TouchableOpacity>
          );
        }}
      />

      <View style={{margin: perfectSize(40), marginTop: perfectSize(20)}}>
        {/** Group Button */}
        <View style={styles.groupButton}>
          <TouchableOpacity
            onPress={() => setOrderType(0)}
            style={[
              styles.groupButtonItem,
              {
                backgroundColor:
                  orderType === 0 ? c_primary_black : 'transparent',
              },
            ]}>
            <Text
              style={[
                globalStyle.midText,
                {color: orderType === 0 ? c_white : c_primary_black},
              ]}>
              Delivery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOrderType(1)}
            style={[
              styles.groupButtonItem,
              styles.splitBorder,
              {
                backgroundColor:
                  orderType === 1 ? c_primary_black : 'transparent',
              },
            ]}>
            <Text
              style={[
                globalStyle.midText,
                {color: orderType === 1 ? c_white : c_primary_black},
              ]}>
              Dine In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOrderType(2)}
            style={[
              styles.groupButtonItem,
              {
                backgroundColor:
                  orderType === 2 ? c_primary_black : 'transparent',
              },
            ]}>
            <Text
              style={[
                globalStyle.midText,
                {color: orderType === 2 ? c_white : c_primary_black},
              ]}>
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        {/** order time */}
        <View style={styles.optional}>
          <Text
            style={[
              globalStyle.normalText,
              {paddingLeft: perfectSize(20), fontWeight: '700'},
            ]}>
            Order Time
          </Text>
        </View>

        {/** order List */}
        <View style={{flexDirection: 'row', marginTop: perfectSize(20)}}>
          <RadioButtonRN
            data={data}
            boxStyle={{
              borderColor: c_white,
              paddingTop: perfectSize(0),
              paddingBottom: perfectSize(20),
              marginTop: 0,
              height: perfectSize(70),
              alignItems: 'flex-start',
            }}
            activeColor={c_primary_black}
            circleSize={10}
          />
          <View>
            <View style={{height: perfectSize(70)}}>
              <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
                ASAP
              </Text>
              <Text style={styles.radioSubText}>
                {'Send my order right away!'}
              </Text>
            </View>
            <View>
              <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
                Scheduled Time
              </Text>
              <Text style={styles.radioSubText}>
                {'I would like to choose the time.'}
              </Text>
            </View>
          </View>
        </View>

        {/** delivery header */}
        <View style={[styles.optional, {marginTop: -10}]}>
          <Text
            style={[
              globalStyle.normalText,
              {paddingLeft: perfectSize(20), fontWeight: '700'},
            ]}>
            {orderType !== 2 ? 'Delivery Address' : 'Store Address'}
          </Text>
        </View>

        {orderType !== 1 && orderType !== 2 ? (
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
        ) : (
          <View
            style={{paddingLeft: perfectSize(20), marginTop: perfectSize(20)}}>
            <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
              Kate's House
            </Text>
            <Text style={styles.radioSubText}>
              {'347 sandy Beach Rd\nClifton Twwp, PA 18424'}
            </Text>
          </View>
        )}

        <RoundButton
          onPress={() => {
            orderType !== 2
              ? navigation.navigate('Address')
              : navigation.navigate('Search');
          }}
          backgroundColor={c_grey}
          height={perfectSize(56)}
          borderRadius={perfectSize(5)}
          isShadow={true}
          title={orderType !== 2 ? 'New Address' : 'Change Store'}
          marginTop={perfectSize(30)}
        />
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
          paddingVertical: perfectSize(10),
        }}>
        <RoundButton
          onPress={() => navigation.navigate('Cart')}
          backgroundColor={c_primary_black}
          height={perfectSize(45)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'Update'}
          marginVertical={perfectSize(10)}
        />
      </View>
    </SafeAreaView>
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
		marginTop: perfectSize(20),
		marginBottom: perfectSize(10),
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
		marginBottom: perfectSize(14)
	},
  groupButton: {
    marginTop: perfectSize(10),
    borderWidth: 1,
    borderColor: c_light_grey,
    borderRadius: perfectSize(30),
    height: perfectSize(36),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  groupButtonItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitBorder: {
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: c_light_grey
  },
}