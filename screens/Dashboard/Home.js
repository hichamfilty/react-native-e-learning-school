import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';

import { COLORS, SIZES, dummyData, icons, images } from '../../constants/index';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';
import IconLabel from '../../components/IconLabel';
import LineDivider from '../../components/LineDivider';

import HorizontalCourseCard from '../../components/HorizontalCourseCard';
import CategoryCard from '../../components/CAtegoryCard';

const Section = ({ containerStyle, title, onPress, children }) => {
  return (
    <View style={{ ...containerStyle }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.padding }}>
        <Text style={{ flex: 1, fontSize: 20 }}>{title}</Text>
        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          label={'See All'}
          onPress={onPress}
        />
      </View>
      {children}
    </View>
  );
};

const Home = () => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}
      >
        {/* Greeting */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 22 }}>Hello, By EMSET GROUP!</Text>
          <Text style={{ color: COLORS.gray50, fontSize: 15 }}>
            thursday, 29th Sept 2023
          </Text>
        </View>
        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{ tintColor: COLORS.black }}
        />
      </View>
    );
  };
  const renderStartLearning = () => {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          //marginTop: 5,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{ borderRadius: SIZES.radius }}
      >
        <View>
          <Text style={{ color: COLORS.white, fontSize: 22 }}>How to</Text>
          <Text style={{ color: COLORS.white, fontSize: 20 }}>
            choose the degree you want to prospere in
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              fontSize: 14,
            }}
          >
            By AMINA FILTY
          </Text>
          <Image
            source={images.start_learning}
            style={{ height: 110, marginTop: SIZES.padding }}
          />
          <TextButton
            label='Start Learning'
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding,
              height: 40,
              borderRadius: 20,
              backgroundColor: COLORS.black,
            }}
          />
        </View>
      </ImageBackground>
    );
  };
  const renderCourses = () => {
    return (
      <TouchableOpacity style={{ flex: 1 }}>
        <FlatList
          horizontal={true}
          data={dummyData.courses_list_1}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: SIZES.padding }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View style={{ margin: 5 }} key={item.id}>
                <Image
                  source={item.thumbnail}
                  style={{
                    height: 150,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.radius,
                  }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRaduis: 10,
                      backgroundColor: COLORS.primary,
                    }}
                  >
                    <Image
                      source={icons.play}
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{ flexShrink: 1, paddingHorizontal: SIZES.radius }}
                >
                  <Text style={{ flex: 1, fontSize: 16 }}>{item.title}</Text>
                  <IconLabel
                    icon={icons.time}
                    label={item.duration}
                    containerStyle={{ marginTop: SIZES.base }}
                  />
                </View>
              </View>
            );
          }}
        />
      </TouchableOpacity>
    );
  };
  const renderCategories = () => {
    return (
      <Section title='Categories'>
        <FlatList
          horizontal
          data={dummyData.categories}
          listKey='Categories'
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: SIZES.padding }}
          renderItem={({ item, index }) => {
            return (
              <CategoryCard
                category={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                  // marginRight: index == dummyData.categories.length - 1 ? SIZES.padding ? 0
                }}
              />
            );
          }}
        />
      </Section>
    );
  };
  const renderPopularCources = () => {
    return (
      <Section title='Popular Courses' containerStyle={{ marginTop: 30 }}>
        <FlatList
          data={dummyData.courses_list_2}
          listKey='PopularCourses'
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{}}
          renderItem={({ item, index }) => {
            return (
              <HorizontalCourseCard
                course={item}
                containerStyle={{
                  marginVertical: SIZES.padding,
                  marginTop: index == 0 ? SIZES.radius : SIZES.padding,
                }}
              />
            );
          }}
          ItemSeparatorComponent={() => {
            return (
              <LineDivider lineStyle={{ backgroundColor: COLORS.gray20 }} />
            );
          }}
        />
      </Section>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        {renderStartLearning()}
        {renderCourses()}
        <LineDivider lineStyle={{ marginVertical: SIZES.padding }} />

        {renderCategories()}
        {renderPopularCources()}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
