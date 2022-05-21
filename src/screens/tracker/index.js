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
  c_grey,
  c_black,
  c_primary_red
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
import { Form, Item, Input, Label } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CommonActions } from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import RadioButtonRN from 'radio-buttons-react-native';
import CustomHeader from '../../component/CustomHeader';

export default function SelectAddressScreen({navigation}) {
  const [country, setCountry] = useState('uk');

  const data = [
    {
      label: '',
    },
    {
      label: '',
    },
  ];

  return (
    <View style={globalStyle.mainContainer}>
      {/* <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{margin: perfectSize(20)}}>
        <Entypo name="list" size={26} color={c_primary_black} />
      </TouchableOpacity> */}

      <CustomHeader
        navigation={navigation}
        headerText={'Delivery Tracker'}
        isBack={true}
        isBlack={true}
        isDrawer={true}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{margin: perfectSize(40), marginTop: perfectSize(0)}}>
          {/** step header */}
          <View style={styles.optional}>
            <Text
              style={[globalStyle.normalText, {paddingLeft: perfectSize(20)}]}>
              Current Step: IN ROUTE
            </Text>
          </View>

          <Text
            style={{
              fontSize: 13,
              color: c_light_blue,
              textAlign: 'right',
              marginRight: perfectSize(-20),
            }}>
            View Receipt
          </Text>

          {/* <Text style={globalStyle.headerTitle}>Delivery Tracker</Text> */}
          <Text
            style={[
              globalStyle.greyText,
              {marginTop: perfectSize(10), color: c_primary_black},
            ]}>
            {'Fri 12/31/2020 5:39pm\nOrder #9223'}
          </Text>
          {/** steps */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: perfectSize(20),
                marginTop: perfectSize(10),
              }}>
              <View
                style={{
                  width: perfectSize(20),
                  height: perfectSize(20),
                  backgroundColor: c_primary_red,
                  borderRadius: perfectSize(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: c_black,
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 0.3,
                  elevation: 3,
                }}>
                <AntDesign name="check" size={18} color={c_white} />
              </View>
              <View
                style={{
                  width: perfectSize(6),
                  height: perfectSize(60),
                  backgroundColor: c_primary_red,
                  marginLeft: perfectSize(7),
                  marginTop: perfectSize(-5),
                }}
              />
              <View
                style={{
                  width: perfectSize(20),
                  height: perfectSize(20),
                  backgroundColor: c_primary_red,
                  borderRadius: perfectSize(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: c_black,
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 0.3,
                  elevation: 3,
                }}>
                <AntDesign name="check" size={18} color={c_white} />
              </View>
              <View
                style={{
                  width: perfectSize(6),
                  height: perfectSize(60),
                  backgroundColor: c_primary_red,
                  marginLeft: perfectSize(7),
                  marginTop: perfectSize(-5),
                }}
              />
              <View
                style={{
                  width: perfectSize(24),
                  height: perfectSize(24),
                  backgroundColor: c_primary_red,
                  borderRadius: perfectSize(12),
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: c_black,
                  shadowOffset: {width: 0, height: 5},
                  shadowOpacity: 0.3,
                  elevation: 3,
                  marginLeft: perfectSize(-2),
                  zIndex: 1,
                }}></View>
              <View
                style={{
                  width: perfectSize(6),
                  height: perfectSize(60),
                  backgroundColor: c_light_grey,
                  marginLeft: perfectSize(7),
                  marginTop: perfectSize(-5),
                  zIndex: 0,
                }}
              />
              <View
                style={{
                  width: perfectSize(20),
                  height: perfectSize(20),
                  backgroundColor: c_light_grey,
                  borderRadius: perfectSize(10),
                  marginTop: perfectSize(-5),
                }}></View>
            </View>
            <View
              style={{
                marginLeft: perfectSize(20),
                marginTop: perfectSize(10),
              }}>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_grey,
                }}>
                {'We received your order and\npreparation is underway'}
              </Text>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_grey,
                  marginTop: perfectSize(6),
                }}>
                {'12/31/20 5:39'}
              </Text>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_grey,
                  marginTop: perfectSize(20),
                }}>
                {'Jim is making sure your order\n is perfect.'}
              </Text>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_grey,
                  marginTop: perfectSize(6),
                }}>
                {'12/31/20 6:10pm'}
              </Text>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_black,
                  marginTop: perfectSize(26),
                }}>
                {'Your order has left the store\nand is on the way!'}
              </Text>
              <Text
                style={{
                  fontSize: perfectSize(13),
                  color: c_primary_red,
                  marginTop: perfectSize(6),
                }}>
                {'12/31/20 6:10pm'}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: c_second_grey,
            flex: 1,
            paddingHorizontal: perfectSize(30),
            paddingVertical: perfectSize(20),
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              paddingHorizontal: perfectSize(20),
              paddingVertical: perfectSize(8),
              borderRadius: perfectSize(8),
              shadowColor: c_black,
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.2,
              elevation: 3,
            }}>
            <Text
              style={{
                fontSize: perfectSize(15),
                fontWeight: 'bold',
              }}>
              Your Delivery Address
            </Text>
            <Text
              style={{
                fontSize: perfectSize(12),
                lineHeight: perfectSize(15),
                opacity: 0.8,
              }}>
              {"Kate's House\n374 Sandy Beach Rd.\nClifton Twp, PA 18424"}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              paddingHorizontal: perfectSize(20),
              paddingVertical: perfectSize(8),
              borderRadius: perfectSize(8),
              shadowColor: c_black,
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.2,
              elevation: 3,
              marginTop: perfectSize(20),
            }}>
            <Text
              style={{
                fontSize: perfectSize(15),
                fontWeight: 'bold',
              }}>
              Don't forget to rate
            </Text>
            <Text
              style={{
                fontSize: perfectSize(12),
                opacity: 0.8,
                lineHeight: perfectSize(19),
              }}>
              {'How was your experience today?'}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Entypo name="star" size={18} color={c_primary_red} />
              <Entypo name="star" size={18} color={c_primary_red} />
              <Entypo name="star" size={18} color={c_grey} />
              <Entypo name="star" size={18} color={c_grey} />
              <Entypo name="star" size={18} color={c_grey} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
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
    marginBottom: perfectSize(14)
  }
}