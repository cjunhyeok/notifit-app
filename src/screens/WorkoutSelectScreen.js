import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { workoutParts, workouts } from '../constants/WokroutData';

export default function SelectWorkoutScreen({ route, navigation }) {
  const [routineName, setRoutineName] = useState(route.params?.routineName || '');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWorkouts, setSelectedWorkouts] = useState({});

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleWorkoutPress = (workout) => {
    setSelectedWorkouts((prevState) => ({
      ...prevState,
      [selectedCategory]: {
        ...(prevState[selectedCategory] || {}),
        [workout]: !prevState[selectedCategory]?.[workout],
      },
    }));
  };

  const handleSaveRoutine = () => {
    const selectedData = Object.entries(selectedWorkouts).reduce((acc, [category, workouts]) => {
      const checkedWorkouts = Object.keys(workouts).filter((workout) => workouts[workout]);
      if (checkedWorkouts.length) {
        acc[category] = checkedWorkouts;
      }
      return acc;
    }, {});

    if (routineName.trim() && Object.keys(selectedData).length > 0) {
      console.log('Routine saved:', { routineName, selectedData });
      navigation.navigate('SaveRoutineScreen', { routineName, selectedData });
    } else {
      console.log('Please complete all fields before saving.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Select Workout</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Routine Name"
        placeholderTextColor="lightgray"
        value={routineName}
        onChangeText={setRoutineName}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {workoutParts.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.workoutButton,
              selectedCategory === category && styles.selectedButton,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text
              style={[
                styles.workoutText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedCategory && workouts[selectedCategory] && (
        <ScrollView style={styles.workoutList}>
          {workouts[selectedCategory].map((workout) => (
            <TouchableOpacity
              key={workout}
              style={[
                styles.workoutButton,
                selectedWorkouts[selectedCategory]?.[workout] && styles.selectedButton,
              ]}
              onPress={() => handleWorkoutPress(workout)}
            >
              <Text
                style={[
                  styles.workoutText,
                  selectedWorkouts[selectedCategory]?.[workout] && styles.selectedText,
                ]}
              >
                {workout}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveRoutine}>
        <Text style={styles.saveButtonText}>Save Routine</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  workoutButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedButton: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
  workoutText: {
    color: 'white',
    fontSize: 16,
  },
  selectedText: {
    color: 'black',
  },
  workoutList: {
    marginVertical: 10,
  },
  saveButton: {
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
