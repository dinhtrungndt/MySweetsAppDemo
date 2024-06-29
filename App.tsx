import {SafeAreaView} from 'react-native';
import React from 'react';
import {UserProvider} from './src/context/users/UserContext';
import {HomeProvider} from './src/context/home/homeContext';
import AppNavigation from './src/navigation/AppNavigations';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserProvider>
        <HomeProvider>
          <AppNavigation />
        </HomeProvider>
      </UserProvider>
    </SafeAreaView>
  );
};

export default App;
