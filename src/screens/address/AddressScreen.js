import React, { useState } from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_light_blue,
  c_light_grey,
  c_second_grey
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
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';

export default function AddressScreen({ navigation }) {
  const [country, setCountry] = useState('uk');
  return (
    <SafeAreaView style={globalStyle.mainContainer}>
      <KeyboardAvoidingScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{margin: perfectSize(20)}}>
          <AntDesign name="arrowleft" size={26} color={c_primary_black} />
        </TouchableOpacity>

        <View style={{margin: perfectSize(40), marginTop: perfectSize(0)}}>
          <Text style={[globalStyle.headerTitle, {fontSize: 25}]}>
            Enter Your Address
          </Text>
          <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
            Where would you like your order sent?
          </Text>
          <Form style={globalStyle.floatForm}>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Street</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your street'}
                placeholderTextColor={c_light_grey}
              />
            </Item>

            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>Apt / Suite</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Optional'}
                placeholderTextColor={c_light_grey}
              />
            </Item>

            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_light_blue}}>City</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Your City'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
          </Form>

          {/** State & Zip */}
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{flex: 1, marginRight: perfectSize(5)}}>
              <Label
                style={{
                  color: c_light_blue,
                  fontSize: perfectSize(16),
                  marginBottom: perfectSize(10),
                }}>
                State
              </Label>
              <DropDownPicker
                items={[
                  {
                    label: 'USA',
                    value: 'usa',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                    hidden: true,
                  },
                  {
                    label: 'UK',
                    value: 'uk',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                  },
                  {
                    label: 'France',
                    value: 'france',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                  },
                ]}
                defaultValue={country}
                containerStyle={{height: 40, elevation: 5}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
            <View style={{flex: 1, marginLeft: perfectSize(5)}}>
              <Item stackedLabel style={globalStyle.floatItem}>
                <Label style={{color: c_light_blue}}>Zip</Label>
                <Input
                  style={globalStyle.floatInput}
                  placeholder={'Your Zip'}
                  placeholderTextColor={c_light_grey}
                />
              </Item>
            </View>
          </View>

          {/** Optional */}
          <View style={styles.optional}>
            <Text
              style={[globalStyle.normalText, {paddingLeft: perfectSize(20)}]}>
              Optional
            </Text>
          </View>

          {/** State & Zip */}
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{flex: 1, marginRight: perfectSize(5)}}>
              <Item stackedLabel style={globalStyle.floatItem}>
                <Label style={{color: c_primary_black}}>Nickname</Label>
                <Input
                  style={globalStyle.floatInput}
                  placeholder={'Address name'}
                  placeholderTextColor={c_light_grey}
                />
              </Item>
            </View>
            <View style={{flex: 1, marginLeft: perfectSize(5)}}>
              <Label
                style={{
                  color: c_primary_black,
                  fontSize: perfectSize(16),
                  marginBottom: perfectSize(10),
                }}>
                Building Type
              </Label>
              <DropDownPicker
                items={[
                  {
                    label: 'coffe',
                    value: 'usa',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                    hidden: true,
                  },
                  {
                    label: 'tea',
                    value: 'uk',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                  },
                  {
                    label: 'coca',
                    value: 'france',
                    icon: () => (
                      <AntDesign name="flag" size={18} color="#900" />
                    ),
                  },
                ]}
                defaultValue={country}
                containerStyle={{height: 40, elevation: 5}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item =>
                  this.setState({
                    country: item.value,
                  })
                }
              />
            </View>
          </View>

          <View style={{marginRight: perfectSize(5)}}>
            <Item stackedLabel style={globalStyle.floatItem}>
              <Label style={{color: c_primary_black}}>Delivery Notes</Label>
              <Input
                style={globalStyle.floatInput}
                placeholder={'Leave on prch, etc'}
                placeholderTextColor={c_light_grey}
              />
            </Item>
          </View>

          <RoundButton
            onPress={() => navigation.navigate('SelectAddress')}
            backgroundColor={c_primary_black}
            height={perfectSize(56)}
            borderRadius={perfectSize(5)}
            isShadow={true}
            title={'Continue'}
            marginVertical={perfectSize(30)}
          />
        </View>
      </KeyboardAvoidingScrollView>
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
  }
}