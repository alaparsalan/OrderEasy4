import React, {useState} from 'react';
import {getDesignDimension} from '../../variables/constants';
import {
  c_primary_black,
  c_light_blue,
  c_light_grey,
  c_second_grey,
  c_white,
  c_grey,
  c_primary_red,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import {Form, Item, Input, Label} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CommonActions} from '@react-navigation/native';
import RoundButton from '../../component/RoundButton';
import RadioButtonRN from 'radio-buttons-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import {
// 	WheelPicker,
// 	TimePicker,
// 	DatePicker
// } from '@delightfulstudio/react-native-wheel-picker-android';

export default function Checkout({navigation}) {
  const [orderType, setOrderType] = useState(false);
  const [date, setDate] = useState(new Date());

  const data = [
    {
      id: 0,
      label: 'Credit Card',
      description: 'Pay with a card now',
    },
    {
      id: 1,
      label: 'Saved Credit Card',
      description: 'Pay with a saved card now',
    },
    {
      id: 2,
      label: 'Cash',
      description: 'Pay with cash upon arrival',
    },
    {
      id: 3,
      label: 'Gift Card',
      description: 'Pay with a gift card now',
    },
  ];
  const cardList = [
    {
      id: 0,
      image: require('../../../assets/images/card1.jpg'),
      card_number: '*** **** **** 1234',
      card_holder_name: "Johanna's",
    },
    {
      id: 1,
      image: require('../../../assets/images/card2.jpg'),
      card_number: '*** **** **** 1234',
      card_holder_name: "Johanna's",
    },
    {
      id: 2,
      image: require('../../../assets/images/card3.jpg'),
      card_number: '*** **** **** 1234',
      card_holder_name: "Johanna's",
    },
    {
      id: 3,
      image: require('../../../assets/images/card4.jpg'),
      card_number: '*** **** **** 1234',
      card_holder_name: "Johanna's",
    },
    {
      id: 4,
      image: require('../../../assets/images/card5.jpeg'),
      card_number: '*** **** **** 1234',
      card_holder_name: "Johanna's",
    },
  ];
  const [cardSelected, setCardSelected] = useState(null);

  const [optionSelected, setOptionSelected] = useState(null);

  const renderList = ({item}) => {
    const label_style = {
      color: c_grey,
      fontSize: 14,
      marginTop: 5,
    };
    const input_style = {
      borderBottomWidth: 0.5,
      color: c_primary_black,
      borderColor: c_grey,
      fontSize: 14,
      height: 30,
    };
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // setOptionSelected(item.id);
          }}
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setOptionSelected(item.id);
            }}
            style={{
              marginRight: 10,
            }}
            activeOpacity={0.8}>
            {optionSelected == item.id ? (
              <MaterialCommunityIcons
                name="radiobox-marked"
                size={26}
                color={'grey'}
              />
            ) : (
              <MaterialCommunityIcons
                name="radiobox-blank"
                size={26}
                color={'grey'}
              />
            )}
          </TouchableOpacity>
          <View>
            <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
              {item.label}
            </Text>
            <Text style={styles.radioSubText}>{item.description}</Text>
          </View>
        </TouchableOpacity>
        {optionSelected == 0 && item.id == 0 ? (
          <View
            style={{
              borderWidth: 0.5,
              borderColor: c_grey,
              borderRadius: 5,
              padding: 20,
            }}>
            <Input
              style={[input_style]}
              // placeholder={'Your first name'}
              onChangeText={text => {
                // setFirstName(text);
              }}
              // value={firstName}
              placeholderTextColor={c_light_grey}
            />
            <Text style={label_style}>Credit Card Number</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 2 / 5}}>
                <Input
                  style={[input_style]}
                  // placeholder={'Your first name'}
                  onChangeText={text => {
                    // setFirstName(text);
                  }}
                  // value={firstName}
                  placeholderTextColor={c_light_grey}
                />
                <Text style={label_style}>Expiry Date</Text>
              </View>
              <View style={{flex: 1 / 5, marginHorizontal: 15}}>
                <Input
                  style={[input_style]}
                  // placeholder={'Your first name'}
                  onChangeText={text => {
                    // setFirstName(text);
                  }}
                  // value={firstName}
                  placeholderTextColor={c_light_grey}
                />
                <Text style={label_style}>CVC</Text>
              </View>
              <View style={{flex: 2 / 5}}>
                <Input
                  style={[input_style]}
                  // placeholder={'Your first name'}
                  onChangeText={text => {
                    // setFirstName(text);
                  }}
                  // value={firstName}
                  placeholderTextColor={c_light_grey}
                />
                <Text style={label_style}>ZIP</Text>
              </View>
            </View>
          </View>
        ) : optionSelected == 1 && item.id == 1 ? (
          <View
            style={{
              borderWidth: 0.5,
              borderColor: c_grey,
              borderRadius: 5,
              padding: 10,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={cardList}
              horizontal
              renderItem={renderList1}
            />
          </View>
        ) : optionSelected == 3 && item.id == 3 ? (
          <View
            style={
              {
                // borderWidth: 0.5,
                // borderColor: c_grey,
                // borderRadius: 5,
                // padding: 20,
              }
            }>
            <Input
              style={[input_style]}
              // placeholder={'Your first name'}
              onChangeText={text => {
                // setFirstName(text);
              }}
              // value={firstName}
              placeholderTextColor={c_light_grey}
            />
            <Text style={label_style}>Gift Card Number</Text>
          </View>
        ) : null}
      </>
    );
  };
  const renderList1 = ({item}) => {
    const label_style = {
      color: c_grey,
      fontSize: 14,
      marginTop: 5,
    };
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCardSelected(item.id);
        }}
        style={{
          paddingVertical: 10,
          marginRight: 20,
        }}>
        <View style={{height: 70, width: 100}}>
          <Image
            source={item.image}
            resizeMode="stretch"
            style={{
              backgroundColor: '#fff',
              height: 70,
              width: 100,
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: 'white',
              borderColor: 'white',
              borderTopWidth: 0.5,
              position: 'absolute',
              bottom: 5,
            }}>
            {item.card_number}
          </Text>
          {cardSelected == item.id ? (
            <View
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: 'white',
              }}>
              <AntDesign name="checksquare" size={20} color={c_primary_black} />
            </View>
          ) : null}
        </View>

        <Text style={label_style}>{item.card_holder_name}</Text>
      </TouchableOpacity>
    );
  };
  const renderCards = ({item}) => {
    return (
      <Image
        source={item.image}
        resizeMode="cover"
        style={{
          height: 30,
          width: 40,
          borderRadius: 3,
          marginRight: 5,
        }}
      />
    );
  };
  return (
    <SafeAreaView style={[globalStyle.mainContainer]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{margin: perfectSize(20)}}>
        <AntDesign name="arrowleft" size={26} color={c_primary_black} />
      </TouchableOpacity>

      <View
        style={{
          margin: perfectSize(40),
          marginTop: perfectSize(0),
          flex: 1,
        }}>
        <Text style={[globalStyle.headerTitle, {fontSize: 25}]}>Checkout</Text>
        <Text style={[globalStyle.greyText, {marginTop: perfectSize(10)}]}>
          How would you like to pay?
        </Text>

        {/** order time */}
        <View style={styles.optional}>
          <Text
            style={[
              globalStyle.normalText,
              {paddingLeft: perfectSize(20), fontWeight: '600'},
            ]}>
            Payment Options
          </Text>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cardList}
            // height={20}
            style={{
              height: 40,
              marginLeft: -20,
            }}
            horizontal
            renderItem={renderCards}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderList}
        />

        {/* <View style={{flex: 1}} /> */}
      </View>

      <View
        style={{
          // position: 'absolute',
          bottom: 0,
          // left: 0,
          // right: 0,
          backgroundColor: c_white,
          marginBottom: perfectSize(0),
          paddingHorizontal: perfectSize(50),
          shadowColor: c_primary_black,
          shadowOffset: {width: 0, height: -3},
          shadowOpacity: 0.3,
          borderTopColor: '#00000022',
          borderTopWidth: 2,
          paddingVertical: perfectSize(10),
        }}>
        <RoundButton
          onPress={() => {}}
          backgroundColor={c_primary_red}
          height={perfectSize(56)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'Submit Order - $21.28'}
          marginTop={perfectSize(30)}
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
  optional: {
    marginVertical: perfectSize(20),
    backgroundColor: c_second_grey,
    paddingVertical: perfectSize(5),
    marginHorizontal: perfectSize(-40),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
  },
  radioSubText: {
    fontSize: perfectSize(14),
    color: c_grey,
    marginTop: perfectSize(4),
  },
};
