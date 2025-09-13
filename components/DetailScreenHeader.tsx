import { useNavigation } from '@react-navigation/native';
import { X } from 'lucide-react-native';
import { Pressable } from 'react-native';

export default function DetailScreenHeader() {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <Pressable
      onPress={handleClose}
      className="flex-row items-center justify-start bg-zinc-900 px-2  h-12 w-full"
    >
      <X size={24} color={'white'} />
    </Pressable>
  );
}
