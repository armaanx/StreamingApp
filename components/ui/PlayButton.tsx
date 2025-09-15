import { Play } from 'lucide-react-native';
import { ActivityIndicator, Pressable, Text } from 'react-native';

interface PlayButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
}

export default function PlayButton({
  onPress,
  label,
  loading,
}: PlayButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row gap-2 items-center justify-center bg-zinc-200 h-14 w-full rounded-lg active:bg-zinc-400"
      disabled={loading}
    >
      {!loading ? (
        <>
          <Play size={22} fill={'black'} />
          <Text className="text-black font-bold text-xl">{label}</Text>
        </>
      ) : (
        <ActivityIndicator size={'small'} color={'black'} />
      )}
    </Pressable>
  );
}
