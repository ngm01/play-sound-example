
import { Button, StyleSheet, View } from 'react-native';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export default function App() {

  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/chime.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    : undefined;
  }, [sound])

  return (
    <View style={styles.container}>
      <Button  title='Play Sound' onPress={playSound} />
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
