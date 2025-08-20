import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>
          Hola Mundo, Carlos te amo, sos el mejor
        </Text>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centra verticalmente
    alignItems: 'center',      // centra horizontalmente
  },
});

export default App;
