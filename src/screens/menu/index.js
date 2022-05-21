import React from 'react';
import {
  getDesignDimension
} from '../../variables/constants';
import {
  c_primary_black,
  c_white,
  c_second_grey,
  c_light_grey,
  c_grey,
  c_light_blue,
  c_primary_red,
  c_dark_red,
  c_ligth_red
} from '../../variables/colors';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {globalStyle} from '../../variables/styles';
import {create} from 'react-native-pixel-perfect';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomHeader from '../../component/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MenuScreen({navigation}) {
  const array = [
    {
      name: 'Promotions',
      image: require('../../../assets/images/cat1.jpg'),
    },
    {
      name: 'Catering',
      image: require('../../../assets/images/cat2.png'),
    },
    {
      name: 'Menu Group',
      image: require('../../../assets/images/cat3.jpg'),
    },
    {
      name: 'Menu Group1',
      image: require('../../../assets/images/cat4.jpg'),
    },
  ];

  const renderList = () => {
    return array.map(item => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('MenuGroup')}
          key={item.name}
          style={{
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            elevation: 4,
          }}>
          <View style={styles.item}>
            <Text
              style={[
                globalStyle.normalText,
                {fontWeight: 'bold', paddingLeft: perfectSize(30)},
              ]}>
              {item.name}
            </Text>
            <Image
              source={item.image}
              style={{width: perfectSize(100), height: perfectSize(70)}}
            />
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={globalStyle.mainContainer}>
      <SafeAreaView style={{backgroundColor: c_second_grey, flex: 1}}>
        <View
          style={{
            backgroundColor: c_white,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.1,
            elevation: 4,
          }}>
          {/* <View style={styles.headerBar}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo name="list" size={26} color={c_primary_black} />
            </TouchableOpacity>

            <Text style={[globalStyle.normalText, {fontWeight: 'bold'}]}></Text>

            <TouchableOpacity>
              <Ionicons
                name="md-search-sharp"
                size={20}
                color={c_primary_black}
              />
            </TouchableOpacity>
          </View> */}
          <CustomHeader
            navigation={navigation}
            headerText={'Menu'}
            isBack={true}
            isBlack={true}
            isDrawer={true}
            rightIcon={() => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // closeModal();
                  }}
                  activeOpacity={0.8}>
                  <MaterialCommunityIcons
                    name="cart"
                    size={26}
                    color={'white'}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <Image
            source={require('../../../assets/images/cat1.jpg')}
            style={{
              // width: perfectSize(100),
              // height: perfectSize(100),
              width: '100%',
            }}
          />

          <View
            style={{padding: perfectSize(20), paddingBottom: perfectSize(10)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={[globalStyle.headerTitle, {fontSize: perfectSize(20)}]}>
                Mazzio's Redding, CA 96003
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <AntDesign
                  name="exclamationcircle"
                  size={20}
                  color={c_primary_black}
                />
              </TouchableOpacity>
            </View>
            <Text style={[globalStyle.midText, {color: c_grey}]}>
              {'1340 Churn Creek Rd STE C10\nRedding, CA CA 96003'}
            </Text>

            {/** stars */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: perfectSize(6),
              }}>
              <View style={{flexDirection: 'row'}}>
                {/* <Entypo name="star" size={20} color={c_primary_red} />
                <Entypo name="star" size={20} color={c_primary_red} />
                <Entypo name="star" size={20} color={c_primary_red} />
                <Entypo name="star" size={20} color={c_grey} />
                <Entypo name="star" size={20} color={c_grey} /> */}
                <Text>$10 Minimum - $4 Delivery Fee</Text>
              </View>
              <Text
                onPress={() => navigation.navigate('Search')}
                style={{fontSize: perfectSize(14), color: c_light_blue}}>
                Change location
              </Text>
            </View>

            {/** Group Button */}
            {/* <View style={styles.groupButton}>
              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  {backgroundColor: c_primary_black},
                ]}>
                <Text style={[globalStyle.midText, {color: c_white}]}>
                  Delivery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  styles.splitBorder,
                  {backgroundColor: 'transparent'},
                ]}>
                <Text style={globalStyle.midText}>Dine In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.groupButtonItem,
                  {backgroundColor: 'transparent'},
                ]}>
                <Text style={globalStyle.midText}>Pickup</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>

        <View
          style={{
            paddingVertical: perfectSize(10),
            backgroundColor: '#FEF8E9',
            paddingLeft: perfectSize(10),
          }}>
          <Text style={[globalStyle.midText, {color: c_primary_black}]}>
            Online ordering is not currently available. The earliest time your
            order can be ready fro is
            <Text style={{fontWeight: 'bold'}}>
              {'\nWed 12/23/20 at 10:00 AM'}
            </Text>
          </Text>
        </View>

        <View
          style={{
            paddingVertical: perfectSize(20),
            backgroundColor: '#EDE6F3',
            paddingLeft: perfectSize(10),
            marginBottom: perfectSize(10),
          }}>
          <Text style={[globalStyle.midText, {color: '#000'}]}>
            Covid-19 Statement
          </Text>
        </View>
        {/** List */}
        <ScrollView>{renderList()}</ScrollView>
      </SafeAreaView>
    </View>
  );
}

let perfectSize = create(getDesignDimension());

const styles = {
  resendCode: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerBar: {
    flexDirection: 'row',
    paddingHorizontal: perfectSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectSize(58),
    backgroundColor: c_white,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: c_white,
    margin: perfectSize(10),
    marginVertical: perfectSize(5),
    borderRadius: perfectSize(8),
    overflow: 'hidden',
  },
  groupButton: {
    marginTop: perfectSize(20),
    borderWidth: 1,
    borderColor: c_light_grey,
    borderRadius: perfectSize(30),
    height: perfectSize(36),
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
    borderColor: c_light_grey
  },
}