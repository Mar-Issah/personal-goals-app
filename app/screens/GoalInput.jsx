import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = ({ setGoals }) => {
  const [text, setText] = useState('');

  const handleInput = (inputText) => {
    setText(inputText);
  };

  const handleAddGoal = () => {
    setGoals((prev) => [...prev, text]);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={handleInput} />
      <Button title='ADD GOAL' color='#000' onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
