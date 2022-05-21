import React, {useEffect, useState, useRef} from 'react';
import {getDesignDimension} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_grey,
  c_light_blue,
  c_light_grey,
  c_primary_red,
} from '../../variables/colors';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import {Form, Item, Input, Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CommonActions} from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {callApi} from '../../api';
import API_CONFIG from '../../api/api_url';

export default function SignInScreen({navigation}) {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailIdErrorText, setEmailIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const LoginRequest = async () => {
    let param = {
      appusername: 'precision',
      apppassword: 'precision_arc$1',
      // loggedinusername: emailId,
      // loggedinpassword: password,
      loggedinusername: 'developer2@precisionpos.com',
      loggedinpassword: 'abcd1234',
      businessid: 178,
      storefrontcd: 218,
      sessionid: 0,
    };
    try {
      let response = await callApi(
        API_CONFIG.LOGIN,
        param,
        API_CONFIG.POST,
        null,
      );
      console.log('LoginRequest: ', JSON.stringify(response.body, null, 2));
      if (response.body.data.opsuccess) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'Main',
              },
            ],
          }),
        );
        // dispatch(setToken(response.body.data.token));
        // getAccountInformation(response.body.data.token);
      } else if (response.body.data.opsuccess == false) {
        // setEmailIdErrorText(I18n.t('login.invalid'));
        // setPasswordErrorText(I18n.t('login.invalid'));
        // setIsLoading(false);
        Alert.alert(
          'Info',
          'Invalid credentials',
          [
            {
              text: 'OK',
            },
          ],
          {
            cancelable: false,
          },
        );
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };
  const validate = () => {
    let error_flag = true;
    if (emailId == '') {
      setEmailIdErrorText('Please Enter Email');
      error_flag = false;
    } else if (!validateEmail()) {
      setEmailIdErrorText('Sorry, your email is invalid.');
      error_flag = false;
    }
    if (password == '') {
      setPasswordErrorText('Please Enter Password');
      error_flag = false;
    } else if (password.length < 8) {
      setPasswordErrorText('Please Enter minimum 8 character');
      error_flag = false;
    }
    if (error_flag) {
      // console.log('emailId: ', emailId);
      // console.log('password: ', password);
      // navigation.navigate(NAVIGATION.DASHBOARD);
      setIsLoading(true);
      LoginRequest();
    }
  };
  const validateEmail = () => {
    const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return EMAIL_PATTERN.test(emailId);
  };
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <KeyboardAvoidingScrollView>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: perfectSize(30),
            paddingTop: perfectSize(50),
          }}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{
              width: perfectSize(300),
              height: perfectSize(130),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{paddingHorizontal: perfectSize(40)}}>
          <Text style={globalStyle.headerTitle}>Sign In</Text>
          <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
            Hi there! Nice to see you again.
          </Text>
          <Form style={globalStyle.floatForm}>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Email</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your email'}
                onChangeText={text => {
                  setEmailId(text);
                  setEmailIdErrorText('');
                }}
                value={emailId}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            {emailIdErrorText == '' ? null : (
              <Text style={[globalStyle.errorText]}>{emailIdErrorText}</Text>
            )}
            <Item
              stackedLabel
              style={[globalStyle.floatItem, {marginTop: perfectSize(14)}]}>
              <Label style={{color: c_light_blue}}>Password</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your password'}
                placeholderTextColor={c_light_grey}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordErrorText('');
                }}
                secureTextEntry={!passwordVisible}
                value={password}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisible(!passwordVisible);
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  // paddingTop: 20,
                  bottom: 5,
                }}
                activeOpacity={0.8}>
                <Icon
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  size={26}
                  color={c_primary_black}
                />
              </TouchableOpacity>
            </Item>
            {passwordErrorText == '' ? null : (
              <Text style={[globalStyle.errorText]}>{passwordErrorText}</Text>
            )}
          </Form>

          <RoundButton
            // onPress={() => validate()}
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Main',
                    },
                  ],
                }),
              )
            }
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Sign In'}
            marginVertical={perfectSize(30)}
          />

          <Text style={[globalStyle.greyText, {textAlign: 'center'}]}>
            or use another account option
          </Text>

          <View style={{flexDirection: 'row', marginTop: perfectSize(30)}}>
            {/* <RoundButton
              backgroundColor={c_primary_red}
              height={perfectSize(56)}
              borderRadius={perfectSize(5)}
              title={'Scan QR Code'}
              marginRight={perfectSize(10)}
              styles={{flex: 1}}
            /> */}

            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: c_primary_red, paddingHorizontal: 10},
              ]}>
              <Text style={[styles.buttonTitle, {marginRight: 10}]}>
                Scan QR Code
              </Text>
              <Icon name="qrcode" size={20} color={c_white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="facebook" size={20} color={c_white} />
              <Text style={styles.buttonTitle}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgot}>
            <Text style={[globalStyle.greyText, {fontSize: perfectSize(20)}]}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'SignUp',
                      },
                    ],
                  }),
                )
              }>
              <Text
                style={[globalStyle.headerTitle, {fontSize: perfectSize(20)}]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  forgot: {
    flexDirection: 'row',
    marginTop: perfectSize(30),
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#3B5998',
    width: '100%',
    height: perfectSize(56),
    borderRadius: perfectSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: perfectSize(10),
    flexDirection: 'row',
  },
  buttonTitle: {
    color: c_white,
    fontSize: perfectSize(19),
    fontWeight: 'bold',
    marginLeft: perfectSize(10),
  },
};
