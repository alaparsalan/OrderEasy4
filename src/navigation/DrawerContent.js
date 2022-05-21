import React from 'react';
import {
  getDesignDimension
} from '../variables/constants';
import {
  c_primary_black,
  c_white,
  c_primary_red,
  c_grey
} from '../variables/colors';
import { globalStyle } from '../variables/styles';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { create } from 'react-native-pixel-perfect';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import {
  Drawer,
} from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DrawerContent({ navigation }) {
  return (
    <DrawerContentScrollView>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Icon
          name="close"
          size={24}
          color={c_primary_black}
          style={{marginTop: perfectSize(20), marginLeft: perfectSize(20)}}
        />
      </TouchableOpacity>

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

      <Drawer.Section style={styles.drawerSection}>
        {/* <DrawerItem
          icon={({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          label="Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        /> */}
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="silverware-fork-knife" color={color} size={size} />
          )}
          label="Menu"
          onPress={() => {
            navigation.navigate('Menu');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="tago" color={color} size={size} />
          )}
          label="Coupons"
          onPress={() => {
            navigation.navigate('Coupons');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="account-box" color={color} size={size} />
          )}
          label="Account"
          onPress={() => {
            navigation.navigate('MyAccount');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="clipboard-list-outline" color={color} size={size} />
          )}
          label="Orders"
          onPress={() => {
            navigation.navigate('Orders');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="cart" color={color} size={size} />
          )}
          label="Cart"
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Entypo name="location-pin" color={color} size={size} />
          )}
          label="Find Store"
          onPress={() => {
            navigation.navigate('FindStore');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="ios-car" color={color} size={size} />
          )}
          label="Tracker"
          onPress={() => {
            navigation.navigate('Tracker');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="tags" color={color} size={size} />
          )}
          label="Loyalty"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="arrowleft" color={color} size={size} />
          )}
          label="Log Out"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: 'SignIn',
                  },
                ],
              }),
            );
          }}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}


let perfectSize = create(getDesignDimension());

const styles = {
  drawerContent: {
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 10,
  },
};