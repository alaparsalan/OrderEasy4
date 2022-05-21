import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { getDesignDimension } from '../variables/constants';
import { c_white } from '../variables/colors';
import { create } from 'react-native-pixel-perfect';

let perfectSize = create(getDesignDimension());

const roundButton = ({
  height,
  title,
  onPress,
  backgroundColor,
  isShadow,
  borderRadius,
  marginVertical,
  marginTop,
  marginRight,
  marginLeft,
  styles
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        backgroundColor,
        width: '100%',
        height,
        borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical,
        marginTop,
        marginRight,
        marginLeft,
      }, isShadow && {        
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        elevation: 4,
      }, styles]}>
      <Text style={{
        color: c_white,
        fontSize: perfectSize(19),
        fontWeight: 'bold'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default roundButton;
