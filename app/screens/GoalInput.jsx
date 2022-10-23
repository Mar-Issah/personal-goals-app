import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './GoalItem';

const Goals = () => {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);

  const handleInput = (inputText) => {
    setText(inputText);
  };

  const handleAddGoal = () => {
    setGoals((prev) => [...prev, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Type your goal' style={styles.textInput} onChangeText={handleInput} />
        <Button title='ADD GOAL' color='#000' style={styles.button} onPress={handleAddGoal} />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.listText}>List of goals...</Text>
        <FlatList
          data={goals} //accepts an array i.e the goals
          renderItem={({ item, index, separators }) => {
            //instead of renderItem(itemData); bcos itemData is an obj and then itemData.item we destructure the item
            return <GoalItem item={item} />;
          }}
        />
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
