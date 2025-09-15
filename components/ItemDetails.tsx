import { Image, Text, View } from 'react-native';
import PlayButton from './ui/PlayButton';
import { CatalogueItemType } from '../assets/mockData';
import { posters } from '../assets/images';

interface ItemDetailsProps {
  item: CatalogueItemType;
  handlePlay: () => void;
  handleContinue?: () => void;
  showResume: boolean;
  loading: boolean;
}

export default function ItemDetails({
  item,
  handlePlay,
  loading,
  showResume,
  handleContinue,
}: ItemDetailsProps) {
  const { id, title, synopsis, rating } = item;

  return (
    <View className="relative flex-col gap-6 p-4 bg-zinc-800 mt-6 rounded-2xl w-full shadow-md">
      <View className="flex-row gap-4">
        <Image
          source={posters[id]}
          className="w-36 aspect-[2/3] rounded-lg"
          resizeMode="cover"
        />

        <View className="flex-1 flex-col justify-between">
          <Text className="text-white text-2xl font-bold">{title}</Text>
          <Text
            className="text-zinc-100 text-base mt-1"
            numberOfLines={9}
            ellipsizeMode="tail"
          >
            {synopsis}
          </Text>
          <Text className="text-white text-lg font-semibold mt-2">
            ⭐ {rating.toFixed(1)}
          </Text>
        </View>
      </View>

      <View className="w-full mt-2">
        {showResume && handleContinue ? (
          <PlayButton
            label="Resume"
            onPress={handleContinue}
            loading={loading}
          />
        ) : (
          <PlayButton label="Play" onPress={handlePlay} loading={loading} />
        )}
      </View>
    </View>
  );
}
