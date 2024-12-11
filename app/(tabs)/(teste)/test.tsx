import { View, Text } from 'react-native';
import { vars } from 'nativewind'


const userTheme = vars({
  '--color-values': '0 255 0',
  '--color-rgb': 'rgb(0 0 255)'
});
export default function TestScreen() {
  return (
      <View className="flex-1 justify-center items-center">
          <Text className="text-primary">Access as a theme value</Text>
          <Text className="text-[--color-rgb]">Or the variable directly</Text>

          <View style={userTheme}>
            <Text className="text-primary">I am now green!</Text>
            <Text className="text-[--color-rgb]">I am now blue!</Text>
          </View>
      </View>
    );
}

