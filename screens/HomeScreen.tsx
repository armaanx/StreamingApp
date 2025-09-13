import { HomeScreenProps } from '../types';
import Catalogue from '../components/Catalogue';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenHeader from '../components/HomeScreenHeader';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleSelectItem = (itemId: string) => {
    navigation.navigate('Details', { itemId });
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-900  gap-4">
      <HomeScreenHeader />
      <Catalogue onSelectItem={handleSelectItem} />
    </SafeAreaView>
  );
}
