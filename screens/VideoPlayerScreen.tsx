import { Platform, StatusBar, Text, View } from 'react-native';
import { mockData } from '../assets/mockData';
import ExoPlayer from '../specs/ExoPlayer';
import { VideoPlayerScreenProps } from '../types';

export default function VideoPlayerScreen({
  route,
  navigation,
}: VideoPlayerScreenProps) {
  const handleClose = () => {
    navigation.goBack();
  };
  const { itemTitle, itemId, startTime } = route.params;
  const vidSource = mockData.find(item => item.id === itemId)?.videoUrl;

  if (Platform.OS === 'ios') {
    return (
      <View className="flex-1 bg-black h-full w-full ">
        <StatusBar hidden={true} />
        <Text>Placeholder for iOS</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black h-full w-full ">
      <StatusBar hidden={true} />
      <ExoPlayer
        source={vidSource}
        title={itemTitle}
        itemId={itemId}
        handleClose={handleClose}
        startTime={startTime}
      />
    </View>
  );
}
