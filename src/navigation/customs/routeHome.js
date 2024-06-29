/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

export const GetRouteNameHome = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('ChatScreenIn')) {
    return 'none';
  }
  return 'flex';
};
