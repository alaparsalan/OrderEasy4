import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ActivationScreen from '../screens/auth/ActivationScreen';
import HomeScreen from '../screens/home';
import CouponsScreen from '../screens/coupons';
import TrackerScreen from '../screens/tracker';
import OrderScreen from '../screens/orders';
import MyAccount from '../screens/MyAccount';
import SearchScreen from '../screens/search';
import AddressScreen from '../screens/address/AddressScreen';
import SelectAddressScreen from '../screens/address/SelectAddressScreen';
import MenuScreen from '../screens/menu';
import MenuGroupScreen from '../screens/menu/MenuGroupScreen';
import MenuItemScreen from '../screens/menu/MenuItemScreen';
import AboutScreen from '../screens/about';
import CartScreen from '../screens/cart';
import OrderTimeScreen from '../screens/cart/OrderTime';
import OrderSettingScreen from '../screens/cart/OrderSetting';
import Checkout from '../screens/cart/Checkout';
import {c_white, c_black, c_primary_red} from '../variables/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const tabBarOptions = {
  labelStyle: {
    fontSize: 16,
    // fontSize: 0,
    color: '#00000000',
    marginTop: -16,
  },
  activeTintColor: c_primary_red,
  inactiveTintColor: c_black,
};

const BottomTab = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <EvilIcons name="user" size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Coupons"
        component={CouponsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="tago" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-car" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="location-pin" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNav = () => {
  return (
    // <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen
        name="MenuGroup"
        component={MenuGroupScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MenuItem"
        component={MenuItemScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Coupons"
        component={CouponsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyAccount"
        component={MyAccount}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const defaultOption = {
  headerStyle: {
    backgroundColor: c_white,
  },
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    letterSpacing: 0.3,
  },
  headerTintColor: c_black,
};

const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOption}>
        {/* <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Activation"
          component={ActivationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectAddress"
          component={SelectAddressScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}} /> */}
        {/* <Stack.Screen
          name="MenuGroup"
          component={MenuGroupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuItem"
          component={MenuItemScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderTime"
          component={OrderTimeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderSetting"
          component={OrderSettingScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="FindStore"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Main" component={BottomTab}  options={{headerShown: false}} />
        </Drawer.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;