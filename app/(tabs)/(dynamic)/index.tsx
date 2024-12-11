import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DynamicScreen() {
  return (
    <View style={styles.container}>
      <Text>Dynamic</Text>
      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
