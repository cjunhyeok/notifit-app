import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RoutineNameScreen({ navigation }) {
  const [routineName, setRoutineName] = useState('');

  const saveRoutineNameAndProceed = () => {
    if (routineName.trim()) {
      navigation.navigate('WorkoutSelectScreen', { routineName });
    } else {
      alert('Please enter a routine name.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>New Routine Name</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Workout Routine Name"
        placeholderTextColor="lightgray"
        value={routineName}
        onChangeText={setRoutineName}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Previous Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={saveRoutineNameAndProceed}>
          <Text style={styles.buttonText}>Workout Select</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
