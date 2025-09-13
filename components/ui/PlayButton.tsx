import { Play } from 'lucide-react-native';
import { Pressable, Text } from 'react-native';

interface PlayButtonProps {
  onPress: () => void;
}

export default function PlayButton({ onPress }: PlayButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row gap-2 items-center justify-center bg-zinc-200 h-14 w-full rounded-lg active:bg-zinc-400"
    >
      <Play size={22} fill={'black'} />
      <Text className="text-black font-bold text-xl">Play</Text>
    </Pressable>
  );
}
