import { SafeAreaView } from 'react-native-safe-area-context';
import { mockData } from '../assets/mockData';
import DetailScreenHeader from '../components/DetailScreenHeader';
import ItemDetails from '../components/ItemDetails';
import { DetailsScreenProps } from '../types';
import useVideoProgress from '../hooks/useVideoProgress';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export default function DetailsScreen({
  route,
  navigation,
}: DetailsScreenProps) {
  const { itemId } = route.params;
  const item = mockData.find(i => i.id === itemId);
  const { progress, loading, refreshProgress } = useVideoProgress(itemId);
  const handlePlay = (resume = false) => {
    navigation.navigate('Video', {
      itemId: item?.id!,
      itemTitle: item?.title!,
      videoUrl: item?.videoUrl!,
      startTime: resume && progress ? progress : 0,
    });
  };
  useFocusEffect(
    useCallback(() => {
      refreshProgress();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId, refreshProgress]),
  );
  return (
    <SafeAreaView className=" w-full flex-1 flex-col bg-zinc-900 px-4">
      <DetailScreenHeader />
      <ItemDetails
        item={item!}
        handlePlay={() => handlePlay(false)}
        handleContinue={() => handlePlay(true)}
        showResume={!!progress}
        loading={loading}
      />
    </SafeAreaView>
  );
}
