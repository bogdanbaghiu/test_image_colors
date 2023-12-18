import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getColors } from 'react-native-image-colors'

export default function App() {

  const useImageColors = () => {
    const [colors, setColors] = React.useState(null)

    React.useEffect(() => {
      const url = 'https://i.imgur.com/68jyjZT.jpg'

      getColors(url, {
        fallback: '#228B22',
        cache: true,
        key: url,
      }).then(setColors)
    }, [])

    return colors
  }

  const colors = useImageColors();
  return (
    <View style={[styles.container, { backgroundColor: colors?.dominant }]}>
      <Text style={{ color: colors?.lightMuted }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
