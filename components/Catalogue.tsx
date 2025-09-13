import { FlatList, View } from 'react-native';
import { mockData } from '../assets/mockData';
import CatalogueItem from './CatalogueItem';

interface CatalogueProps {
  onSelectItem: (itemId: string) => void;
}

export function Separator() {
  return <View className="h-4" />;
}

export default function Catalogue({ onSelectItem }: CatalogueProps) {
  return (
    <View className="flex-1 items-center justify-center w-full h-full p-2 mb-2  ">
      <FlatList
        className="h-full w-full"
        horizontal={false}
        data={mockData}
        renderItem={({ item }) => (
          <CatalogueItem item={item} onPress={onSelectItem} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}
