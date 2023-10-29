import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';
import LineDivider from '../../components/LineDivider';
import { COLORS, icons, SIZES, images } from '../../constants/index';

import ProgressBar from '../../components/ProgressBar';
import ProfileValue from '../../components/ProfileValue';
import ProfileRadioButton from '../../components/ProfileRadioButton';
import { connect } from 'react-redux';
import { toggleTheme } from '../../stores/themeActions';

const Profile = ({ appTheme, toggleTheme }) => {
  const [newCourseNotification, setnewCourseNotification] = useState(false);
  const [studyReminder, setstudyReminder] = useState(false);

  const togglrThemeHandler = () => {
    if (appTheme?.name == 'light') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: appTheme?.textColor,
          }}
        >
          Profile
        </Text>
        <IconButton
          icon={icons.sun}
          iconStyle={{ tintColor: appTheme?.tintColor }}
          onPress={() => togglrThemeHandler()}
        />
      </View>
    );
  };
  const renderProfileCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary3,
        }}
      >
        <TouchableOpacity style={{ width: 70, height: 70 }}>
          <Image
            source={images.profile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: COLORS.white,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 25,
                height: 25,
                marginBottom: -70,
                alignItems: 'center',
                alignContent: 'center',
                borderRadius: 15,
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.camera}
                resizeMode='contain'
                style={{
                  width: 17,
                  height: 17,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{ flex: 1, marginLeft: SIZES.radius, alignItems: 'center' }}
        >
          <Text style={{ color: COLORS.white, fontSize: 18 }}>
            By FILTY AMINA
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.white }}>
            Ecole superieur de informatique et gestion
          </Text>
          <ProgressBar
            progress='58%'
            containerStyle={{ margintTop: SIZES.rad }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, color: COLORS.white, fontSize: 15 }}>
              Overall Progress
            </Text>
            <Text style={{ color: COLORS.white, fontSize: 15, marginLeft: 10 }}>
              58%
            </Text>
          </View>
          <TextButton
            label='Become a member'
            contentContainerStyle={{
              height: 35,
              marginTop: SIZES.padding / 2,
              paddingHorizontal: SIZES.radius,
              borderRadius: 20,
              backgroundColor: COLORS.white,
            }}
            labelStyle={{ color: COLORS.primary }}
          />
        </View>
      </View>
    );
  };
  const renderProfileCardSection = () => {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue label='Name' icon={icons.profile} value='Amina Filty' />
        <LineDivider />
        <ProfileValue
          label='Email'
          icon={icons.email}
          value='aminafilty@gmail.com'
        />
        <LineDivider />
        <ProfileValue
          label='Password'
          icon={icons.password}
          value='Updated two weeks ago'
        />
        <LineDivider />
        <ProfileValue label='Call' icon={icons.call} value='0622052227' />
      </View>
    );
  };
  const renderProfileSection2 = () => {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileRadioButton icon={icons.star_1} label='Pages' />
        <LineDivider />
        <ProfileRadioButton
          icon={icons.new_icon}
          label='New Course Notification'
          isSelected={newCourseNotification}
          onPress={() => {
            setnewCourseNotification(!newCourseNotification);
          }}
        />
        <LineDivider />
        <ProfileRadioButton
          icon={icons.reminder}
          label='Study Reminder'
          isSelected={studyReminder}
          onPress={() => {
            setstudyReminder(!studyReminder);
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: appTheme?.backgroundColor1 }}>
      {renderHeader()}
      <ScrollView
        style={{ paddingHorizontal: SIZES.padding, paddingBottom: 150 }}
      >
        {renderProfileCard()}
        {renderProfileCardSection()}
        {renderProfileSection2()}
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  profileSectionContainer: {
    margintTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray20,
  },
});
