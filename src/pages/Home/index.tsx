import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const navigateToChat = useCallback(() => {
    navigation.navigate('Chat');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu nome</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={navigateToChat}>
        <Text style={styles.button}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  text: {
    marginTop: 10,
    fontSize: 20,
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
  },

  button: {
    marginTop: 10,
    fontSize: 20,
  },
});
