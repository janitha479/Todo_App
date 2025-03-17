import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import Icon from 'react-native-vector-icons/MaterialIcons';

type InstructionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Instructions'>;

interface Props {
  navigation: InstructionsScreenNavigationProp;
}

const instructions = [
  {
    id: '1',
    icon: 'add-task',
    text: 'Add tasks easily with the plus button',
  },
  {
    id: '2',
    icon: 'check-box',
    text: 'Tap tasks to mark them as completed',
  },
  {
    id: '3',
    icon: 'delete',
    text: 'Swipe or press delete to remove tasks',
  },
];

export default function InstructionsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>How to Use</Text>
      
      <FlatList
        data={instructions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.instructionItem}>
            <Icon name={item.icon} size={30} color="#3498db" />
            <Text style={styles.instructionText}>{item.text}</Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.startButtonText}>Let's Get Started!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2c3e50',
    textAlign: 'center',
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  instructionText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#34495e',
    flexShrink: 1,
  },
  startButton: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});