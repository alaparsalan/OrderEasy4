import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_light_blue,
  c_light_grey
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
import Icon from 'react-native-vector-icons/Feather';
import { CommonActions } from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';

export default function ActivationScreen({ navigation }) {
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{margin: perfectSize(20)}}>
        <Icon name="x" size={26} color={c_primary_black} />
      </TouchableOpacity>

      <View style={{margin: perfectSize(40), marginTop: perfectSize(20)}}>
        <Text style={[globalStyle.headerTitle, {fontSize: 25}]}>
          Account Activation
        </Text>
        <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
          Almost done! Enter the code sent to the number ending in **56
        </Text>
        <Form style={globalStyle.floatForm}>
          <Item stackedLabel style={globalStyle.floatItem}>
            <Label style={{color: c_light_blue}}>Code</Label>
            <Input
              style={globalStyle.floatInput}
              placeholder={'Enter code'}
              placeholderTextColor={c_light_grey}
            />
          </Item>
        </Form>

        <RoundButton
          onPress={() =>
            // navigation.dispatch(
            //   CommonActions.reset({
            //     index: 0,
            //     routes: [
            //       {
            //         name: 'Main',
            //       },
            //     ],
            //   }),
            // )
            navigation.navigate('FindStore')
          }
          backgroundColor={c_primary_black}
          height={perfectSize(56)}
          borderRadius={perfectSize(5)}
          isShadow={true}
          title={'Submit'}
          marginVertical={perfectSize(30)}
        />

        <View style={styles.resendCode}>
          <Text style={[globalStyle.greyText, {fontSize: perfectSize(20)}]}>
            Didn't receive a code?
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
              style={[
                globalStyle.headerTitle,
                {fontSize: perfectSize(20), marginLeft: perfectSize(10)},
              ]}>
              Resend code
            </Text>
          </TouchableOpacity>
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
}