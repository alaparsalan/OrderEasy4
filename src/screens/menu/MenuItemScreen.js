import React, {useState} from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_primary_red,
  c_primary_green,
  c_grey,
  c_light_grey,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { globalStyle } from '../../variables/styles';
import { create } from 'react-native-pixel-perfect';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import RoundButton from '../../component/RoundButton';
import { CheckBox } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomHeader from '../../component/CustomHeader';

const screenWidth = Math.round(Dimensions.get('window').width);

export default function MenuItemScreen({navigation}) {
  const [country, setCountry] = useState('1');

  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView style={{backgroundColor: c_second_grey, flex: 1}}>
        {/* <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color={c_primary_black} />
          </TouchableOpacity>

          <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
            Menu Item
          </Text>
          <Text></Text>
        </View> */}
        <CustomHeader
          navigation={navigation}
          headerText={'Menu Group'}
          isBack={true}
          isBlack={true}
        />

        {/** List */}
        <ScrollView style={{backgroundColor: c_second_grey, flex: 1}}>
          <View style={{paddingBottom: perfectSize(50)}}>
            <View>
              <Image
                source={require('../../../assets/images/cat1.jpg')}
                style={{width: screenWidth, height: perfectSize(200)}}
              />
            </View>

            <View style={{paddingBottom: perfectSize(20)}}>
              {/** price section */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: perfectSize(14),
                  paddingHorizontal: perfectSize(40),
                  backgroundColor: c_white,
                  marginBottom: 1,
                }}>
                <View>
                  <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
                    {'Menu Item Name'}{' '}
                    <Text style={[globalStyle.smText, {fontWeight: '200'}]}>
                      {'600kcal'}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      opacity: 0.7,
                      fontSize: perfectSize(12),
                      marginTop: perfectSize(4),
                    }}>
                    {
                      'lorem ipsum dolor sit amet lorem ipsum do\nlor sit amet lorem ipsum dolor sit amet'
                    }
                  </Text>
                </View>
                <View>
                  <Text style={[globalStyle.smText, {fontWeight: 'bold'}]}>
                    {'$19.99'}
                  </Text>
                </View>
              </View>

              {/** Quantity */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: perfectSize(14),
                  paddingHorizontal: perfectSize(40),
                  backgroundColor: c_white,
                  marginBottom: perfectSize(16),
                }}>
                <View>
                  <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
                    {'Quantity'}
                  </Text>
                  <View
                    style={{flexDirection: 'row', marginTop: perfectSize(10)}}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        paddingHorizontal: perfectSize(8),
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderRightWidth: 0.5,
                      }}>
                      <AntDesign
                        name="minus"
                        size={20}
                        color={c_primary_black}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        paddingHorizontal: perfectSize(8),
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        borderLeftWidth: 0.5,
                      }}>
                      <AntDesign
                        name="plus"
                        size={20}
                        color={c_primary_black}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text style={[globalStyle.smText, {fontWeight: 'bold'}]}>
                    {'1'}
                  </Text>
                </View>
              </View>

              {/** Modifier Group */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: perfectSize(14),
                  paddingHorizontal: perfectSize(40),
                  backgroundColor: c_white,
                  marginBottom: perfectSize(20),
                }}>
                <View>
                  <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
                    {'Modifier Group'}
                  </Text>
                  <Text
                    style={{
                      opacity: 0.7,
                      fontSize: perfectSize(12),
                      marginTop: perfectSize(4),
                    }}>
                    {'select up to 3 (optional)'}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Entypo
                    name="chevron-down"
                    size={26}
                    color={c_primary_black}
                  />
                </TouchableOpacity>
              </View>
              {/* <View style={{backgroundColor: c_primary_red, width: perfectSize(8), position: 'absolute', top: 0, left: 0, bottom: 0}} /> */}

              {/** Modifier Group */}
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: perfectSize(14),
                    paddingHorizontal: perfectSize(40),
                    backgroundColor: c_white,
                    marginBottom: perfectSize(6),
                  }}>
                  <View>
                    <Text
                      style={[
                        globalStyle.midText,
                        {fontWeight: 'bold', paddingTop: perfectSize(10)},
                      ]}>
                      {'Modifier Group'}
                    </Text>
                    <Text
                      style={{
                        opacity: 0.7,
                        fontSize: perfectSize(12),
                        marginTop: perfectSize(4),
                      }}>
                      {'select one (Required)'}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Entypo
                      name="chevron-down"
                      size={26}
                      color={c_primary_black}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    padding: perfectSize(14),
                    paddingHorizontal: perfectSize(40),
                    backgroundColor: c_white,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <CheckBox
                        checked={false}
                        color={c_primary_black}
                        style={styles.checkbox}
                      />
                      <Text style={globalStyle.midText}>Modifier Item</Text>
                    </View>
                    <DropDownPicker
                      items={[
                        {label: 'Extra', value: '1'},
                        {label: 'Light', value: '2'},
                        {label: 'On the Side', value: '3'},
                      ]}
                      defaultValue={country}
                      containerStyle={{height: 40, elevation: 5}}
                      style={{
                        backgroundColor: '#fafafa',
                        marginHorizontal: perfectSize(10),
                        width: perfectSize(130),
                      }}
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
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: perfectSize(50),
                      paddingRight: perfectSize(40),
                    }}>
                    <Image
                      source={require('../../../assets/images/ind1.png')}
                      style={{
                        width: perfectSize(30),
                        height: perfectSize(30),
                        resizeMode: 'contain',
                      }}
                    />
                    <Image
                      source={require('../../../assets/images/ind2.png')}
                      style={{
                        width: perfectSize(30),
                        height: perfectSize(30),
                        resizeMode: 'contain',
                        marginHorizontal: perfectSize(30),
                      }}
                    />
                    <Image
                      source={require('../../../assets/images/ind1.png')}
                      style={{
                        width: perfectSize(30),
                        height: perfectSize(30),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: c_primary_red,
                    paddingHorizontal: perfectSize(10),
                    paddingVertical: perfectSize(2),
                    position: 'absolute',
                    top: perfectSize(-5),
                    left: perfectSize(40),
                    borderRadius: perfectSize(4),
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: perfectSize(11),
                    }}>
                    Required
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: c_primary_red,
                    width: perfectSize(8),
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: c_white,
            marginBottom: perfectSize(0),
            paddingHorizontal: perfectSize(50),
            // shadowColor: c_primary_black,
            // shadowOffset: { width: 0, height: -3},
            // shadowOpacity: 0.3,
            borderTopColor: '#00000022',
            borderTopWidth: 2,
          }}>
          <RoundButton
            onPress={() => navigation.navigate('Cart')}
            backgroundColor={c_grey}
            height={perfectSize(56)}
            borderRadius={perfectSize(30)}
            isShadow={true}
            title={'Make required choices'}
            marginVertical={perfectSize(10)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: perfectSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectSize(58),
    backgroundColor: c_white,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    elevation: 4,
  },
  checkbox: {
    width: 18,
    height: 18,
    fontSize: 20,
    borderRadius: perfectSize(3),
    marginRight: perfectSize(20)
  }
}