import React, {useRef, useState, useEffect} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({
  headerText = '',
  headerTextStyle = {},
  style = {},
  isBack = false,
  navigation,
  rightIcon = null,
  rightIcon1 = null,
  leftIcon = null,
  isBlack = false,
  isDrawer = false,
  props,
}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: !isBlack ? 'white' : 'black'}} />
      <View
        style={[
          {
            flexDirection: 'row',
            paddingHorizontal: 20,
            height: 55,
            alignItems: 'center',
            backgroundColor: !isBlack ? 'white' : 'black',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            elevation: 4,
            //   borderColor: Colors.border_color,
            //   backgroundColor: Colors.white,
          },
          style,
        ]}>
        {leftIcon == null ? null : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {leftIcon()}
          </View>
        )}
        {isBack ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  isDrawer ? navigation.openDrawer() : navigation.goBack();
                }}>
                {isDrawer ? (
                  <MaterialCommunityIcons
                    name="menu-open"
                    size={30}
                    color={isBlack ? 'white' : 'black'}
                  />
                ) : (
                  <Ionicons
                    name="arrow-back"
                    size={30}
                    color={isBlack ? 'white' : 'black'}
                  />
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : null}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[
              Styles.headerText,
              headerTextStyle,
              {color: isBlack ? 'white' : 'black'},
            ]}>
            {headerText}
          </Text>
        </View>

        {rightIcon1 == null ? null : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {rightIcon1()}
          </View>
        )}
        {rightIcon == null ? (
          <View style={{width: 30}} />
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {rightIcon()}
          </View>
        )}
      </View>
    </>
  );
};
export default CustomHeader;

const Styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    // color: Colors.black,
    // fontFamily: Fonts.Regular_font,
    fontWeight: '400',
  },
});
