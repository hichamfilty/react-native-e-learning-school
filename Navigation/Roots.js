import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import MainLayout from '../screens/Dashboard/MainLayout';
import Search from '../screens/Dashboard/Search';
import Profile from '../screens/Dashboard/Profile';

const Tab = createBottomTabNavigator();

const Roots = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#3B82F6',
        headerShown: false,
      }}
      initialRouteName={'Dashboard'}
    >
      <Tab.Screen
        name='Dashboard'
        component={MainLayout}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name='home'
              color={color}
              style={{ position: 'relative' }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search1'
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name='search1'
              color={color}
              style={{ position: 'relative' }}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name='profile'
              color={color}
              style={{ position: 'relative' }}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Roots;
