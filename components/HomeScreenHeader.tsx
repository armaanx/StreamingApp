import { Settings, UserRoundPen } from 'lucide-react-native';
import { Text, View } from 'react-native';

export default function HomeScreenHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 bg-zinc-900 h-20 w-full drop-shadow-sm border-b border-zinc-950">
      <Text className="text-white font-bold text-xl">Streaming App</Text>
      <View className="flex-row items-center gap-4">
        <Settings size={24} color={'white'} />
        <UserRoundPen size={24} color={'white'} />
      </View>
    </View>
  );
}
