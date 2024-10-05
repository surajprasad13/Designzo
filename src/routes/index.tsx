import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// helpers
import {RootStackParamList} from './RouteType';

// screens
import AuthNavigator from './AuthNavigator';
import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

function AppNavigator(): React.JSX.Element {
  const [currentUser, setCurrentUser] = useState<null | any>({});

  useEffect(() => {
    getCurrentUser();
  }, []);

  function getCurrentUser() {
    try {
      const user = auth().currentUser;
      console.log(user);
      setCurrentUser(user);
    } catch (error) {
      console.log(error, 'error in getting user');
    }
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        {currentUser == null ? (
          <Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Screen name="Home" component={Home} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
