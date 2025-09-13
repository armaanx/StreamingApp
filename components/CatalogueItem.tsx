import { Pressable, Text } from 'react-native';
import { CatalogueItemType } from '../assets/mockData';

interface CatalogueItemProps {
  item: CatalogueItemType;
  onPress: (itemId: string) => void;
}
export default function CatalogueItem({ item, onPress }: CatalogueItemProps) {
  const { id, title } = item;
  return (
    <Pressable
      className="active:opacity-80 flex-1 flex-col items-start justify-center gap-2 bg-zinc-800 rounded-lg p-2 drop-shadow-md mx-2 h-48 aspect-square"
      onPress={() => onPress(id)}
    >
      <Text className="text-white">{id}</Text>
      <Text className="text-white">{title}</Text>
    </Pressable>
  );
}
