import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddGoal = (inputText) => {
    setGoals((prev) => [...prev, { text: inputText, id: Math.random().toString() }]);
    handleModal();
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };
  const handleModal = (id) => {
    // setModalVisible(true);
    setModalVisible(!modalVisible);
  };

  // const handleCloseModal = (id) => {
  //   setModalVisible(false);
  // };
  return (
    <View style={styles.container}>
      <Button title='Click to ADD' color='#de84f5' onPress={handleModal} />
      <GoalInput onAddGoal={handleAddGoal} modalVisible={modalVisible} />
      <View style={styles.goalContainer}>
        <Text style={styles.listText}>List of goals...</Text>
        <FlatList
          data={goals} //accepts an array i.e the goals
          renderItem={({ item, index, separators }) => {
            return (
              <GoalItem
                key={item.id}
                id={item.id} //if we have keyextractor to be id then item.id
                item={item}
                onDeleteGoal={deleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
