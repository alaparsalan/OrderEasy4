import React, {useEffect, useState, useRef} from 'react';
import {getDesignDimension} from '../../variables/constants';
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
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {Form, Item, Input, Label} from 'native-base';
import {create} from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import RoundButton from '../../component/RoundButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../component/CustomHeader';

export default function CouponsScreen({navigation}) {
  const array = ['1', '2', '3', '4', '5'];
  const [promocode, setPromocode] = useState('');
  const [promocodeSelected, setPromocodeSelected] = useState([]);

  const renderList = () => {
    return array.map((item, index) => {
      return (
        <>
          <View key={item} style={styles.item}>
            <View style={{flexDirection: 'row', height: perfectSize(140)}}>
              <View style={{flex: 3}}>
                <Text style={[globalStyle.smText, {fontWeight: 'bold'}]}>
                  Triple Play Bundle
                </Text>
                <Text
                  style={[
                    globalStyle.normalText,
                    {color: c_primary_red, fontWeight: 'bold'},
                  ]}>
                  {'$20'}
                </Text>
                <Text
                  style={{fontSize: perfectSize(10), color: c_primary_black}}>
                  {
                    'Any medium 2-topping pizza thin or Original crust, \nAny Calzone ring & 9” Cheese dippers.'
                  }
                </Text>
                <Text
                  style={{
                    fontSize: perfectSize(10),
                    color: c_grey,
                    fontStyle: 'italic',
                  }}>
                  {
                    'Not valid with other promotions or coupons.\nOffer good for Dine-in, Takeout or Delivery.'
                  }
                </Text>
                <View
                  style={{
                    backgroundColor: c_grey,
                    padding: perfectSize(5),
                    paddingVertical: perfectSize(2),
                    marginRight: perfectSize(30),
                    marginTop: perfectSize(8),
                  }}>
                  <Text
                    style={{
                      fontSize: perfectSize(12),
                      fontWeight: 'bold',
                      color: c_white,
                    }}>
                    Promo Code 8729
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: perfectSize(10),
                    marginTop: perfectSize(10),
                    textAlign: 'right',
                    marginRight: perfectSize(40),
                  }}>
                  EXPIRES 5-26-22
                </Text>
              </View>
              <View style={{flex: 1.5, overflow: 'hidden'}}>
                <Image source={require('../../../assets/images/sample1.jpg')} />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                // selectPromo(index);
              }}
              style={{
                position: 'absolute',
                backgroundColor: promocodeSelected.includes(index)
                  ? 'rgba(255,255,255, 0.5)'
                  : '#00000000',
                height: '110%',
                width: '105%',
                // flex: 1,
              }}>
              <TouchableOpacity
                onPress={() => {
                  selectPromo(index);
                }}
                style={{
                  alignSelf: 'flex-end',
                  // flex: 1,
                }}>
                {promocodeSelected.includes(index) ? (
                  <MaterialCommunityIcons
                    name="checkbox-marked"
                    size={30}
                    color={'black'}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={30}
                    color={'black'}
                  />
                )}
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </>
      );
    });
  };
  const selectPromo = index => {
    let data = [...promocodeSelected];
    if (data.includes(index)) {
      let index_to_edit = data.indexOf(index);
      data.splice(index_to_edit, 1);
    } else {
      data.push(index);
    }
    setPromocodeSelected(data);
  };
  return (
    <View style={globalStyle.mainContainer}>
      {/* <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="list" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>Coupons</Text>

          <TouchableOpacity>
            <Ionicons name="md-search-sharp" size={20} color={c_primary_black} />
          </TouchableOpacity>
        </View> */}
      <CustomHeader
        navigation={navigation}
        headerText={'Coupons'}
        isBack={true}
        isBlack={true}
        isDrawer={true}
        rightIcon={() => {
          return (
            <TouchableOpacity
              onPress={() => {
                // closeModal();
              }}
              activeOpacity={0.8}>
              <MaterialCommunityIcons name="cart" size={26} color={'white'} />
            </TouchableOpacity>
          );
        }}
      />

      <View
        style={{
          paddingTop: perfectSize(20),
          // backgroundColor: c_ligth_red,
          paddingLeft: perfectSize(20),
          marginBottom: perfectSize(20),
        }}>
        <Text
          style={[
            globalStyle.midText,
            {color: c_black, fontWeight: '600', marginLeft: -10},
          ]}>
          Select a coupon to add it to your cart
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 10}}>
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
            {backgroundColor: c_black, paddingHorizontal: 10, flex: 2 / 5},
          ]}>
          <Text style={[styles.buttonTitle, {marginRight: 10}]}>
            Scan QR Code
          </Text>
          <Icon name="qrcode" size={20} color={c_white} />
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
              marginRight: 10,
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

      {/** List */}
      <ScrollView style={{marginBottom: 70}}>{renderList()}</ScrollView>
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
        }}>
        <RoundButton
          onPress={() => navigation.navigate('Cart')}
          backgroundColor={c_primary_black}
          height={perfectSize(56)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'View Order'}
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
    borderStyle: 'dashed',
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
    marginLeft: perfectSize(10),
    flexDirection: 'row',
  },
  buttonTitle: {
    color: c_white,
    fontSize: perfectSize(17),
    fontWeight: '600',
    // marginLeft: perfectSize(10),
  },
};
