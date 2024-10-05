import {ImageRequireSource} from 'react-native';

export type SocialType =
  | 'phone'
  | 'google'
  | 'facebook'
  | 'apple'
  | 'guest'
  | 'faceid';

export interface AuthProvidersProp {
  title: string;
  image?: ImageRequireSource;
  type: SocialType;
}
