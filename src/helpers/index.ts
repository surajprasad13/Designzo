import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

async function onGoogleButtonPress() {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const {data} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(
    data?.idToken ?? '',
  );
  return auth().signInWithCredential(googleCredential);
}

export {onGoogleButtonPress};
