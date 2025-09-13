//bonus features-
//1. add a progress bar
//2. add a volume control
//3. continue watching from where you left off
//4. favorites tab and home tab

import { SafeAreaView } from 'react-native-safe-area-context';
import { mockData } from '../assets/mockData';
import ExoPlayer2 from '../specs/ExoPlayer2';
import { VideoPlayerScreenProps } from '../types';

export default function VideoPlayerScreen({ route }: VideoPlayerScreenProps) {
  const { itemTitle } = route.params;
  const vidSource = mockData.find(item => item.title === itemTitle)?.videoUrl;
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-900 gap-2 w-full h-full">
      {/* <ExoPlayerTest /> */}
      {/* <Text className="text-white">Now playing- {itemTitle}</Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
      >
        Go back
      </Button> */}
      <ExoPlayer2
        source={vidSource}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ height: 300, width: 390 }}
      />
    </SafeAreaView>
  );
}
