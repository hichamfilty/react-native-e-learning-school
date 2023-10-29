import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

import { COLORS, SIZES, icons } from '../constants/index';
import IconLabel from './IconLabel';

const HorizontalCourseCard = ({ containerStyle, course }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', ...containerStyle }}>
      <ImageBackground
        source={course.thumbnail}
        style={{ width: 130, height: 130, marginBottom: SIZES.radius }}
        imageStyle={{ borderRadius: SIZES.radius }}
      >
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 26,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={icons.favourite}
            //resizeMethod='contain'
            style={{
              width: 25,
              height: 20,
              tintColor: course.is_favourite
                ? COLORS.secondary
                : COLORS.additionalColor4,
            }}
          />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, marginLeft: SIZES.base }}>
        <Text style={{ fontSize: 18 }}>{course.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}
        >
          <Text style={{ fontSize: 15 }}>By: {course.instructor}</Text>
          <IconLabel
            icon={icons.label}
            label={course.duration}
            containerStyle={{}}
            iconStyle={{ width: 15, height: 15 }}
            labelStyle={{ fontSize: 13 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.base,
          }}
        >
          <Text style={{ fontSize: 18, color: COLORS.primary }}>
            $ {course.price.toFixed(2)}
          </Text>
          <IconLabel
            icon={icons.star}
            label={course.ratings}
            containerStyle={{ marginLeft: SIZES.base }}
            iconStyle={{ width: 15, height: 15, tintColor: COLORS.primary2 }}
            labelStyle={{ marginLeft: 5, color: COLORS.black, fontSize: 16 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCourseCard;
