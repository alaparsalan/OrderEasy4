import React, {useState} from 'react';
import {getDesignDimension} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_light_blue,
  c_grey,
  c_light_grey,
  c_primary_red,
  c_black,
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import {Form, Item, Input, Label} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import RoundButton from '../../component/RoundButton';
import Modal from 'react-native-modal';
import CustomHeader from '../../component/CustomHeader';

export default function CartScreen({navigation}) {
  const [country, setCountry] = useState('1');
  const [isModalVisible, setModalVisible] = useState(false);
  const [tip, setTip] = useState('$6.00');
  const [promocode, setPromocode] = useState('');

  const customTipModal = () => {
    return (
      <Modal isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: c_white,
            padding: perfectSize(10),
            borderRadius: perfectSize(6),
            paddingTop: perfectSize(20),
          }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <AntDesign name="close" size={26} color={c_primary_black} />
          </TouchableOpacity>
          <View style={{padding: perfectSize(10), paddingTop: perfectSize(20)}}>
            <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}>
              Enter a custom tip
            </Text>
            <Text
              style={[
                globalStyle.midText,
                {marginVertical: perfectSize(20), fontWeight: '500'},
              ]}>
              {'How much would you like to tip your\ndriver?'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: c_grey,
                padding: perfectSize(8),
                borderRadius: perfectSize(4),
                // flex: 1,
              }}>
              <TextInput
                value={tip}
                keyboardType="numeric"
                returnKeyType="done"
                style={[
                  globalStyle.midText,
                  {
                    paddingVertical: 0,
                    // width: perfectSize(250),
                    fontWeight: '500',
                    flex: 1,
                    marginRight: 10,
                  },
                ]}
                onChangeText={text => setTip(text)}
              />
              {/* <Text style={globalStyle.midText}>$6.00</Text> */}
              <Text style={globalStyle.midText}>26.67%</Text>
            </View>
          </View>

          <View style={{alignItems: 'flex-end', marginTop: perfectSize(20)}}>
            <TouchableOpacity
              style={{
                width: perfectSize(126),
                height: perfectSize(40),
                borderRadius: perfectSize(4),
                backgroundColor: c_primary_red,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  globalStyle.midText,
                  {color: c_white, fontWeight: 'bold'},
                ]}>
                Update Tip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={globalStyle.mainContainer}>
      {/* <View style={styles.headerBar}>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Entypo name="list" size={26} color={c_primary_black} />
					</TouchableOpacity>

					<Text style={[globalStyle.normalText, { fontWeight: 'bold' }]}>Your Order</Text>
					<Text></Text>
				</View> */}
      <CustomHeader
        navigation={navigation}
        headerText={'Your Order'}
        isBack={true}
        isBlack={true}
        isDrawer={true}
      />

      <ScrollView style={{flex: 1}}>
        {/** Header Section */}
        <View
          style={{
            backgroundColor: c_second_grey,
            paddingHorizontal: perfectSize(20),
            paddingVertical: perfectSize(30),
            shadowColor: c_black,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            elevation: 3,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              Mazzio's Redding, CA 96003
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderSetting')}>
              <Text style={{color: c_light_blue}}>Change</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={[globalStyle.midText, {marginVertical: perfectSize(10)}]}>
            <Text style={{fontWeight: 'bold'}}>Delivery,</Text> ASAP (45min)
          </Text>
          {/* <TouchableOpacity
              style={{
                width: perfectSize(146),
                height: perfectSize(26),
                borderRadius: perfectSize(4),
                backgroundColor: c_primary_red,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: c_black,
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.1,
                elevation: 3,
              }}>
              <Text
                style={[
                  globalStyle.smText,
                  {color: c_white, fontWeight: 'bold'},
                ]}>
                Add more items
              </Text>
            </TouchableOpacity> */}
          <View style={{flexDirection: 'row', marginBottom: -20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.button,
                {
                  backgroundColor: c_black,
                  paddingHorizontal: 10,
                  flex: 2 / 5,
                  marginRight: 20,
                },
              ]}>
              <Text style={[styles.buttonTitle, {marginRight: 10}]}>
                View Coupons
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.button,
                {
                  backgroundColor: c_white,
                  paddingLeft: 10,
                  flex: 3 / 5,
                  borderWidth: 0.5,
                  borderColor: 'grey',
                },
              ]}>
              <Input
                // style={globalStyle.floatInput}
                placeholder={'Promo Code'}
                onChangeText={text => {
                  setPromocode(text);
                }}
                style={{
                  fontSize: perfectSize(15),
                }}
                value={promocode}
                placeholderTextColor={c_black}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.button,
                  {
                    backgroundColor: c_primary_red,
                    width: 70,
                    flex: 0,
                  },
                ]}>
                <Text style={styles.buttonTitle}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            padding: perfectSize(20),
            paddingBottom: perfectSize(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="close" size={20} color={c_primary_black} />
            <DropDownPicker
              items={[
                {label: '1', value: '1'},
                {label: '2', value: '2'},
                {label: '3', value: '3'},
              ]}
              defaultValue={country}
              containerStyle={{height: 40, elevation: 5}}
              style={{
                backgroundColor: '#fafafa',
                marginHorizontal: perfectSize(10),
                width: perfectSize(60),
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
            <Text style={globalStyle.midText}>Menu Name</Text>
          </View>
          <Text
            style={[
              globalStyle.midText,
              {marginTop: perfectSize(10), fontWeight: 'bold'},
            ]}>
            $15.99
          </Text>
        </View>
        <View style={{paddingLeft: perfectSize(100)}}>
          <Text style={{marginBottom: perfectSize(4), color: c_primary_black}}>
            Modifier Item 1
          </Text>
          <Text style={{marginBottom: perfectSize(4), color: c_primary_black}}>
            Modifier Item 2
          </Text>
          <Text style={{marginBottom: perfectSize(4), color: c_primary_black}}>
            Modifier Item 3
          </Text>
        </View>

        <View
          style={{
            height: perfectSize(3),
            backgroundColor: c_light_grey,
            marginTop: perfectSize(20),
          }}
        />

        <View style={{paddingVertical: perfectSize(20)}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: perfectSize(30),
              marginVertical: perfectSize(2),
              justifyContent: 'space-between',
            }}>
            <Text style={globalStyle.midText}>Subtotal:</Text>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              $15.99
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: perfectSize(30),
              marginVertical: perfectSize(2),
              justifyContent: 'space-between',
            }}>
            <Text style={globalStyle.midText}>Delivery Fee:</Text>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              $13.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: perfectSize(30),
              marginVertical: perfectSize(2),
              justifyContent: 'space-between',
            }}>
            <Text style={globalStyle.midText}>Tax:</Text>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              $3.50
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: perfectSize(10),
              paddingHorizontal: perfectSize(10),
              paddingRight: perfectSize(20),
              justifyContent: 'space-between',
              backgroundColor: '#3b599866',
              borderRadius: perfectSize(5),
              alignItems: 'center',
              marginVertical: perfectSize(4),
            }}>
            <View
              style={{
                paddingVertical: perfectSize(6),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign name="close" size={20} color={c_primary_black} />
              <Text style={globalStyle.midText}>{'Mix & Mazz Deal'}</Text>
            </View>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              -$5.50
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: perfectSize(10),
              paddingHorizontal: perfectSize(10),
              paddingRight: perfectSize(20),
              justifyContent: 'space-between',
              backgroundColor: '#FCE7AE',
              borderRadius: perfectSize(5),
              alignItems: 'center',
              marginVertical: perfectSize(4),
            }}>
            <View
              style={{
                paddingVertical: perfectSize(6),
                flexDirection: 'row',
                paddingLeft: perfectSize(10),
              }}>
              <Text style={globalStyle.midText}>
                {'Add a tip for your driver?'}
              </Text>
            </View>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              $4.49
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: perfectSize(20),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {/** Group Button */}
            <View style={[styles.groupButton, {marginTop: 5}]}>
              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  {backgroundColor: c_primary_black},
                ]}>
                <Text
                  style={[globalStyle.midText, {color: c_white, fontSize: 14}]}>
                  20%
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  styles.splitBorder,
                  {backgroundColor: 'transparent'},
                ]}>
                <Text style={[globalStyle.midText, {fontSize: 14}]}>22%</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  {backgroundColor: 'transparent'},
                ]}>
                <Text style={[globalStyle.midText, {fontSize: 14}]}>25%</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={{color: c_light_blue}}>Custom</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: perfectSize(40),
              marginHorizontal: perfectSize(10),
              paddingHorizontal: perfectSize(10),
              paddingRight: perfectSize(20),
              justifyContent: 'space-between',
              backgroundColor: '#FBD3D1',
              borderRadius: perfectSize(5),
              alignItems: 'center',
              marginVertical: perfectSize(4),
            }}>
            <View
              style={{
                paddingVertical: perfectSize(6),
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: perfectSize(10),
              }}>
              {/* <AntDesign name="close" size={20} color={c_primary_black} /> */}
              <Text style={globalStyle.midText}>{'Total:'}</Text>
            </View>
            <Text style={[globalStyle.midText, {fontWeight: 'bold'}]}>
              -$5.50
            </Text>
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
          // shadowOffset: { width: 0, height: -30 },
          // shadowOpacity: 0.3,
          // elevation: 3
          borderTopColor: '#00000022',
          borderTopWidth: 2,
        }}>
        <RoundButton
          onPress={() => navigation.navigate('OrderTime')}
          backgroundColor={c_primary_black}
          height={perfectSize(56)}
          borderRadius={perfectSize(30)}
          isShadow={true}
          title={'Checkout - $21.48'}
          marginVertical={perfectSize(10)}
        />
      </View>

      {/** Modal */}
      {customTipModal()}
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
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
  },
  optional: {
    backgroundColor: c_second_grey,
    paddingVertical: perfectSize(5),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    elevation: 4,
  },
  dayHour: {
    paddingHorizontal: perfectSize(20),
    paddingVertical: perfectSize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: perfectSize(4),
    borderColor: c_light_grey,
  },
  groupButton: {
    width: perfectSize(260),
    borderWidth: 1,
    borderColor: c_light_grey,
    borderRadius: perfectSize(30),
    height: perfectSize(30),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  groupButtonItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitBorder: {
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: c_light_grey,
  },
  button: {
    flex: 1,
    backgroundColor: '#3B5998',
    // width: '100%',
    height: perfectSize(30),
    borderRadius: perfectSize(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    color: c_white,
    fontSize: perfectSize(15),
    fontWeight: '600',
    // marginLeft: perfectSize(10),
  },
};
