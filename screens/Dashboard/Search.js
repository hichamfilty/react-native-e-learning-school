import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useRef } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { FlatList } from 'react-native-gesture-handler';
import CategoryCard from '../../components/CAtegoryCard';
import TextButton from '../../components/TextButton';
import { COLORS, SIZES, icons, dummyData } from '../../constants/index';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Search = () => {
  const scrollViewRef = useRef();
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const renderTopSearches = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          Top Searches
        </Text>
        <FlatList
          horizontal
          data={dummyData.top_searches}
          listKey='TopSearches'
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: SIZES.radius }}
          renderItem={({ item, index }) => {
            return (
              <TextButton
                label={item.label}
                contentContainerStyle={{
                  paddingVertical: SIZES.radius,
                  paddingHorizontal: SIZES.padding,
                  marginLeft: SIZES.radius,
                  padding: SIZES.radius,
                  marginRignt:
                    index == dummyData.top_searches.length - 1
                      ? SIZES.padding
                      : 0,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.gray40,
                }}
                labelStyle={{ color: COLORS.white }}
              />
            );
          }}
        />
      </View>
    );
  };
  const renderBrowserSearch = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ marginHorizontal: SIZES.padding, fontSize: 18 }}>
          Browse Categories
        </Text>
        <FlatList
          data={dummyData.categories}
          numColumns={2}
          scrollEnabled={false}
          listKey='BrowserCategories'
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ marginTop: SIZES.radius }}
          renderItem={({ item, index }) => {
            return (
              <CategoryCard
                category={item}
                containerStyle={{
                  height: 130,
                  width: (SIZES.width - SIZES.padding * 2 - SIZES.radius) / 2,
                  marginTop: SIZES.radius,
                  marginLeft:
                    (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding,
                }}
              />
            );
          }}
        />
      </View>
    );
  };
  const renderSearchBar = () => {
    const inputRange = [0, 55];
    const searchBarAnimatedStyle = useAnimatedStyle(() => {
      return {
        height: interpolate(
          scrollY.value,
          inputRange,
          [55, 0],
          Extrapolate.CLAMP
        ),
        opacity: interpolate(
          scrollY.value,
          inputRange,
          [1, 0],
          Extrapolate.CLAMP
        ),
      };
    });
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 50,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
            height: 50,
          },
          searchBarAnimatedStyle,
        ]}
      >
        <Shadow>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              width: SIZES.width - SIZES.padding * 2,
              paddingHorizontal: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <Image
              source={icons.search}
              style={{ width: 25, height: 25, tintColor: COLORS.gray40 }}
            />
            <TextInput
              style={{ flex: 1, marginLeft: SIZES.base, fontSize: 15 }}
              value=''
              placeholder='Search for Topics and Courses '
              placeholderTextColor={COLORS.gray}
            ></TextInput>
          </View>
        </Shadow>
      </Animated.View>
    );
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Animated.ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          marginTop: 100,
          paddingBottom: 300,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        keyboardDismissMode='on-drag'
        onScroll={onScroll}
        onScrollEndDrag={(event) => {
          if (
            event.nativeEvent.contentOffset.y > 10 &&
            event.nativeEvent.contentOffset.y < 50
          ) {
            scrollViewRef.current?.scrollTo({
              x: 0,
              y: 60,
              Animated: true,
            });
          }
        }}
      >
        {renderTopSearches()}
        {renderBrowserSearch()}
      </Animated.ScrollView>
      {renderSearchBar()}
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({});
