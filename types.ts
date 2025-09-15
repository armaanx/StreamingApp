import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemId: string };
  Video: {
    itemId: string;
    itemTitle: string;
    videoUrl: string;
    startTime?: number;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

export type VideoPlayerScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Video'
>;

export type ContinueWatchingItem = CatalogueItemType & { progress: number };
