import { useNavigation } from '@react-navigation/native';
import { X } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

export default function DetailScreenHeader() {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-row items-center justify-start bg-zinc-900 px-2  h-12 w-full">
      <Pressable onPress={handleClose} className="active:opacity-50">
        <X size={24} color={'white'} />
      </Pressable>
    </View>
  );
}
