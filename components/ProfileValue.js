import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';

const ProfileValue = ({ icon, label, value, onPress }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', height: 80, alignItems: 'center' }}
      onPress={onPress}
    >
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: COLORS.additionalColor11,
        }}
      >
        <Image
          source={icon}
          style={{ width: 25, height: 25, tintColor: COLORS.primary }}
        />
      </View>
      <View style={{ flex: 1, marginLeft: SIZES.radius }}>
        {label && (
          <Text style={{ color: COLORS.gray30, fontSize: 16 }}>{label}</Text>
        )}
        <Text style={{ fontSize: 16 }}>{value}</Text>
      </View>
      <Image source={icons.right_arrow} style={{ width: 15, height: 15 }} />
    </TouchableOpacity>
  );
};

export default ProfileValue;
