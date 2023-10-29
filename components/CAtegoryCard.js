import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const CategoryCard = ({ category, containerStyle }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        // resizeMethod='cover'
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'flex-end',
          ...containerStyle,
        }}
        imageStyle={{ borderRadius: SIZES.radius }}
      >
        <Text style={{ color: COLORS.white, fontSize: 18 }}>
          {category?.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;
