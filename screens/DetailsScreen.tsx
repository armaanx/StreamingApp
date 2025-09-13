import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockData } from '../assets/mockData';
import DetailScreenHeader from '../components/DetailScreenHeader';
import { DetailsScreenProps } from '../types';
import PlayButton from '../components/ui/PlayButton';

//fix header padding

export default function DetailsScreen({
  route,
  navigation,
}: DetailsScreenProps) {
  const { itemId } = route.params;
  const item = mockData.find(i => i.id === itemId);
  const handlePlay = () => {
    navigation.navigate('Video', {
      itemId: item?.id!,
      itemTitle: item?.title!,
      videoUrl: item?.videoUrl!,
    });
  };
  return (
    <SafeAreaView className="h-full w-full flex-1  bg-zinc-900 px-4">
      <DetailScreenHeader />
      <View className=" flex-col items-start justify-start gap-4 p-4 bg-zinc-800 mt-8 rounded-xl">
        <Text className="text-white text-3xl">{item?.title}</Text>
        <Text className="text-white text-xl text-pretty">{item?.synopsis}</Text>
        <Text className="text-white text-xl">{item?.rating}</Text>
        <PlayButton onPress={handlePlay} />
      </View>
    </SafeAreaView>
  );
}
