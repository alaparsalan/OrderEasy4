import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_primary_red,
  c_grey
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundButton from '../../component/RoundButton';
import CustomHeader from '../../component/CustomHeader';

export default function HomeScreen({navigation}) {
  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView>
        <View style={styles.headerBox}>
          {/* <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{margin: perfectSize(20), marginTop: perfectSize(14)}}>
            <Entypo name="list" size={26} color={c_primary_black} />
          </TouchableOpacity> */}
          <CustomHeader
            navigation={navigation}
            // headerText={'Your Orders'}
            isBack={true}
            isBlack={false}
            isDrawer={true}
          />

          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={{
                width: perfectSize(300),
                height: perfectSize(130),
                resizeMode: 'contain',
              }}
            />
          </View>

          <View style={{padding: perfectSize(10), alignItems: 'center'}}>
            <Text style={globalStyle.headerTitle}>Pickup From</Text>
            <Text style={[globalStyle.normalText, {fontSize: perfectSize(16)}]}>
              1340 Churn Creek Rd STE C10
            </Text>
            <Text style={[globalStyle.greyText, {fontSize: perfectSize(16)}]}>
              Redding, CA 96003
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: perfectSize(40),
            marginTop: perfectSize(20),
          }}>
          <RoundButton
            backgroundColor={c_primary_red}
            height={perfectSize(56)}
            borderRadius={perfectSize(30)}
            isShadow={true}
            title={'Start Order'}
            marginVertical={perfectSize(20)}
          />
        </View>

        <View style={{marginHorizontal: perfectSize(10)}}>
          <Image
            source={require('../../../assets/images/text.png')}
            style={{width: '100%', resizeMode: 'contain'}}
          />
        </View>

        <View style={{marginHorizontal: perfectSize(40)}}>
          <RoundButton
            onPress={() => navigation.navigate('SelectAddress')}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Delivery'}
            marginVertical={perfectSize(10)}
          />

          <RoundButton
            onPress={() => navigation.navigate('Menu')}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Dine In'}
            marginVertical={perfectSize(10)}
          />

          {/* <RoundButton
            backgroundColor={c_grey}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Catering'}
            marginVertical={perfectSize(10)}
          /> */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: c_grey, paddingHorizontal: 10},
            ]}>
            <Text style={[styles.buttonTitle, {marginRight: 10}]}>
              Scan QR Code
            </Text>
            <Icon name="qrcode" size={20} color={c_white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  resendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerBox: {
    backgroundColor: c_white,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
  },
  button: {
    // flex: 1,
    backgroundColor: '#3B5998',
    // width: '100%',
    height: perfectSize(56),
    borderRadius: perfectSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    color: c_white,
    fontSize: perfectSize(19),
    fontWeight: 'bold',
    marginLeft: perfectSize(10),
  },
};