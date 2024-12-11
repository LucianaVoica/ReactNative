import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Link href="/details" className="text-blue-500 underline">View details</Link>
    </View>
  );
}
