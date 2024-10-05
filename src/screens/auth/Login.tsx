import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';

// helpers
import {colors, fonts} from '../../theme';
import {AuthProvidersProp, SocialType} from '../../types';
import {onGoogleButtonPress} from '../../helpers';

const authProviders: AuthProvidersProp[] = [
  {
    type: 'phone',
    title: 'Continue with mobile number',
    image: require('../../assets/images/phone.png'),
  },
  {
    type: 'google',
    title: 'Continue with Google',
    image: require('../../assets/images/google.png'),
  },
  {
    type: 'facebook',
    title: 'Continue with Facebook',
    image: require('../../assets/images/facebook.png'),
  },
  {
    type: 'apple',
    title: 'Continue with Apple',
    image: require('../../assets/images/apple.png'),
  },
  {
    type: 'faceid',
    title: 'Set up Face ID',
    image: require('../../assets/images/faceid.png'),
  },
  {
    type: 'guest',
    title: 'Guest',
  },
];

const Login = (): React.JSX.Element => {
  //

  function onPressSocial(type: SocialType) {
    switch (type) {
      case 'phone':
        break;
      case 'google':
        onGoogleButtonPress();
        break;
      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View />
        <FastImage
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          style={{width: '100%', height: 100}}
        />

        <View>
          <View style={{flexDirection: 'column', gap: 12}}>
            {authProviders.map((item, index) => {
              return (
                <Pressable
                  key={index.toString()}
                  style={[
                    styles.buttonContainer,
                    item.type == 'phone' && {
                      backgroundColor: colors.whiteBorder,
                    },
                  ]}
                  onPress={() => onPressSocial(item.type)}>
                  {item.image && (
                    <FastImage
                      source={item.image}
                      resizeMode="contain"
                      style={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  )}
                  <Text
                    style={[
                      styles.buttonText,
                      item.type == 'phone' && {
                        color: colors.primary,
                      },
                    ]}>
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable style={{marginTop: 12}}>
            <Text style={[styles.buttonText, {flex: 0}]}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.whiteBorder,
    padding: 13,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.whiteBorder,
    fontFamily: fonts.semibold,
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    fontWeight: '600',
  },
});

export default Login;
