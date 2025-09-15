/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable } from 'react-native';
import { CatalogueItemType } from '../assets/mockData';
import { posters } from '../assets/images';

interface CatalogueItemProps {
  item: CatalogueItemType;
  onPress: (itemId: string) => void;
}
export default function CatalogueItem({ item, onPress }: CatalogueItemProps) {
  const { id, poster } = item;
  console.log(poster);
  return (
    <Pressable
      className="active:opacity-60 flex-1  items-start justify-center gap-2 bg-black rounded-xl p-1 mx-2 h-48 aspect-[2/3] antialiased"
      onPress={() => onPress(id)}
    >
      <Image
        source={posters[id]}
        resizeMode="cover"
        className="w-full h-full"
        style={{ borderRadius: 12 }}
      />
    </Pressable>
  );
}
