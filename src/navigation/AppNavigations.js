/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigations from './home/homeNavigations';
import UserNavigation from './users/UserNavigation';
import {UserContext} from '../context/users/UserContext';

const AppNavigation = () => {
  const {user} = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <HomeNavigations /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
