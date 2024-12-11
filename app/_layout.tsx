import {Stack, useGlobalSearchParams} from 'expo-router';
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="test" />
      <Stack.Screen name="form" />
    </Stack>
  );
}
