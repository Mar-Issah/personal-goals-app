import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [text, setText] = useState('');

  const handleInput = (inputText) => {
    setText(inputText);
  };

  //move this onto the parent component
  const handleAddGoal = () => {
    onAddGoal(text);
    setText(''); //first set the value={text}
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={handleInput} value={text} />
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
