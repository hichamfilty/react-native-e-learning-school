import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { COLORS, SIZES, constants } from '../../constants/index';
import Home from './Home';

const MainLayout = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Home />
    </ScrollView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
