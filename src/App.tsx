import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import AppNavigator from './routes';

GoogleSignin.configure({
  webClientId:
    '872442153196-8k9sjojpjj8n4rnrkq8pc6m7dfi0act0.apps.googleusercontent.com',
});

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
