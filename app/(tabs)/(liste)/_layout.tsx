import { Stack } from 'expo-router';

export default function ListeLayout() {
  return (
    <Stack>
      <Stack.Screen name="flat" />
      <Stack.Screen name="scroll" />
    </Stack>
  );
}
