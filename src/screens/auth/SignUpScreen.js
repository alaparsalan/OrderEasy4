import React, {useEffect, useState, useRef} from 'react';
import {getDesignDimension} from '../../variables/constants';
import {
  c_primary_black,
  c_light_grey,
  c_light_blue,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import {Form, Item, Input, Label, CheckBox, Body} from 'native-base';
import {CommonActions} from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {callApi} from '../../api';
import API_CONFIG from '../../api/api_url';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignUpScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [term, setTerm] = useState(false);
  const [agree, setAgree] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState('');
  const [lastNameErrorText, setLastNameErrorText] = useState('');
  const [emailIdErrorText, setEmailIdErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [mobileErrorText, setMobileErrorText] = useState('');
  const validate = () => {
    let error_flag = true;
    if (emailId == '') {
      setEmailIdErrorText('Please Enter Email');
      error_flag = false;
    } else if (!validateEmail()) {
      setEmailIdErrorText('Sorry, your email is invalid.');
      error_flag = false;
    }
    if (mobile == '') {
      setMobileErrorText('Please Enter Phone number');
      error_flag = false;
    }
    if (password == '') {
      setPasswordErrorText('Please Enter Password');
      error_flag = false;
    } else if (password.length < 8) {
      setPasswordErrorText('Please Enter minimum 8 character');
      error_flag = false;
    }
    if (firstName == '') {
      setFirstNameErrorText('Please Enter First name');
      error_flag = false;
    }
    if (lastName == '') {
      setLastNameErrorText('Please Enter Last name');
      error_flag = false;
    }
    if (error_flag) {
      // setIsLoading(true);
      RegisterRequest();
    }
  };
  const validateEmail = () => {
    const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return EMAIL_PATTERN.test(emailId);
  };
  const RegisterRequest = async () => {
    let param = {
      customerCD: 0,
      firstName: firstName,
      lastName: lastName,
      mobilePhone: mobile,
      emailAddress: emailId,
      password: password,
      sendTextAlerts: agree,
      sendEmailAlerts: agree,
      agreesToTerms: term,
      hardwareType: 2,
      joinLoyalty: true,
      appusername: 'precision',
      apppassword: 'precision_arc$1',
      loggedinusername: '',
      loggedinpassword: '',
      businessid: 178,
      storefrontcd: 218,
      sessionid: 0,
    };
    try {
      let response = await callApi(
        API_CONFIG.REGISTER,
        param,
        API_CONFIG.POST,
        null,
      );
      console.log('RegisterRequest: ', JSON.stringify(response.body, null, 2));
      if (response.body.data.opsuccess) {
        Alert.alert(
          'Info',
          'Your account has been successfully created.s',
          [
            {
              text: 'OK',
              onPress: () => {
                // navigation.dispatch(
                //   CommonActions.reset({
                //     index: 0,
                //     routes: [
                //       {
                //         name: 'Main',
                //       },
                //     ],
                //   }),
                // );
                navigation.navigate('Activation');
              },
            },
          ],
          {
            cancelable: false,
          },
        );
        // dispatch(setToken(response.body.data.token));
        // getAccountInformation(response.body.data.token);
      } else if (response.body.data.opsuccess == false) {
        // setEmailIdErrorText(I18n.t('login.invalid'));
        // setPasswordErrorText(I18n.t('login.invalid'));
        // setIsLoading(false);
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <KeyboardAvoidingScrollView>
        <View style={{padding: perfectSize(40)}}>
          <Text style={globalStyle.headerTitle}>Sign Up</Text>

          <Form
            style={[globalStyle.floatForm, {marginVertical: perfectSize(30)}]}>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>First Name</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your first name'}
                onChangeText={text => {
                  setFirstName(text);
                  setFirstNameErrorText('');
                }}
                value={firstName}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            {firstNameErrorText == '' ? null : (
              <Text style={[globalStyle.errorText]}>{firstNameErrorText}</Text>
            )}
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Last Name</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your last name'}
                onChangeText={text => {
                  setLastName(text);
                  setLastNameErrorText('');
                }}
                value={lastName}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            {lastNameErrorText == '' ? null : (
              <Text style={[globalStyle.errorText]}>{lastNameErrorText}</Text>
            )}
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Phone</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your phone number'}
                onChangeText={text => {
                  setMobile(text);
                  setMobileErrorText('');
                }}
                value={mobile}
                placeholderTextColor={c_light_grey}
              />
            </Item>
            {mobileErrorText == '' ? null : (
              <Text style={[globalStyle.errorText]}>{mobileErrorText}</Text>
            )}
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Email</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your email address'}
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
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Password</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your password'}
                onChangeText={text => {
                  setPassword(text);
                  setPasswordErrorText('');
                }}
                secureTextEntry={!passwordVisible}
                value={password}
                placeholderTextColor={c_light_grey}
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

          <View style={{flexDirection: 'row', marginTop: perfectSize(30)}}>
            <CheckBox
              checked={term}
              color={c_primary_black}
              style={styles.checkbox}
              onPress={() => setTerm(!term)}
            />
            <Body>
              <Text style={styles.text}>
                I agree to the{' '}
                <Text style={styles.terms}>Terms of Services </Text>
                and <Text style={styles.terms}>Privacy Policy.</Text>
              </Text>
            </Body>
          </View>
          <View style={{flexDirection: 'row', marginTop: perfectSize(10)}}>
            <CheckBox
              checked={agree}
              color={c_primary_black}
              style={styles.checkbox}
              onPress={() => setAgree(!agree)}
            />
            <Body>
              <Text style={styles.text}>
                I agree to the receive marketing and promotions.
              </Text>
            </Body>
          </View>

          <RoundButton
            onPress={() => navigation.navigate('Activation')}
            // onPress={() => validate()}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Continue'}
            marginVertical={perfectSize(30)}
          />

          <View style={styles.haveAccount}>
            <Text style={[globalStyle.greyText, {fontSize: perfectSize(20)}]}>
              Have an Account?
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'SignIn',
                      },
                    ],
                  }),
                )
              }>
              <Text
                style={[
                  globalStyle.headerTitle,
                  {fontSize: perfectSize(20), marginLeft: perfectSize(10)},
                ]}>
                Sign In
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
  haveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  terms: {
    fontSize: perfectSize(18),
    fontWeight: 'bold',
    color: c_primary_black,
  },
  text: {
    fontSize: perfectSize(18),
    color: c_primary_black,
    lineHeight: perfectSize(22),
    paddingLeft: perfectSize(20),
  },
  checkbox: {
    width: 25,
    height: 25,
    fontSize: 20,
    borderRadius: perfectSize(3),
    marginLeft: -10,
  },
};
