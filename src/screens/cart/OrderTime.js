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
import DatePicker from 'react-native-date-picker';
// import {
// 	WheelPicker,
// 	TimePicker,
// 	DatePicker
// } from '@delightfulstudio/react-native-wheel-picker-android';

export default function OrderTimeScreen({navigation}) {
  const [orderType, setOrderType] = useState(false);
  const [isDatePicker, setIsDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

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
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{margin: perfectSize(20)}}>
        <AntDesign name="arrowleft" size={26} color={c_primary_black} />
      </TouchableOpacity>

      <View style={{margin: perfectSize(40), marginTop: perfectSize(0)}}>
        <Text style={[globalStyle.headerTitle, {fontSize: 25}]}>
          Order Time
        </Text>
        <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
          Where would you like your order?
        </Text>

        {/** order time */}
        <View style={styles.optional}>
          <Text
            style={[
              globalStyle.normalText,
              {paddingLeft: perfectSize(20), fontWeight: '600'},
            ]}>
            Order Time
          </Text>
        </View>

        {/** order */}
        <View style={{flexDirection: 'row', marginTop: perfectSize(20)}}>
          <RadioButtonRN
            data={data}
            selectedBtn={e =>
              // e.id === 0 ? setOrderType(false) : setOrderType(true)
              e.id == 1 ? setIsDatePicker(true) : setIsDatePicker(false)
            }
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
                ASAP
              </Text>
              <Text style={styles.radioSubText}>
                {'send my order right away!\n'}
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
        {isDatePicker ? (
          <DatePicker
            // modal
            open={isDatePicker}
            date={date}
            onConfirm={date => {
              setIsDatePicker(false);
              setDate(date);
            }}
            onCancel={() => {
              setIsDatePicker(false);
            }}
          />
        ) : null}

        {/** delivery header */}
        <View style={[styles.optional]}>
          <Text
            style={[
              globalStyle.normalText,
              {paddingLeft: perfectSize(20), fontWeight: '700'},
            ]}>
            {'Delivery Address'}
          </Text>
        </View>

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
        {/* {
					orderType &&
					<View style={{ alignItems: 'center' }}>
						<DatePicker
                date={ new Date() }
                mode="datetime"
                onDateChange={ date => console.log(date) }/>
					</View>
				} */}

        <View
          style={{
            // position: 'absolute',
            // bottom: 0,
            // left: 0,
            // right: 0,
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
            onPress={() => {
              navigation.navigate('Checkout');
            }}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(30)}
            isShadow={true}
            title={'Continue'}
            marginTop={perfectSize(30)}
          />
        </View>
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