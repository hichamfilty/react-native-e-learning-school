import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontSize: 18, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
