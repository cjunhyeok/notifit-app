import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

function ChestRoutineScreen() {
  return (
    <View style={styles.routineContainer}>
      <Text style={styles.text}>Chest Workout Routine</Text>
    </View>
  );
}

function BackRoutineScreen() {
  return (
    <View style={styles.routineContainer}>
      <Text style={styles.text}>Back Workout Routine</Text>
    </View>
  );
}

export default function RoutineScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Chest');

  const renderContent = () => {
    if (activeTab === 'Chest') {
      return <ChestRoutineScreen />;
    } else if (activeTab === 'Back') {
      return <BackRoutineScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Chest' && styles.activeTab]}
          onPress={() => setActiveTab('Chest')}
        >
          <Text style={styles.tabText}>Chest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Back' && styles.activeTab]}
          onPress={() => setActiveTab('Back')}
        >
          <Text style={styles.tabText}>Back</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddRoutineScreen')}
      >
        <Text style={styles.addButtonText}>Add Routine</Text>
      </TouchableOpacity>

      {renderContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'white',
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
  routineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  addButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'black',
    fontSize: 16,
  },
});
