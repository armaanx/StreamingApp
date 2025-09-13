import { Text, View } from 'react-native';

export default function HomeScreenHeader() {
  return (
    <View className="flex-row items-center justify-center bg-zinc-900 h-20 w-full drop-shadow-sm border-b border-zinc-950">
      <Text className="text-white font-bold text-xl">MovieApp</Text>
    </View>
  );
}
