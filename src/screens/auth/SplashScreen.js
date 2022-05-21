import React, {useEffect, useState, useRef} from 'react';
import {getDesignDimension} from '../../variables/constants';
import {
  c_primary_black,
  c_light_blue,
  c_light_grey,
} from '../../variables/colors';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import {Form, Item, Input, Label} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {CommonActions} from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import {callApi} from '../../api';
import API_CONFIG from '../../api/api_url';

export default function SplashScreen({navigation}) {
  const [splashImage, setSplashImage] = useState('');
  useEffect(() => {
    getSplash();
  }, []);
  const getSplash = async () => {
    try {
      let params = {
        appusername: 'precision',
        apppassword: 'precision_arc$1',
        loggedinusername: 'developer2@precisionpos.com',
        loggedinpassword: 'abcd1234',
        businessid: 178,
        storefrontcd: 218,
        sessionid: 0,
      };
      let response = await callApi(
        API_CONFIG.GET_SPLASH,
        params,
        API_CONFIG.POST,
        null,
      );
      console.log('getSplash: ', JSON.stringify(response.body, null, 2));
      setSplashImage(response.body.data.imageURLSplashScreen);
      // setTimeout(
      //   () =>
      //     navigation.dispatch(
      //       CommonActions.reset({
      //         index: 0,
      //         routes: [
      //           {
      //             name: 'Main',
      //           },
      //         ],
      //       }),
      //     ),
      //   4000,
      // );
    } catch (err) {
      console.log('err: ', err);
    }
  };
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'black'
        }}>
        <Image
          source={{
            uri:
              'https://olo.o-ez.com/PrecisionPOSOnline/nearras/viewCustomImageFile?fileNameOrig=pizza-3000274_960_720_1539369383320.jpg',
          }}
          style={{height: 200, width: 200}}
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
};
