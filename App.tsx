import './globals.css';
import AppNavigatior from './navigation/AppNavigatior';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigatior />
    </SafeAreaProvider>
  );
}

export default App;
