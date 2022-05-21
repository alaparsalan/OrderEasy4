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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyAccount({navigation}) {
  const [promocode, setPromocode] = useState('');
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        navigation={navigation}
        headerText={'My Account'}
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
          padding: perfectSize(20),
          // paddingBottom: perfectSize(-10),
          backgroundColor: 'white',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: perfectSize(20),
            marginBottom: perfectSize(40),
          }}>
          <Icon name="account-circle-outline" color={c_grey} size={60} />
          <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
            Johanna Doe
          </Text>
          <Text style={[globalStyle.smText, {color: c_grey}]}>
            johanna@company.com
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.menuContainer}
          onPress={() => {
            // navigation.navigate('About');
          }}>
          <Text style={styles.menuItem}>Saved Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.menuContainer}
          onPress={() => {
            // navigation.navigate('About');
          }}>
          <Text style={styles.menuItem}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.menuContainer}
          onPress={() => {
            // navigation.navigate('About');
          }}>
          <Text style={styles.menuItem}>My Loyalty</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.menuContainer}
          onPress={() => {
            // navigation.navigate('About');
          }}>
          <Text style={styles.menuItem}>Acount Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.menuContainer,
            {borderBottomWidth: 0, paddingBottom: 0},
          ]}
          onPress={() => {
            // navigation.navigate('About');
          }}>
          <Text style={styles.menuItem}>Delivery Tracker</Text>
        </TouchableOpacity>
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
          backgroundColor={c_black}
          height={perfectSize(56)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'View Menu'}
          marginVertical={perfectSize(10)}
        />
      </View>
    </View>
  );
}
let perfectSize = create(getDesignDimension());

const styles = {
  menuContainer: {
    borderColor: c_grey,
    borderBottomWidth: 0.5,
    paddingVertical: 15,
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
  menuItem: {
    color: c_black,
    fontSize: perfectSize(17),
    fontWeight: '400',
  },
};
