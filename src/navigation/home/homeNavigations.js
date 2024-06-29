/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../../screens/main/chat';
import PhoneBookScreen from '../../screens/main/phonebook';
import AccountScreen from '../../screens/main/account';
import HomeScreen from '../../screens/main/home';
import ChatScreenIn from '../../screens/main/home/chat';
import {GetRouteNameHome} from '../customs/routeHome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const options = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'HomeStack') {
      if (focused) {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_home_click.png')}
          />
        );
      } else {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_home.png')}
          />
        );
      }
    } else if (route.name === 'ChatScreen') {
      if (focused) {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_chat_click.png')}
          />
        );
      } else {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_chat.png')}
          />
        );
      }
    } else if (route.name === 'PhoneBookScreen') {
      if (focused) {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_phonebook_click.png')}
          />
        );
      } else {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_phonebook.png')}
          />
        );
      }
    } else if (route.name === 'AccountScreen') {
      if (focused) {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_account_click.png')}
          />
        );
      } else {
        return (
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assets/icon_account.png')}
          />
        );
      }
    }
  },
  tabBarLabel: ({focused, color, size}) => {
    if (route.name === 'HomeStack') {
      return focused ? (
        <Text
          style={{
            color: '#329da8',
          }}>
          Trang chủ
        </Text>
      ) : (
        <Text> Trang chủ </Text>
      );
    } else if (route.name === 'ChatScreen') {
      return focused ? (
        <Text
          style={{
            color: '#329da8',
          }}>
          Chat
        </Text>
      ) : (
        <Text> Chat </Text>
      );
    } else if (route.name === 'PhoneBookScreen') {
      return focused ? (
        <Text
          style={{
            color: '#329da8',
          }}>
          Danh bạ
        </Text>
      ) : (
        <Text> Danh bạ </Text>
      );
    } else if (route.name === 'AccountScreen') {
      return focused ? (
        <Text
          style={{
            color: '#329da8',
          }}>
          Tiện ích
        </Text>
      ) : (
        <Text> Tiện ích </Text>
      );
    }
  },
  tabBarStyle: {
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    bottom: 10,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ChatScreenIn" component={ChatScreenIn} />
    </Stack.Navigator>
  );
};

const HomeNavigations = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {display: GetRouteNameHome(route)},
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PhoneBookScreen"
        component={PhoneBookScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigations;

const styles = StyleSheet.create({});
