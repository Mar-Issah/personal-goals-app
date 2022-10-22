import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

const Goals = () => {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInput = (inputText) => {
    setText(inputText);
  };

  const handleAddGoal = () => {
    setGoals((prev) => [...prev, text]); //better way to update the state if it depends on the prev state this is the best practice.
    //[...goals, text]
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={handleInput} />
        <Button title='ADD GOAL' color='#000' style={styles.button} onPress={handleAddGoal} />
      </View>
      <View style={styles.goalContainer}>
        <ScrollView>
          <Text style={styles.listText}>List of goals...</Text>
          {goals.map((item, idx) => (
            <View key={idx} style={styles.goalItem}>
              <Text>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d1cb',
    paddingTop: 50,
    paddingHorizontal: 16, //padding left and right
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  textInput: {
    width: '75%',
    backgroundColor: '#fff',
    padding: 4,
  },
  goalContainer: {
    flex: 5,
  },
  listText: {
    fontWeight: 'bold',
    width: '100%',
  },
  goalItem: {
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#de84f5',
  },
});

export default Goals;
