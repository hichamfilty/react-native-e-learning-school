import { View, Image, Text } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', ...containerStyle }}
    >
      <Image
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray30,
          ...iconStyle,
        }}
        source={icon}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.gray30,
          fontSize: 16,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;
