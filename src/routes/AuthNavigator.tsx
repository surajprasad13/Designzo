import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

// helpers
import {AuthStackParamList} from './RouteType';

const {Navigator, Screen} = createStackNavigator<AuthStackParamList>();

function AuthNavigator(): React.JSX.Element {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}

export default AuthNavigator;
