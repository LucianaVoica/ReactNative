import { Stack } from 'expo-router';

export default function DynamicLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
}
