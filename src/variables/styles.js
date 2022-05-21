import {
  StyleSheet,
} from 'react-native';
import {
  getDesignDimension,
} from './constants';
import {c_primary_black, c_grey, c_white, c_primary_red} from './colors';
import {create} from 'react-native-pixel-perfect';

let perfectSize = create(getDesignDimension());

export const globalStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: c_white,
    flex: 1,
  },
  headerTitle: {
    fontSize: perfectSize(18),
    fontWeight: 'bold',
    color: c_primary_black,
  },
  greyText: {
    fontSize: perfectSize(18),
    color: c_grey,
  },
  normalText: {
    fontSize: perfectSize(18),
    color: c_primary_black,
  },
  midText: {
    fontSize: perfectSize(16),
    color: c_primary_black,
  },
  smText: {
    fontSize: perfectSize(14),
    color: c_primary_black,
  },

  // native-base
  floatForm: {
    paddingLeft: perfectSize(-40),
    marginVertical: perfectSize(20),
  },
  floatItem: {
    marginLeft: perfectSize(0),
    height: 60,
    marginBottom: perfectSize(12),
  },
  floatInput: {
    fontSize: perfectSize(18),
    color: c_primary_black,
    marginBottom: 0,
    paddingBottom: 0,
    paddingLeft: -3,
  },
  errorText: {
    color: c_primary_red,
    fontSize: 14,
    // fontFamily: Fonts.Regular_font,
  },
});