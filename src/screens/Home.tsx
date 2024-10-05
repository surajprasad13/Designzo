import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routes/RouteType';

const Home = (): React.JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  async function onPressLogout() {
    GoogleSignin.signOut().then(value => {});
    await auth().signOut();
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 20,
        }}>
        <Text
          style={{
            color: colors.black,
            textAlign: 'center',
          }}>
          Home
        </Text>

        <Button mode="contained" onPress={onPressLogout}>
          Signout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
